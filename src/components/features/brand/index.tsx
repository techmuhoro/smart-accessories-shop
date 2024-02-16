"use client";
import { useParams } from "next/navigation";
import * as Select from "@/components/ui/select";
import BrandFilter from "./filter";

export default function BrandBase() {
    const { brand } = useParams<{ brand: string }>();

    return (
        <div className="lg:max-w-[75%] mx-auto pt-10">
            <div className="space-y-4">
                <div>
                    <p className="capitalize font-semibold text-lg">
                        Brand {">"} {brand}
                    </p>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, aliquid.
                    </p>
                </div>

                <div className="flex">
                    <div className="w-[25%]  p-2">
                        <BrandFilter />
                    </div>

                    <div className="w-[75%]">
                        <div>
                            <p>Items</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
