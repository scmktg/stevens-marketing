import { NextResponse } from "next/server";
type Input = { name?:unknown; business?:unknown; email?:unknown; website?:unknown; goals?:unknown; company_fax?:unknown };
const limits={name:100,business:120,email:254,website:500,goals:4000} as const;
export async function POST(request: Request) {
  let body: Input;
  try { body=await request.json(); } catch { return NextResponse.json({error:"Invalid request."},{status:400}); }
  if (!body || typeof body!=="object") return NextResponse.json({error:"Invalid request."},{status:400});
  if (body.company_fax) return NextResponse.json({ok:true});
  const values: Record<string,string>={};
  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    if (body[key]!==undefined && typeof body[key]!=="string") return NextResponse.json({error:"Invalid field."},{status:400});
    values[key]=String(body[key]||"").trim();
    if (values[key].length>limits[key]) return NextResponse.json({error:"A field is too long."},{status:400});
  }
  if (!values.name || !values.business || !values.email || values.goals.length<10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    return NextResponse.json({error:"Please complete all required fields with a valid email address."},{status:400});
  if (values.website) { try { const url=new URL(values.website); if(!["http:","https:"].includes(url.protocol)) throw Error(); } catch { return NextResponse.json({error:"Enter a valid website URL beginning with https://."},{status:400}); } }
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL }=process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL)
    return NextResponse.json({error:"Enquiries are not yet configured. Please try again after the contact service is connected."},{status:503});
  const plain=`New Stevens Marketing enquiry\n\nName: ${values.name}\nBusiness: ${values.business}\nEmail: ${values.email}\nWebsite: ${values.website||"Not provided"}\n\nGoals:\n${values.goals}`;
  try {
    const result=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:CONTACT_FROM_EMAIL,to:[CONTACT_TO_EMAIL],reply_to:values.email,subject:`Website enquiry — ${values.business.replace(/[\r\n]/g," ")}`,text:plain}),cache:"no-store"});
    if (!result.ok) return NextResponse.json({error:"We couldn't deliver your enquiry. Please try again."},{status:502});
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({error:"The enquiry service is temporarily unavailable. Please try again."},{status:502}); }
}
