import { SidebarUsage } from "@/components/SideBar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex gap-5  container  max-w-[1280px]  mx-auto
"
    >
      <div className="hidden lg:block min-h-full    border-r border-zinc-600 sticky top-[72px]   ">
        <h1 className="text-lg font-semibold pt-4 ps-4">Account</h1>
        <SidebarUsage />
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
