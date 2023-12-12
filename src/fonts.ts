import {
  Titillium_Web,
  Source_Sans_3,
  //   Merriweather_Sans,
  Source_Serif_4,
} from "next/font/google";

/*
Titillium+Web:700
Source+Serif+Pro:400,700
Merriweather+Sans:400,700
Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic
*/
export const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-titillium",
});
export const serifPro = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-serif-pro",
});
// export const merriweatherSans = Merriweather_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
//   variable: "--font-merriweather-sans",
// });
export const sansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans-pro",
});
