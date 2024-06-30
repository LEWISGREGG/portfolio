'use client'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import ThemeButton from './ThemeButton';
import { motion } from "framer-motion";

export const navigationItems = [
    {
        name: "Home",
        href: '/'
    },
    {
        name: "Experience",
        href: '/experience'
    },
    {
        name: "Projects",
        href: '/projects'
    },
    {
        name: "Contact",
        href: '/contact'
    },

]

function Navbar() {
    const pathname = usePathname();
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12 ">
        <motion.div 
        whileHover={{
        scale: 1.05}}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.1 }}
        whileInView={{ opacity: 1 }}
        animate={{
        scale: [1, 1.2, 1.2, 1.3, 1],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.1, 1.0],
        
      }}
        className="col-span-6 flex md:col-span-3 sm:col-span-3"> 
            <Link href="/">
            <Image
            src="https://www.svgrepo.com/show/94528/satellite-dish.svg"
            width={40}
            className="rounded-full hover:scale-105 ml-8 animate-ping cursor-pointer transition-transform duration-500 ease-in-out lg:hidden"
            height={40}
            alt="logo"
            />
                <h1 className="text-3xl hidden lg:flex"><span className="dark:text-green-500 font-extrabold">sergio </span> <span className="text-red-500 dark:text-slate-200 font-light"> kushnirenko</span>
                <span className="text-red-500 dark:text-slate-200 font-light">.</span></h1>
            </Link>
        </motion.div>
        <div 
        className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
            <NavigationMenuList>
            {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
            <Link href={item.href} legacyBehavior passHref>
            <NavigationMenuLink 
            active={pathname === item.href} className={navigationMenuTriggerStyle()}>
            {item.name}
            </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
        <ThemeButton/>
        </div>
        <div className="flex items-center justify-end md:col-span-3 sm:col-span-3 col-span-6">

        <motion.div
        initial={{
            x: "10%",
        }}
            animate={{
            x: "-10%",
        }}
            transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "linear",
        }}
        >
        <Button className='hidden sm:flex ' asChild>
            <a  href="/RESUME.docx" target={"_blank"} className="relative inline-flex items-center justify-start animate-pulse px-6 py-3 
            overflow-hidden font-medium transition-all bg-red-500 dark:bg-green-500 rounded-xl group ">Resume</a>
        </Button>
        </motion.div>
        <div className='sm:hidden'><MobileMenu/></div>
        </div>
    </div>
  )
}

export default Navbar