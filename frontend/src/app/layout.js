import "./globals.css";

export const metadata = {
  title: "Dinas Pratap Singh | Blockchain Developer & Crypto Trader",
  description:
    "Portfolio of Dinas Pratap Singh — Blockchain Developer, Crypto Trader, and Full-Stack Engineer specializing in Web3, DeFi, and decentralized applications.",
  keywords: [
    "blockchain developer",
    "crypto trader",
    "web3",
    "DeFi",
    "full-stack engineer",
    "Dinas Pratap Singh",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg-dark text-text-light font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
