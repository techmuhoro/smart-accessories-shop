import * as Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ProductCard() {
    return (
        <div>
            <Card.Card className="w-[150px] p-0">
                <Card.CardHeader className="p-0 w-full h-[100px] border border-red-400 flex items-center justify-center mb-2">
                    <div className="relative w-[60%] h-[80%]">
                        <Image
                            src="/images/products/laptop.png"
                            fill
                            alt="Laptop"
                        />
                    </div>
                </Card.CardHeader>
                <Card.CardContent className="p-0 px-4 ">
                    <p className="font-medium text-[0.9rem]">Hp Probook G7</p>
                    <p className="font-medium text-[0.9rem]">KES </p>
                </Card.CardContent>
            </Card.Card>
        </div>
    );
}
