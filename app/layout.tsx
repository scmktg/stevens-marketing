import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Stevens Marketing | Independent Marketing Consultancy",
  description: "Research-led advertising, persuasive copywriting and continuous optimisation. Independent marketing consultancy with performance-based remuneration.",
  robots: { index: true, follow: true },
  icons: { icon: [{ url: "https://raw.githubusercontent.com/scmktg/stevens-marketing/main/icon-sm.png", type: "image/png" }], shortcut: "https://raw.githubusercontent.com/scmktg/stevens-marketing/main/icon-sm.png", apple: "https://raw.githubusercontent.com/scmktg/stevens-marketing/main/icon-sm.png" },
  openGraph: { title: "Stevens Marketing — The Art of Selling.", description: "Independent thinking. Commercial outcomes.", type: "website", siteName: "Stevens Marketing" },
  twitter: { card: "summary_large_image", title: "Stevens Marketing — The Art of Selling.", description: "Independent thinking. Commercial outcomes." },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {})
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
