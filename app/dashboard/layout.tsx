import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode}){
    return (
        <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
            <div className="w-full flex-node md:w-64">
                {/* ดึง side navbar มาใช้ */}
                <SideNav/>
            </div>
            {/* หน้าย่อยต่างๆ */}
            <div className="grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
}