// /components/ui/Modal.tsx

"use client"; // Ensure the component is client-side
import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react"; // Import DialogPanel directly
import { Button } from "@/components/ui/button"; // Adjust the import based on your button component location
import { IoMdClose } from "react-icons/io";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Custom overlay div */}
      <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          className={cn("bg-white rounded-lg shadow-lg  w-full p-6", className)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{title}</h3>
            <Button
              variant="ghost"
              className="rounded-full h-10 w-10 flex"
              onClick={onClose}
            >
              <span>
              
                <IoMdClose className="text-2xl" />
              </span>
            </Button>
          </div>
          <div className="mt-4">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
