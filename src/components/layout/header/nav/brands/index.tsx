import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRightIcon } from "lucide-react";

export default function BrandsNav() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Brands</NavigationMenuTrigger>

            <NavigationMenuContent>
                <div className="md:w-[400px] lg:w-[500px] px-8 py-6 space-y-2 max-h-[500px] overflow-y-auto">
                    <div className="bg-muted p-2 rounded">
                        <p className="text-sm text-muted-foreground">
                            Pick from a wind range of internationally recognized
                            brands
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
    );
}

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
