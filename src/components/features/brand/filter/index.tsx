"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import * as Select from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

export default function BrandFilter() {
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="w-[20]">
            <div className="space-y-2">
                <Select.Select>
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Category" />
                    </Select.SelectTrigger>
                    <Select.SelectContent>
                        <Select.SelectItem value="1">
                            Smart Phones
                        </Select.SelectItem>
                        <Select.SelectItem value="2">Laptops</Select.SelectItem>
                        <Select.SelectItem value="3">Dell</Select.SelectItem>
                    </Select.SelectContent>
                </Select.Select>

                <Select.Select>
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Series" />
                    </Select.SelectTrigger>
                    <Select.SelectContent>
                        <Select.SelectItem value="1">
                            Smart Phones
                        </Select.SelectItem>
                        <Select.SelectItem value="2">Laptops</Select.SelectItem>
                        <Select.SelectItem value="3">Dell</Select.SelectItem>
                    </Select.SelectContent>
                </Select.Select>

                {/* <div className="relative">
                    <p className="text-sm mb-0.5">Price (KES) - 0</p>
                    <Slider
                        // defaultValue={[50]}
                        // value={[price]}
                        onValueChange={(newValue) => console.log(newValue)}
                        max={100000}
                        step={1000}
                        className={cn("w-full")}
                    />
                    <div className="flex">
                        <p className="text-sm">0</p>
                        <p className="text-sm ml-auto">100, 000</p>
                    </div>
                </div> */}

                <div>
                    <Input placeholder="Name" className="w-full" type="text" />
                </div>

                <div>
                    <p className="text-sm mb-0.5">Price (KES)</p>
                    <div className="flex gap-x-1">
                        <Input placeholder="Min" type="number" />
                        <Input placeholder="Max" type="number" />
                    </div>
                </div>

                <div>
                    <label className="flex gap-x-1 items-center">
                        <Checkbox id="offer" />
                        <span className="text-base">On Offer</span>
                    </label>
                </div>

                <div>
                    <Button
                        variant="secondary"
                        className="w-full gap-x-1 flex justify-center items-center"
                        loading={loading}
                        onClick={handleClick}
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
