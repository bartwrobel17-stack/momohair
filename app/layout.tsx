import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"MomoHair | Salon fryzjerski w Lęborku",description:"MomoHair, salon fryzjerski przy ul. Mostnika 1 w Lęborku. Umów wizytę i poznaj salon.",metadataBase:new URL("https://momohair.vercel.app"),openGraph:{title:"MomoHair | Salon fryzjerski w Lęborku",description:"Nowoczesny salon fryzjerski w centrum Lęborka.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}