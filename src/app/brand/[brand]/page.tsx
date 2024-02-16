import BrandBase from "@/components/features/brand";

interface PageProps {
    params: {
        brand: string;
    };
}

export default function Page({ params }: PageProps) {
    return (
        <main className="min-h-screen bg-slate-100">
            <BrandBase />
        </main>
    );
}
