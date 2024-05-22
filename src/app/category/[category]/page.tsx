import { Input } from "@/components/ui/input";
import { HomeIcon } from "lucide-react";
import * as Select from "@/components/ui/select";
import CategoryFeature from "@/components/features/category";

interface PageProps {
    params: {
        category: string;
    };
}
export default function Page({ params: { category } }: PageProps) {
    return (
        <div className="w-[80%] mx-auto py-4">
            <div className="bg-white border border-border py-2 px-4 rounded">
                <div className="flex gap-x-2 items-center">
                    <div className="flex items-center space-x-1">
                        <HomeIcon size={20} />
                        <p>Home</p>
                    </div>
                    <p className="w-5 h-5 bg-muted rounded flex items-center justify-center">
                        {">"}
                    </p>
                    <div>
                        <p>Categories</p>
                    </div>
                    <p className="w-5 h-5 bg-muted rounded flex items-center justify-center">
                        {">"}
                    </p>
                    <div>
                        <p>Smart Phones</p>
                    </div>
                </div>
            </div>

            <div className="mb-2" />
            <CategoryFeature />
        </div>
    );
}
