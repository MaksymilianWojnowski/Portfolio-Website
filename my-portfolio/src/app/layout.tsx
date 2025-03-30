// app/layout.tsx
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
    <html lang="en">
      <body className="bg-dark text-light">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
