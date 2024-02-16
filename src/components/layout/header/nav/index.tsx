"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    SearchIcon,
    ArrowRightIcon,
    PhoneIcon,
    MessageCircleMoreIcon,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import BrandsNav from "./brands";
import CategoriesNav from "./categories";
import HelpNav from "./help";
import DocumentationLink from "./documentaion";

export default function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <CategoriesNav />

                <BrandsNav />

                <DocumentationLink />

                <HelpNav />
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return <li></li>;
});

ListItem.displayName = "ListItem";
