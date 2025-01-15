// "use client"

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { ChevronRight, Users, UserCog, Home, LayoutDashboard,SquareActivity } from 'lucide-react'

// const sidebarNavItems = [
//   {
//     title: "Dashboard",
//     href: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Home",
//     href: "/",
//     icon: Home,
//   },
//   {
//     title: "User Management",
//     href: "/dashboard/users",
//     icon: Users,
//     subItems: [
//       { title: "Create User", href: "/dashboard/users/create" },
//       { title: "Edit User", href: "/dashboard/users/edit" },
//       { title: "Update User", href: "/dashboard/users/update" },
//     ]
//   },
//   {
//     title: "User Activity",
//     href: "/dashboard/activity",
//     icon: SquareActivity,
//     subItems: [
//       { title: "Create Activity", href: "/dashboard/activity/create" },
//       { title: "Edit Activity", href: "/dashboard/activity/edit" },
//       { title: "Update Activity", href: "/dashboard/activity/update" },
//     ]
//   },
//   {
//     title: "Employee Management",
//     href: "/dashboard/employees",
//     icon: UserCog,
//     subItems: [
//       { title: "Create Employee", href: "/dashboard/employees/create" },
//       { title: "Edit Employee", href: "/dashboard/employees/edit" },
//       { title: "Update Employee", href: "/dashboard/employees/update" },
//     ]
//   },
  
// ]

// interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
//   open: boolean
// }

// export function Sidebar({ open, className }: SidebarProps) {
//   const pathname = usePathname()
//   const [openItems, setOpenItems] = useState<string[]>([])

//   useEffect(() => {
//     const activeParent = sidebarNavItems.find(item => 
//       item.subItems?.some(subItem => pathname === subItem.href)
//     )
//     if (activeParent && !openItems.includes(activeParent.title)) {
//       setOpenItems(prev => [...prev, activeParent.title])
//     }
//   }, [pathname])

//   const toggleItem = (title: string) => {
//     setOpenItems(prev =>
//       prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
//     )
//   }

//   return (
//     <nav
//       className={cn(
//         "flex flex-col border-r bg-muted transition-all duration-300",
//         open ? "w-64" : "w-16",
//         className
//       )}
//     >
//       <ScrollArea className="flex-1">
//         {sidebarNavItems.map((item) => (
//           <div key={item.href}>
//             <Button
//               variant={pathname === item.href ? "secondary" : "ghost"}
//               className={cn(
//                 "w-full justify-start",
//                 !open && "justify-center",
//                 openItems.includes(item.title) && "bg-muted-foreground/10"
//               )}
//               onClick={() => item.subItems ? toggleItem(item.title) : null}
//               asChild={!item.subItems}
//             >
//               {item.subItems ? (
//                 <div className="flex items-center w-full">
//                   <item.icon className="h-4 w-4 mr-2" />
//                   {open && (
//                     <>
//                       <span>{item.title}</span>
//                       <ChevronRight className={cn(
//                         "ml-auto h-4 w-4 transition-transform",
//                         openItems.includes(item.title) && "rotate-90"
//                       )} />
//                     </>
//                   )}
//                 </div>
//               ) : (
//                 <Link href={item.href} className="flex items-center w-full">
//                   <item.icon className="h-4 w-4 mr-2" />
//                   {open && <span>{item.title}</span>}
//                 </Link>
//               )}
//             </Button>
//             {open && item.subItems && openItems.includes(item.title) && (
//               <div className="pl-6 py-2">
//                 {item.subItems.map((subItem) => (
//                   <Button
//                     key={subItem.href}
//                     variant={pathname === subItem.href ? "secondary" : "ghost"}
//                     className="w-full justify-start"
//                     asChild
//                   >
//                     <Link href={subItem.href}>{subItem.title}</Link>
//                   </Button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </ScrollArea>
//     </nav>
//   )
// }


import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Users, UserCog, Home, LayoutDashboard, SquareActivity } from 'lucide-react'

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "User Management",
    href: "/dashboard/users",
    icon: Users,
    subItems: [
      { title: "Create User", href: "/dashboard/users/create" },
      { title: "Edit User", href: "/dashboard/users/edit" },
      { title: "Update User", href: "/dashboard/users/update" },
    ]
  },
  {
    title: "User Activity",
    href: "/dashboard/activity",
    icon: SquareActivity,
    subItems: [
      { title: "Create Activity", href: "/dashboard/activity/create" },
      { title: "Edit Activity", href: "/dashboard/activity/edit" },
      { title: "Update Activity", href: "/dashboard/activity/update" },
    ]
  },
  {
    title: "Employee Management",
    href: "/dashboard/employees",
    icon: UserCog,
    subItems: [
      { title: "Create Employee", href: "/dashboard/employees/create" },
      { title: "Edit Employee", href: "/dashboard/employees/edit" },
      { title: "Update Employee", href: "/dashboard/employees/update" },
    ]
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  open: boolean
}

export function Sidebar({ open, className }: SidebarProps) {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Automatically open parent items if the current path matches a submenu item
  useEffect(() => {
    const activeParent = sidebarNavItems.find(item =>
      item.subItems?.some(subItem => subItem.href === pathname)
    )
    if (activeParent) {
      setOpenItems(prev => new Set(prev).add(activeParent.title))
    }
  }, [pathname])

  // Function to toggle submenu visibility
  const toggleItem = (title: string) => {
    setOpenItems(prev => {
      const updated = new Set(prev)
      if (updated.has(title)) {
        updated.delete(title)
      } else {
        updated.add(title)
      }
      return updated
    })
  }

  return (
    <nav className={cn(
      "flex flex-col border-r bg-muted transition-all duration-300",
      open ? "w-64" : "w-16",
      className
    )}>
      <ScrollArea className="flex-1">
        {sidebarNavItems.map(item => (
          <div key={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                !open && "justify-center",
                openItems.has(item.title) && "bg-muted-foreground/10"
              )}
              onClick={() => item.subItems ? toggleItem(item.title) : null}
              asChild={!item.subItems}
            >
              {item.subItems ? (
                <div className="flex items-center w-full">
                  <item.icon className="h-4 w-4 mr-2" />
                  {open && (
                    <>
                      <span>{item.title}</span>
                      <ChevronRight
                        className={cn(
                          "ml-auto h-4 w-4 transition-transform",
                          openItems.has(item.title) && "rotate-90"
                        )}
                      />
                    </>
                  )}
                </div>
              ) : (
                <Link href={item.href} className="flex items-center w-full">
                  <item.icon className="h-4 w-4 mr-2" />
                  {open && <span>{item.title}</span>}
                </Link>
              )}
            </Button>
            {open && item.subItems && openItems.has(item.title) && (
              <div className="pl-6 py-2">
                {item.subItems.map(subItem => (
                  <Button
                    key={subItem.href}
                    variant={pathname === subItem.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={subItem.href}>{subItem.title}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
    </nav>
  )
}
