import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function filterObj(obj: { [key: string]: any }) {
    const results: { [key: string]: any } = {};

    for (let [key, value] of Object.entries(obj)) {
        if (value !== "") {
            results[key] = value;
        }
    }

    return results;
}
