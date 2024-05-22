"use client";
import { Checkbox } from "@/components/ui/checkbox";
import * as Select from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SliderRange } from "@radix-ui/react-slider";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";
import { FilterIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CategoryFilter() {
    const [sliderValues, setSliderValues] = useState([5000, 60000]);
    const [filters, setFilters] = useState({
        brand: "",
        series: "",
        model: "",
        onOffer: false,
        rating: "",
        likes: "",
        sales: "",
    });

    const handleDropdownChange = (name: string) => (newValue: string) =>
        setFilters((prev) => ({
            ...prev,
            [name]: newValue,
        }));

    function applyFilters() {}
    return (
        <div>
            <div className=" w-[250px]  space-y-2">
                <Select.Select onValueChange={handleDropdownChange("brand")}>
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Brand" />
                    </Select.SelectTrigger>

                    <Select.SelectContent>
                        <Select.SelectGroup>
                            <Select.SelectLabel>
                                Select a Brand
                            </Select.SelectLabel>
                            <Select.SelectItem value="samsung">
                                Samsung
                            </Select.SelectItem>
                            <Select.SelectItem value="xaomi">
                                Xaomi
                            </Select.SelectItem>
                            <Select.SelectItem value="tecno">
                                Tecno
                            </Select.SelectItem>
                            <Select.SelectItem value="infinix">
                                Infinix
                            </Select.SelectItem>
                            <Select.SelectItem value="oppo">
                                Oppo
                            </Select.SelectItem>
                        </Select.SelectGroup>
                    </Select.SelectContent>
                </Select.Select>

                <Select.Select onValueChange={handleDropdownChange("series")}>
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Series" />
                    </Select.SelectTrigger>

                    <Select.SelectContent>
                        <Select.SelectGroup>
                            <Select.SelectLabel>
                                Select a series
                            </Select.SelectLabel>
                            <Select.SelectItem value="series-1">
                                Series 1
                            </Select.SelectItem>
                            <Select.SelectItem value="series-2">
                                Series 2
                            </Select.SelectItem>
                            <Select.SelectItem value="series-3">
                                Series 3
                            </Select.SelectItem>
                            <Select.SelectItem value="series-4">
                                Series 4
                            </Select.SelectItem>
                            <Select.SelectItem value="series-5">
                                Series 5
                            </Select.SelectItem>
                        </Select.SelectGroup>
                    </Select.SelectContent>
                </Select.Select>

                <Select.Select onValueChange={handleDropdownChange("model")}>
                    <Select.SelectTrigger className="w-full">
                        <Select.SelectValue placeholder="Model" />
                    </Select.SelectTrigger>

                    <Select.SelectContent>
                        <Select.SelectGroup>
                            <Select.SelectLabel>
                                Select a Model
                            </Select.SelectLabel>
                            <Select.SelectItem value="1a">1a</Select.SelectItem>
                            <Select.SelectItem value="1b">1b</Select.SelectItem>
                            <Select.SelectItem value="1c">1c</Select.SelectItem>
                            <Select.SelectItem value="1d">1d</Select.SelectItem>
                            <Select.SelectItem value="1e">1e</Select.SelectItem>
                        </Select.SelectGroup>
                    </Select.SelectContent>
                </Select.Select>

                <div>
                    <p className="text-sm mb-1">Price(Kes)</p>
                    <Slider
                        defaultValue={sliderValues}
                        onValueChange={(newValues) =>
                            setSliderValues(newValues)
                        }
                        className="mb-2"
                        min={0}
                        max={60000}
                    />
                    <div className="flex justify-between">
                        <p className="text-[0.8rem]">{sliderValues[0]}</p>
                        <p className="text-[0.8rem]">{sliderValues[1]}</p>
                    </div>
                </div>

                <div className="flex space-x-1 items-center">
                    <Checkbox
                        id="on-offer"
                        onCheckedChange={(value) =>
                            setFilters((prev) => ({
                                ...prev,
                                onOffer:
                                    typeof value === "boolean" ? value : false,
                            }))
                        }
                    />
                    <label htmlFor="on-offer">On offer</label>
                </div>

                <div>
                    <div className="bg-white w-full border border-border rounded px-3 py-2 flex items-center">
                        <p>Rating</p>

                        <div className="flex  ml-auto items-center gap-x-2">
                            <div className="">
                                <input
                                    type="radio"
                                    name="rating"
                                    id="rating-asc"
                                    value="asc"
                                    className="peer hidden"
                                    onChange={(event) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            rating: event.target.value,
                                        }))
                                    }
                                />
                                <label
                                    htmlFor="rating-asc"
                                    className="inline-block border border-border p-0.5 rounded-sm peer-checked:bg-primary peer-checked:text-white"
                                >
                                    <ArrowUp size={18} />
                                </label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="rating"
                                    id="rating-dsc"
                                    value="dsc"
                                    className="peer hidden"
                                    onChange={(event) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            rating: event.target.value,
                                        }))
                                    }
                                />
                                <label
                                    htmlFor="rating-dsc"
                                    className="inline-block border border-border p-0.5 rounded-sm peer-checked:bg-primary peer-checked:text-white"
                                >
                                    <ArrowDown size={18} />
                                </label>
                            </div>
                        </div>

                        <div className="flex"></div>
                    </div>
                </div>

                <div>
                    <div className="bg-white w-full border border-border rounded px-3 py-2 flex items-center">
                        <p>Likes</p>

                        <div className="flex  ml-auto items-center gap-x-2">
                            <div className="">
                                <input
                                    type="radio"
                                    name="likes"
                                    id="likes-asc"
                                    className="peer hidden"
                                />
                                <label
                                    htmlFor="likes-asc"
                                    className="inline-block border border-border p-0.5 rounded-sm peer-checked:bg-primary peer-checked:text-white"
                                >
                                    <ArrowUp size={18} />
                                </label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="likes"
                                    id="likes-dsc"
                                    className="peer hidden"
                                />
                                <label
                                    htmlFor="likes-dsc"
                                    title="Descinding"
                                    className="inline-block border border-border p-0.5 rounded-sm peer-checked:bg-primary peer-checked:text-white"
                                >
                                    <ArrowDown size={18} />
                                </label>
                            </div>
                        </div>

                        <div className="flex"></div>
                    </div>
                </div>

                <div>
                    <div className="bg-white w-full border border-border rounded px-3 py-2 flex items-center">
                        <p>Sales</p>

                        <div className="flex  ml-auto items-center gap-x-2">
                            <div className="">
                                <input
                                    type="radio"
                                    name="sales"
                                    id="sales-asc"
                                    className="peer hidden"
                                />
                                <label
                                    htmlFor="sales-asc"
                                    className="inline-block border border-border p-0.5 rounded-sm peer-checked:bg-primary peer-checked:text-white"
                                >
                                    <ArrowUp size={18} />
                                </label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="sales"
                                    id="sales-dsc"
                                    className="peer hidden"
                                />
                                <label
                                    htmlFor="sales-dsc"
                                    className="inline-block border border-border p-0.5 rounded-sm peer-checked:bg-primary peer-checked:text-white"
                                >
                                    <ArrowDown size={18} />
                                </label>
                            </div>
                        </div>

                        <div className="flex"></div>
                    </div>
                </div>

                <div>
                    <button className="bg-primary w-full rounded-md py-2 flex justify-center items-center gap-x-2">
                        <FilterIcon size={18} />
                        <span>Apply</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
