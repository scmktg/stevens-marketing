"use client";
import { useState, type FormEvent } from "react";
export default function ContactForm() {
  const [state,setState]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [message,setMessage]=useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form=event.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending");setMessage("");
    const data=new FormData(form);
    try {
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(data.entries()))});
      const payload: {error?:string}=await response.json();
      if (!response.ok) throw new Error(payload.error || "Your enquiry could not be sent. Please try again.");
      setState("sent");setMessage("Your enquiry has been sent. Thank you for getting in touch.");form.reset();
    } catch (error) {
      setState("error");setMessage(error instanceof Error ? error.message : "Unable to send your enquiry.");
    }
  }
  return <form className="contact-form" onSubmit={submit} noValidate={false}>
    <div className="form-row"><label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength={100}/></label><label>Business <span aria-hidden="true">*</span><input name="business" autoComplete="organization" required maxLength={120}/></label></div>
    <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
    <label>Website <span className="optional">(optional)</span><input name="website" type="url" placeholder="https://" maxLength={500}/></label>
    <label>What are you looking to achieve? <span aria-hidden="true">*</span><textarea name="goals" rows={5} required minLength={10} maxLength={4000}/></label>
    <div className="honey" aria-hidden="true"><label>Leave this blank<input name="company_fax" tabIndex={-1} autoComplete="off"/></label></div>
    <button className="button-primary" type="submit" disabled={state==="sending"}>{state==="sending"?"Sending…":"Start the conversation"} <span aria-hidden="true">↗</span></button>
    <p className={`form-status ${state}`} aria-live="polite" role={state==="error"?"alert":"status"}>{message}</p>
  </form>;
}
