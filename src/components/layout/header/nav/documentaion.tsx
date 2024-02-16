import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function DocumentationLink() {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:underline cursor-pointer"
                )}
                href="/docs"
            >
                Documentation
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}
