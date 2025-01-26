"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
    const router = useRouter();
    return (
        <ArrowLeft className="cursor-pointer text-white" onClick={router.back} />
    );
};
export default BackButton;
