import React, { useState } from 'react';
import { X, AlertTriangle, Clock, Ban, Info } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CancellationPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}





export default function CancellationPolicyModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <button className="px-5 lg:py-10 py-5" onClick={handleOpenModal}>
                <p className="font-semibold hover:underline text-secondary">
                    Cancellation Policy
                </p>
            </button>
            <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                            Cancellation Policy
                        </DialogTitle>
                        <DialogDescription>
                            Please review our cancellation policy before booking.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] pr-4">
                        <div className="space-y-4">
                            <p>
                                Please ensure that the cancellation conditions on LiftWork are
                                suitable for you before finalizing your booking. You may be
                                entitled to a partial refund according to the cancellation refund
                                policy or a full refund in exceptional circumstances (such as
                                natural disasters, public health emergencies, pandemics, etc.).
                            </p>
                            <h3 className="text-lg font-semibold">
                                Cancellation Refund Policy
                            </h3>
                            <div className="pl-4 border-l-2 border-yellow-500">
                                <p>
                                    <strong>Partial refund</strong> if the cancellation is made
                                    before 10:00 AM the day before your appointment. You can
                                    receive a refund of <strong>50%</strong> of the reserved service
                                    fees.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-green-500" />
                                    Before 10:00 AM, the day before the appointment:
                                </h4>
                                <p className="pl-6">
                                    <strong>Partial refund:</strong> 50% refund of the reserved
                                    service fees.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold flex items-center gap-2">
                                    <Ban className="h-4 w-4 text-red-500" />
                                    After 10:00 AM, the day before the appointment:
                                </h4>
                                <p className="pl-6">
                                    <strong>No refund:</strong> No refund will be granted if the
                                    cancellation occurs after 10:00 AM the day before the
                                    appointment. This reservation will be non-refundable after that
                                    time.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <p className="flex items-center gap-2">
                                    <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                    Please contact us in the event of exceptional circumstances
                                    that may justify a cancellation and full refund under our
                                    specific policy.
                                </p>
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter>
                        <Button onClick={handleCloseModal}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
