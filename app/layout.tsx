import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "../styles/globals.css"
import Nav from "@/src/FE/components/utils/Nav";
import NotificationApp from "@/src/FE/contexts/Notification";
import { cookies } from "next/headers";
import { verifyUserDataToken } from "@/src/FE/JWT";
import { SessionProvider } from "@/src/FE/hooks/SessionHook";

const inter = Barlow_Condensed({weight:["400","900"] ,subsets:["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={inter.className+' overflow-x-hidden'}>
        <SessionProvider>
      <Nav  />
        <NotificationApp>
        {children}
        </NotificationApp>
        </SessionProvider>
        <footer className="bg-black text-white py-8 text-center mt-20">
      © SOCIFIT Inc. 2023
      </footer>
        </body>
     
    </html>
  );
}
