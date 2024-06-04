import {
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CategoriesNav() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger className="">
                Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className="w-[300px] p-4 space-y-2">
                    <h3 className="font-medium">Categories</h3>

                    <div className="space-y-2">
                        <CategoryItem
                            label="Smart Phones"
                            url="/category/phones"
                            count={2}
                        />
                        <CategoryItem
                            label="Tv's"
                            url="/category/tvs"
                            count={8}
                        />
                        <CategoryItem
                            label="Laptops"
                            url="/category/laptops"
                            count={10}
                        />
                        <CategoryItem
                            label="Chargers"
                            url="/category/chargers"
                            count={21}
                        />
                        <CategoryItem
                            label="Cables"
                            url="/category/cables"
                            count={12}
                        />
                        <CategoryItem
                            label="Headsets"
                            url="/category/headsets"
                            count={4}
                        />
                    </div>
                </div>
                {/* <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                            <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                            >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                    shadcn/ui
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                    Beautifully designed components that you can
                                    copy and paste into your apps. Accessible.
                                    Customizable. Open Source.
                                </p>
                            </a>
                        </NavigationMenuLink>
                    </li>
                </ul> */}
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}

function CategoryItem({
    count,
    label,
    url,
}: {
    count: number;
    label: string;
    url: string;
}) {
    return (
        <>
            <Link href={url} className="group flex items-center cursor-pointer">
                <p className="text-muted-foreground">{label}</p>

                <div className="flex ml-auto items-center gap-x-1 mr-2 group-[&:hover]:mr-0 transition-all duration-300">
                    <p className="bg-muted text-foreground h-8 w-8 flex items-center justify-center text-sm rounded-md">
                        {count}
                    </p>
                    <ArrowRightIcon
                        size={18}
                        className="text-muted-foreground invisible group-hover:visible"
                    />
                </div>
            </Link>
        </>
    );
}
