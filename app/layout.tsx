import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "preCourse",
  description: "woota-precourse using page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
