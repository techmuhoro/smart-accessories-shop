"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import * as Select from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { filterObj } from "@/lib/utils";

export default function BrandFilter() {
    const router = useRouter();
    const pathname = usePathname();

    const [filters, setFilters] = useState({
        category: "",
        series: "",
        name: "",
        minPrice: "",
        maxPrice: "",
        onOffer: false,
    });

    const handleFilter = () => {
        // remove the empty value
        const cleanFilters = {
            ...(filters.category && { category: filters.category }),
            ...(filters.series && { series: filters.series }),
            ...(filters.name && { name: filters.name }),
            ...(filters.minPrice && { minPrice: filters.minPrice }),
            ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
            ...(filters.onOffer && { onOffer: filters.onOffer.toString() }),
        };

        // create a url search params
        const searchParams = new URLSearchParams(cleanFilters).toString();

        router.push(`${pathname}/?${searchParams}`);
    };

    const handleDropdownChange = (name: string) => (value: string) =>
        setFilters((prev) => ({ ...prev, [name]: value }));

    const handleChange =
        (name: string) => (event: React.ChangeEvent<HTMLInputElement>) =>
            setFilters((prev) => ({
                ...prev,
                [name]: event.target.value,
            }));

    return (
        <div className="w-[20]">
            <div className="space-y-2">
                <Select.Select
                    onValueChange={handleDropdownChange("category")}
                    value={filters.category}
                >
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Category" />
                    </Select.SelectTrigger>
                    <Select.SelectContent>
                        <Select.SelectItem value="smart-phones">
                            Smart Phones
                        </Select.SelectItem>
                        <Select.SelectItem value="laptops">
                            Laptops
                        </Select.SelectItem>
                        <Select.SelectItem value="chargers">
                            Chargers
                        </Select.SelectItem>
                    </Select.SelectContent>
                </Select.Select>

                <Select.Select
                    onValueChange={handleDropdownChange("series")}
                    value={filters.series}
                >
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Series" />
                    </Select.SelectTrigger>
                    <Select.SelectContent>
                        <Select.SelectItem value="smart-phones">
                            Smart Phones
                        </Select.SelectItem>
                        <Select.SelectItem value="laptops">
                            Laptops
                        </Select.SelectItem>
                        <Select.SelectItem value="chargers">
                            Chargers
                        </Select.SelectItem>
                    </Select.SelectContent>
                </Select.Select>

                <div>
                    <Input
                        placeholder="Name"
                        className="w-full"
                        type="text"
                        onChange={handleChange("name")}
                    />
                </div>

                <div>
                    <p className="text-sm mb-0.5">Price (KES)</p>
                    <div className="flex gap-x-1">
                        <Input
                            placeholder="Min"
                            type="number"
                            onChange={handleChange("minPrice")}
                        />
                        <Input
                            placeholder="Max"
                            type="number"
                            onChange={handleChange("maxPrice")}
                        />
                    </div>
                </div>

                <div>
                    <label className="flex gap-x-1 items-center">
                        <Checkbox
                            id="offer"
                            onCheckedChange={(value) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    onOffer: value === true ? true : false,
                                }))
                            }
                            checked={filters.onOffer}
                        />
                        <span className="text-base">On Offer</span>
                    </label>
                </div>

                <div>
                    <Button
                        variant="secondary"
                        className="w-full gap-x-1 flex justify-center items-center"
                        onClick={handleFilter}
                    >
                        <FilterIcon size={18} />
                        <span>Apply</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Test() {
    return <div className="flex gap-x-2"></div>;
}
