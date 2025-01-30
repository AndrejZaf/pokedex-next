"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({ color }: { color: string }) => {
    const router = useRouter();
    return (
        <ArrowLeft size={36} className="cursor-pointer" style={{ color: color }} onClick={router.back} />
    );
};
export default BackButton;
