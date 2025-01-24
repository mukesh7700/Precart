import { SidebarUsage } from "@/components/SideBar"


export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex gap-5 container mx-auto">
      <div className="hidden lg:block  border-r border-neutral-500">
        <h1 className="text-lg font-semibold pt-4 ps-4">Account</h1>
      <SidebarUsage/>
      </div>
        
        {children}</section>
  }