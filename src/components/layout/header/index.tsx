import { Input } from "@/components/ui/input";
import { SearchIcon, PhoneIcon, MessageCircleMoreIcon } from "lucide-react";

import Navigation from "./nav/index";

export default function Header() {
    return (
        <div className="bg-primary text-primary-foreground flex px-24 py-3">
            <div className="flex items-center space-x-4">
                <div>
                    <p className="font-bold text-2xl">Ecom</p>
                </div>
                <SearchInput />
            </div>

            <div className="ml-auto flex">
                <Navigation />
            </div>
        </div>
    );
}

function SearchInput() {
    return (
        <div className="relative">
            <Input
                placeholder="Search"
                className="pl-7 text-muted-foreground"
            />
            <SearchIcon
                size={16}
                className="absolute top-[13px] text-muted-foreground left-2 "
            />
        </div>
    );
}
