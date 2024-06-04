import ProductCard from "@/components/product-card";
import CategoryFilter from "./filter";

export default function CategoryFeature() {
    return (
        <div className="flex space-x-2">
            <CategoryFilter />
            <ProductCard />
        </div>
    );
}
