"use client"

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import SubcribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductwithPrice } from "@/types";

interface ModalProviderProps {
    products: ProductwithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({
    products
}) => {
    const[isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
            <SubcribeModal products={products}/>
        </>
    );
}

export default ModalProvider;