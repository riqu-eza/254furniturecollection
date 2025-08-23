import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/Store/Provider";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";

const poppin = Poppins({
  weight: ["100", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "254 Furniture Collection - Affordable Furniture in Nairobi",
  description:
    "Shop quality, stylish, and affordable furniture in Nairobi with 254 Furniture Collection. Explore sofas, beds, dining sets, office desks, and custom-made designs delivered across Kenya.",
  keywords: [
    "furniture Nairobi",
    "furniture Kenya",
    "affordable furniture Nairobi",
    "buy furniture online Kenya",
    "Nairobi sofas",
    "beds in Nairobi",
    "office furniture Kenya",
    "dining sets Nairobi",
    "home furniture Kenya",
    "custom furniture Nairobi",
    "modern furniture Kenya",
    "wooden furniture Nairobi",
    "furniture shops Nairobi",
    "furniture delivery Nairobi",
    "living room sets Kenya",
    "254 Furniture Collection",
  ],
  openGraph: {
    type: "website",
    url: "https://www.254furniturecollection.co.ke/",

    title: "254 Furniture Collection - Online Furniture Store in Nairobi",
    description:
      "Experience comfort and style with 254 Furniture Collection. Shop quality sofas, beds, office furniture, and custom pieces online with delivery across Nairobi and Kenya.",
    // siteName: "254 Furniture Collection",
    images: [
      {
        url: "https://www.254furniturecollection.co.ke/og-furniture.png", // Ensure this image exists in your /public folder
        
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.254furniturecollection.co.ke/",
    title: "Dancah Technology – Smart Property Solutions",
    description:
      "Experience comfort and style with 254 Furniture Collection. Shop quality sofas, beds, office furniture, and custom pieces online with delivery across Nairobi and Kenya.",
    images: [
      "https://www.254furniturecollection.co.ke/og-furniture.png",
    ],
  },
};


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
