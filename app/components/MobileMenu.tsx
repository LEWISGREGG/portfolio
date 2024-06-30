'use client'
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { navigationItems } from './Navbar';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeButton from './ThemeButton';

function MobileMenu() {
    const location = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false)
    }, [location])
  return (
    <div>
        <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon">
                <Menu className='h-4 w-4'/>
            </Button>
            </SheetTrigger>
            <SheetContent>
                <div className='mt-5 flex px-2 space-y-1 flex-col'>
                {navigationItems.map((item, index) => (
                    <Link key={index} href={item.href} className={cn(location === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75' , "group flex items-center px-2 py-2 text-md font-semibold rounded-md")}>
                        {item.name}
                    </Link>
                    
                ))}
                <ThemeButton/>
                <Button className='w-1/4 sm:flex ' asChild>
                <a  href="/RESUME.docx" target={"_blank"} className="relative inline-flex items-center justify-start animate-pulse px-6 py-3 
                overflow-hidden font-medium transition-all bg-red-500 dark:bg-green-500 rounded-xl group ">Resume</a>
                </Button>
                </div>
                <SheetFooter className='mt-5'>
                <SheetClose asChild>
                <Button type="submit">Close</Button>
                </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileMenu