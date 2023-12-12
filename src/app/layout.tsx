import type { Metadata } from "next";
import "./globals.css";
import TopNavigation from "@/compoments/common/top";
import { sansPro, serifPro, titillium } from "@/fonts";
import Footer from "@/compoments/common/footer";
import { IconContext } from "react-icons";

export const metadata: Metadata = {
  title: "RealWorld",
  description:
    "RealWorld app implementation powered by Next.js 13+ (Layout, Server Components and so on)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${sansPro.variable} ${serifPro.variable} ${titillium.variable}`}
    >
      {/* <Head>
          <link
            href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
            rel="stylesheet"
            type="text/css"
            data-precedence="default"
          ></link>
          <link
            href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
            rel="stylesheet"
            type="text/css"
            data-precedence="default"
          />
        </Head> */}
      <body>
        <TopNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
