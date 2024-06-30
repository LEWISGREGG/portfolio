'use client'
import { navigationItems } from './Navbar';
import Link from 'next/link';

function Footer() {

  const currentYear = new Date().getFullYear();
  
  return (
    <div className="my-12">
        <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
            <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
                {item.name}
            </Link>
            </div>
        ))}
        </ul>
        <p className="mt-2 text-center text-muted-foreground">Serhio Kushnirenko Professional Engineer &copy; {currentYear}</p>
    </div>
  )
}

export default Footer