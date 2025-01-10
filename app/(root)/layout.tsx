import MobileNav from "@/components/MobileNav";
import  Sidebar from "@/components/Sidebar";
import  Image  from "next/image";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIN = { firstName: 'Adrian', LastName: 'JSM' }:

  return (
    <main className="flex h-screen w-full font-inter">
       <Sidebar user={loggedIN} />

       <div className="flex size-full flex-col">
        <div className="root-layout">
           <Image src="/icons/logo.svg" width={30} height={30} 
           alt ="logo" />
           <div>

               <MobileNav user=
               {loggedIN} />



           </div>
          
          </div>
          {children}
       </div>

    </main>
  );
}
