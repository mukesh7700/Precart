import { SidebarUsage } from "@/components/SideBar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex gap-5  container   max-w-[1280px]  mx-auto
"
    >
      <div className="hidden lg:block h-fit  sticky top-[50px]   ">
        <h1 className="text-lg font-semibold pt-4 ps-4">Account</h1>
        <SidebarUsage />
      </div>
      <div className=" border-l border-zinc-600 w-full">{children}</div>
    </section>
  );
}
