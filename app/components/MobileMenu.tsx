"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { navbarLinks } from "./NavbarLinks";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const location = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col">
          {navbarLinks.map((link) => (
            <Link key={link.id} href={link.href} className={cn(location === link.href ? 'bg-muted' : ' hover:bg-muted hover:bg-opacity-75', "group flex items-center px-2 py-2 font-medium rounded-md")}>
                {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
