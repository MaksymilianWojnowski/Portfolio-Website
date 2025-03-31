import Navbar from "./components/Navbar";
import "./globals.css"; // includes @tailwind directives

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-light text-dark dark:bg-dark dark:text-light">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
