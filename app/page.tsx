import ContactForm from "./contact-form";

const methodology = [
  { number: "01", title: "Research", detail: "We study your business, products, customers, competitors and market to identify where the greatest commercial opportunities exist." },
  { number: "02", title: "Plan", detail: "We turn research into a clear advertising strategy: the right audience, the right message, the right channels and a commercially considered budget." },
  { number: "03", title: "Execute", detail: "We develop the copy, campaigns and customer journeys needed to communicate your offer persuasively and bring the strategy to market." },
  { number: "04", title: "Optimise", detail: "We measure what happens, identify what works, improve what doesn't, and continuously refine campaigns around meaningful business outcomes." }
];
const capabilities = [
  ["Commercial Research", "Market research, competitor analysis, customer intent, product positioning and opportunity identification."],
  ["Advertising Strategy", "Campaign architecture, audience selection, channel planning and budget allocation."],
  ["Copywriting & Creative", "Persuasive messaging, advertising copy, landing page communication and offer development."],
  ["Digital Advertising", "Planning, execution and management of measurable advertising campaigns."],
  ["Measurement & Attribution", "Conversion tracking, performance analysis, reporting and commercially relevant measurement."],
  ["Continuous Optimisation", "Testing, campaign refinement, conversion improvement and ongoing performance development."]
];
function Wordmark({ light = false }: { light?: boolean }) {
  return <span className={`wordmark script-wordmark${light ? " wordmark-light" : ""}`}><strong>Stevens</strong><span>Marketing</span></span>;
}
function Header() {
  return <header className="site-header"><div className="shell header-inner">
    <a href="#top" className="brand-link" aria-label="Stevens Marketing, back to top"><Wordmark /></a>
    <nav className="desktop-nav" aria-label="Main navigation"><a href="#approach">Approach</a><a href="#expertise">Expertise</a><a href="#model">Our Model</a><a href="#contact">Contact</a></nav>
    <a className="header-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    <details className="mobile-menu"><summary aria-label="Toggle navigation">Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation"><a href="#approach">Approach</a><a href="#expertise">Expertise</a><a href="#model">Our Model</a><a href="#contact">Contact</a></nav></details>
  </div></header>;
}
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><div id="top" /><Header/><main id="main">
    <section className="hero cinematic-hero" aria-labelledby="hero-title">
      <video className="hero-video" autoPlay muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
        <source src="https://videos.pexels.com/video-files/5651780/5651780-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy shell">
        <p className="hero-kicker">Independent marketing. Measurable results.</p>
        <h1 id="hero-title">More Customers.<br />More Growth.<span>GUARANTEED.</span></h1>
        <p className="hero-description">Research-led campaigns. Sharper messaging. Performance-based partnerships built around agreed commercial results.</p>
        <div className="hero-actions"><a className="button-primary" href="#contact">Discuss your business <span aria-hidden="true">↗</span></a><a className="hero-secondary" href="#approach">See our approach <span aria-hidden="true">↗</span></a></div>
      </div>
      <p className="hero-footnote">Commission is based on outcomes agreed with each client. Results depend on the partnership terms.</p>
    </section>
    <section className="intro section-pad" id="approach"><div className="shell editorial-grid"><div><p className="eyebrow">A Different Approach</p><h2>Good marketing starts with <em>understanding</em> the business.</h2></div><div className="intro-prose"><p>Before we recommend a campaign, we do the work to understand what makes a business successful.</p><ul className="comma-list"><li>Its customers.</li><li>Its competitors.</li><li>Its products.</li><li>Its margins.</li><li>Its opportunities.</li></ul><p>Because the strongest advertising doesn&apos;t begin with a platform or a budget.</p><p>It begins with knowing what needs to be sold, who needs to buy it, and why they should choose you.</p></div></div></section>
    <section className="method section-pad"><div className="shell"><p className="eyebrow">Our Approach</p><div className="section-heading"><h2>Research. Strategy.<br/>Execution. <em>Refinement.</em></h2><p>Four disciplines. One commercial purpose.</p></div><div className="indexed-list">{methodology.map(item=><div className="indexed-row" key={item.number}><span className="index-number">{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div></div></section>
    <section id="expertise" className="expertise section-pad"><div className="shell"><div className="editorial-grid"><div><p className="eyebrow">Expertise</p><h2>Every decision should have a <em>commercial purpose.</em></h2></div><p className="section-aside">From the first question we ask to the final campaign adjustment, our work is grounded in what matters to your business.</p></div><div className="capabilities">{capabilities.map(([title,description],i)=><div className="capability" key={title}><span className="small-index">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>
    <section id="model" className="partnership section-pad"><div className="shell partnership-grid"><div><p className="eyebrow">Aligned Incentives</p><h2>We succeed<br/>when <em>you do.</em></h2></div><div><p className="model-lead">A different commercial arrangement. A shared interest in results.</p><p>Stevens Marketing operates on a performance-based commission model. Rather than charging conventional monthly agency management retainers, our remuneration is tied to clearly agreed commercial outcomes.</p><p>That means our focus remains where it belongs: understanding your business, attracting the right customers, and creating measurable value.</p><p className="model-disclaimer">Every partnership begins with a clear agreement on objectives, attribution and how results are measured. Advertising and other third-party costs are agreed separately.</p><a className="button-light" href="#contact">Discuss a partnership <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="philosophy section-pad"><div className="shell philosophy-inner"><p className="eyebrow">An Enduring Principle</p><blockquote>Technology changes.<br/><em>Human nature doesn&apos;t.</em></blockquote><p>The platforms evolve. The principles of persuasion, positioning and effective advertising endure. We combine those principles with modern data, technology and disciplined execution.</p></div></section>
    <section className="contact section-pad" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">Contact</p><h2>Let&apos;s talk<br/><em>business.</em></h2><p>Tell us what you sell, who you&apos;re trying to reach, and what you&apos;re looking to achieve.</p><p>We&apos;ll explore whether there&apos;s an opportunity to work together.</p></div><ContactForm/></div></section>
  </main><footer className="footer"><div className="shell footer-top"><a href="#top" aria-label="Stevens Marketing home"><Wordmark light/></a><p>Independent thinking.<br/>Commercial outcomes.</p></div><div className="shell footer-bottom"><small>© {new Date().getFullYear()} Stevens Marketing.</small><nav aria-label="Footer navigation"><a href="#approach">Approach</a><a href="#expertise">Expertise</a><a href="#model">Our Model</a><a href="#contact">Contact</a></nav><a href="#top">Back to top ↑</a></div></footer></>;
}
