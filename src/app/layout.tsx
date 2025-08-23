import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/Store/Provider";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";

const poppin = Poppins({
  weight: ["100", "400"],
  subsets: ["latin"],
});




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
