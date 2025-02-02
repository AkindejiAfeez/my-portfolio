 "use client";


 import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
 import { usePathname } from "next/navigation";
 import Link from "next/link";
 import {CiMenuFries} from 'react-icons/ci';


 const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "service",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
 ]
 
 
 
 const MobileNav =() => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                
                <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Afeez<span className="text-accent">.</span>
                    </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((links, index) => {
                        return(
                            <Link
                            href={links.path}
                            key={index}
                            className={`${links.path === pathname && "text-accent border-accent"} text-xl 
                            capitalize hover:text-accent transition-all`}
                            >
                                {links.name}
                            </Link>
                        );
                    })}
                </nav>
                </SheetContent>
        </Sheet>
    )
 }

 export default MobileNav;