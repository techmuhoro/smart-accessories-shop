import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PhoneIcon, MessageCircleMoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HelpNav() {
    return (
        <>
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
        </>
    );
}
