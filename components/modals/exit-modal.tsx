"use client";

import { useExitModal } from "@/store/use-exit-modal";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const ExitModal = () => {
    const router = useRouter();
    const [client, setClient] = useState(false);
    const { isOpen, close } = useExitModal();

    useEffect(() => setClient(true), []);

    if (!isClient) {
        return null;
    }
};