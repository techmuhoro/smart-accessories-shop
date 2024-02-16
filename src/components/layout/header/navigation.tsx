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

export default function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="">
                        Getting Started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that
                                            you can copy and paste into your
                                            apps. Accessible. Customizable. Open
                                            Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <div className="md:w-[400px] lg:w-[500px] px-8 py-6 space-y-2 max-h-[400px] overflow-y-scroll">
                            <div className="bg-muted p-2 rounded">
                                <p className="text-sm text-muted-foreground">
                                    Pick from a wind range of internationally
                                    recognized brands
                                </p>
                            </div>
                            <div className="space-y-1">
                                <BrandItem />
                                <BrandItem />
                                <BrandItem />
                                <BrandItem />
                                <BrandItem />
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle())}
                    >
                        Documentation
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(
                            navigationMenuTriggerStyle(),
                            "hover:underline"
                        )}
                        href="tel:+254 743301115"
                    >
                        <p className="flex items-center text-sm gap-x-1">
                            <PhoneIcon size={16} />
                            <span>Call us!</span>
                        </p>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(
                            navigationMenuTriggerStyle(),
                            "hover:underline"
                        )}
                        href="https://wa.me/254743301115/?text='I need help on the ecommerce portal'"
                    >
                        <p className="flex items-center text-sm gap-x-1">
                            <MessageCircleMoreIcon size={16} />
                            <span>Text us!</span>
                        </p>
                    </NavigationMenuLink>
                </NavigationMenuItem>
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

function BrandItem() {
    return (
        <div className="group flex gap-x-2 items-center px-2 py-2 rounded-md hover:bg-muted/40 cursor-pointer">
            <Avatar className="h-14 w-14">
                <AvatarImage
                    src="/images/brand-logos/apple.png"
                    alt="@shadcn"
                />
                <AvatarFallback>AP</AvatarFallback>
            </Avatar>

            <div className="">
                <h2 className="font-semibold">Apple</h2>
                <p className="text-muted-foreground text-sm">
                    Iphones, Macs, Vision Pro, Charges... etc
                </p>
            </div>

            <div className="ml-auto hover:bg-muted px-4 py-1 rounded-full text-muted-foreground invisible group-hover:visible">
                <ArrowRightIcon size={20} />
            </div>
        </div>
    );
}
