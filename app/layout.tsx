import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPREMACY COURSE | English, French & Microsoft Office Training",
  description:
    "Supremacy Course is a modern language and office training center in Antanetibe-Ivato offering English, French, Word, PowerPoint, and Excel courses.",
  keywords: [
    "Supremacy Course",
    "English course",
    "French course",
    "Microsoft Office course",
    "Word training",
    "Excel training",
    "PowerPoint training",
    "Antanetibe Ivato",
  ],
  openGraph: {
    title: "SUPREMACY COURSE",
    description:
      "Learn English, French, and Microsoft Office with confidence. Apprenez pas a pas.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
