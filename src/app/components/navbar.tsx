// "use client"

// import React, { useState } from 'react'
// import Link from 'next/link'
// import { useTheme } from 'next-themes'
// import { Button } from "@/components/ui/button"
// import { Moon, Sun, ChevronDown, Menu } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// interface NavItem {
//   href: string;
//   label: string;
// }

// interface NavItemWithDropdown {
//   label: string;
//   items: NavItem[];
// }

// type NavItemType = NavItem | NavItemWithDropdown;

// const navItems: NavItemType[] = [
//   { href: "/", label: "Home" },
//   { href: "#about", label: "About" },
//   {
//     label: "Fitness",
//     items: [
//       { href: "#transformations", label: "Transformations" },
//       { href: "#blog", label: "Blog" },
//     ]
//   },
//   { href: "#contact", label: "Contact" },
//   {
//     label: "Account",
//     items: [
//       { href: "/login", label: "Login" },
//       { href: "/register", label: "Register" },
//     ]
//   },
//   { href: "/member-tracking", label: "Member Tracking" },
//   { href: "/dashboard", label: "Dashboard" },
// ]

// export function Navbar() {
//   const { theme, setTheme } = useTheme()
//   const [isOpen, setIsOpen] = useState(false)

//   const isNavItemWithDropdown = (item: NavItemType): item is NavItemWithDropdown => {
//     return 'items' in item;
//   }

//   return (
//     <nav className="bg-background border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-primary">
//               FitFlex Gym
//             </Link>
//           </div>
//           <div className="flex items-center">
//             <div className="hidden md:flex items-center space-x-4">
//               {navItems.map((item, index) => (
//                 isNavItemWithDropdown(item) ? (
//                   <DropdownMenu key={index}>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" className="flex items-center">
//                         {item.label} <ChevronDown className="ml-1 h-4 w-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {item.items.map((subItem, subIndex) => (
//                         <DropdownMenuItem key={subIndex} asChild>
//                           <Link href={subItem.href} className="w-full">
//                             {subItem.label}
//                           </Link>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary">
//                     {item.label}
//                   </Link>
//                 )
//               ))}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               >
//                 <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">Toggle theme</span>
//               </Button>
//             </div>
//             {/* Mobile menu */}
//             <div className="md:hidden">
//               <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//               {isOpen && (
//                 <div className="absolute top-16 right-4 bg-background shadow-md rounded-md z-50">
//                   <nav className="flex flex-col gap-4 p-4">
//                     {navItems.map((item, index) => (
//                       isNavItemWithDropdown(item) ? (
//                         <div key={index}>
//                           <h3 className="font-semibold mb-2">{item.label}</h3>
//                           {item.items.map((subItem, subIndex) => (
//                             <Link
//                               key={subIndex}
//                               href={subItem.href}
//                               className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
//                               onClick={() => setIsOpen(false)}
//                             >
//                               {subItem.label}
//                             </Link>
//                           ))}
//                         </div>
//                       ) : (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           className="text-sm font-medium text-muted-foreground hover:text-primary"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {item.label}
//                         </Link>
//                       )
//                     ))}
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                     >
//                       <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                       <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                       <span className="sr-only">Toggle theme</span>
//                     </Button>
//                   </nav>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }




// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import { useTheme } from 'next-themes'
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
// import { Moon, Sun, Menu } from 'lucide-react'

// export function Navbar() {
//     const { theme, setTheme } = useTheme()
//     const [isOpen, setIsOpen] = useState(false)

//     const navItems = [
//         { href: "/", label: "Home" },
//         { href: "#about", label: "About" },
//         { href: "#transformations", label: "Transformations" },
//         { href: "#blog", label: "Blog" },
//         { href: "#contact", label: "Contact" },
//         { href: "/login", label: "Login" },
//         { href: "/register", label: "Register" },
//         { href: "/dashboard", label: "Dashboard" },
//     ]

//     return (
//         <nav className="bg-background border-b">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center">
//                         <Link href="/" className="text-2xl font-bold text-primary">
//                             Power Gym
//                         </Link>
//                     </div>
//                     <div className="hidden md:flex items-center">
//                         {navItems.map((item) => (
//                             <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary mr-4">
//                                 {item.label}
//                             </Link>
//                         ))}
//                         <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                         >
//                             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                             <span className="sr-only">Toggle theme</span>
//                         </Button>
//                     </div>
//                     <div className="md:hidden">
//                         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                             <SheetTrigger asChild>
//                                 <Button variant="ghost" size="icon">
//                                     <Menu className="h-5 w-5" />
//                                     <span className="sr-only">Open menu</span>
//                                 </Button>
//                             </SheetTrigger>
//                             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                                 <SheetTitle className='mb-5'>Navigation</SheetTitle>
//                                 <nav className="flex flex-col gap-4">
//                                     {navItems.map((item) => (
//                                         <Link
//                                             key={item.href}
//                                             href={item.href}
//                                             className="text-sm font-medium text-muted-foreground hover:text-primary"
//                                             onClick={() => setIsOpen(false)}
//                                         >
//                                             {item.label}
//                                         </Link>
//                                     ))}
//                                     <Button
//                                         variant="ghost"
//                                         size="icon"
//                                         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                                     >
//                                         <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                                         <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                                         <span className="sr-only">Toggle theme</span>
//                                     </Button>
//                                 </nav>
//                             </SheetContent>
//                         </Sheet>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface NavItem {
  href: string;
  label: string;
}

interface NavItemWithDropdown {
  label: string;
  items: NavItem[];
}

type NavItemType = NavItem | NavItemWithDropdown;

const navItems: NavItemType[] = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  {
    label: "Fitness",
    items: [
      { href: "#transformations", label: "Transformations" },
      { href: "#blog", label: "Blog" },
    ]
  },
  { href: "#contact", label: "Contact" },
  {
    label: "Account",
    items: [
      { href: "/login", label: "Login" },
      { href: "/register", label: "Register" },
      { href: "/member-admission", label: "Member Admission" },
      { href: "/employee-attendance", label: "Employee Attendance" },
    ]
  },
  { href: "/member-tracking", label: "Member Tracking" },
  { href: "/dashboard", label: "Dashboard" },
]

export function Navbar({ isSticky = true }: { isSticky?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isNavItemWithDropdown = (item: NavItemType): item is NavItemWithDropdown => {
    return 'items' in item;
  }

  return (
    <nav className={`bg-background border-b transition-all duration-300 ${isSticky && isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Power Gym
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                isNavItemWithDropdown(item) ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center">
                        {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link href={subItem.href} className="w-full">
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                )
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Navigation</DrawerTitle>
                    <DrawerDescription>Access all pages from here</DrawerDescription>
                  </DrawerHeader>
                  <nav className="flex flex-col gap-4 p-4">
                    {navItems.map((item, index) => (
                      isNavItemWithDropdown(item) ? (
                        <DropdownMenu key={index}>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center justify-between w-full">
                              {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {item.items.map((subItem, subIndex) => (
                              <DropdownMenuItem key={subIndex} asChild>
                                <Link href={subItem.href} className="w-full" onClick={() => setIsOpen(false)}>
                                  {subItem.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm font-medium text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </nav>
                  <DrawerFooter>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

