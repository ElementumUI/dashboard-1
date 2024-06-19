"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { SidebarLink } from "@/components/ui/sidebar/sidebar-item";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: () => void;
}

export const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={cn(
          "fixed w-60 top-0 xl:sticky bg-white h-full p-5 flex flex-col justify-between z-50 transition-all duration-500 ease-in-out rounded-tr-[50px] rounded-br-[50px]",
          showSidebar ? "left-0" : "-left-full"
        )}
      >
        <section className="flex justify-center mt-5">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </section>
        <section>
          <ul className="space-y-1">
            <li>
              <SidebarLink href="/" active={pathname === "/" && true}>
                <i
                  className={cn(
                    pathname === "/"
                      ? "fi fi-sr-chart-pie-alt text-xl"
                      : "fi fi-rr-chart-pie-alt text-xl"
                  )}
                ></i>
                <span>Dashboard</span>
              </SidebarLink>
            </li>
            <li>
              <SidebarLink href="/users" active={pathname === "/users" && true}>
                <i
                  className={cn(
                    pathname === "/users"
                      ? "fi fi-sr-users text-xl"
                      : "fi fi-rr-users text-xl"
                  )}
                ></i>
                <span>Usuarios</span>
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                href="/products"
                active={pathname === "/products" && true}
              >
                <i
                  className={cn(
                    pathname === "/products"
                      ? "fi fi-sr-box-open-full text-xl"
                      : "fi fi-rr-box-open-full text-xl"
                  )}
                ></i>
                <span>Productos</span>
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                href="/permissions"
                active={pathname === "/permissions" && true}
              >
                <i
                  className={cn(
                    pathname === "/permissions"
                      ? "fi fi-sr-lock text-xl"
                      : "fi fi-rr-lock text-xl"
                  )}
                ></i>
                <span>Permisos</span>
              </SidebarLink>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              <SidebarLink href="/auth/login">
                <i className="fi fi-rr-exit text-xl"></i>
                <span>Cerrar sesión</span>
              </SidebarLink>
            </li>
          </ul>
        </section>
      </aside>
      <div
        role="button"
        onClick={setShowSidebar}
        className={cn(
          "fixed left-0 top-0 w-full h-full z-40 xl:hidden bg-black/30",
          showSidebar ? "block" : "hidden"
        )}
      />
    </>
  );
};
