import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export const SidebarLink = ({
  href,
  children,
  active,
  className,
}: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-x-4 p-3 rounded-lg",
        active ? "bg-gray-100" : "hover:bg-gray-100 transition",
        className
      )}
    >
      {children}
    </Link>
  );
};
