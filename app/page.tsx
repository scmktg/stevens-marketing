import ContactForm from "./contact-form";
import HeaderShell from "./header-shell";

function BrandLogo() {
  return <img className="brand-logo-image" src="https://raw.githubusercontent.com/scmktg/stevens-marketing/main/icon-sm.png" alt="Stevens Marketing" width={180} height={80} />;
}
function Header() {
  return <HeaderShell><div className="shell header-inner">
    <a href="#top" className="brand-link" aria-label="Stevens Marketing, back to top"><BrandLogo /></a>
  </div></HeaderShell>;
}
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><div id="top" /><Header/><main id="main">
    <section className="hero cinematic-hero" aria-labelledby="hero-title">
      <video className="hero-video" autoPlay muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
        <source src="https://videos.pexels.com/video-files/5651780/5651780-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy shell">
        <h1 id="hero-title">More Customers.<br />More Growth.<span>GUARANTEED.</span></h1>
        <div className="hero-actions"><a className="button-primary" href="#contact">Discuss your business <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
    <section className="contact section-pad" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">Contact</p><h2>Let&apos;s talk<br/><em>business.</em></h2><p>Tell us what you sell, who you&apos;re trying to reach, and what you&apos;re looking to achieve.</p><p>We&apos;ll explore whether there&apos;s an opportunity to work together.</p></div><ContactForm/></div></section>
  </main></>;
}
