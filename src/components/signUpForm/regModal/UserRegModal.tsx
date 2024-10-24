import { XCircle, CheckCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'

interface RegistrationStatusModalProps {
    isModalOpen: boolean
    closeModal: () => void
    isSuccess: boolean // This will determine whether the registration was successful
}

export default function RegistrationStatusModal({ isModalOpen, closeModal, isSuccess }: RegistrationStatusModalProps) {

    const router = useRouter()

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal} className='w-full max-w-md mx-5'>
            <Card className="">
                <CardHeader className="text-center">
                    {isSuccess ? (
                        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                    ) : (
                        <XCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
                    )}
                    <CardTitle className="text-2xl font-semibold">
                        {isSuccess ? 'Registration Successful' : 'Registration Failed'}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                        {isSuccess
                            ? 'Your registration was successful! You can now log in and start using our services.'
                            : 'There was an error during registration. Please try again or contact support if the issue persists.'}
                    </CardDescription>
                </CardHeader>

                <CardFooter className="flex justify-center mt-6">
                    <Button onClick={() => {if(isSuccess){router.push("/sign-in")}}} className=" bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 gap-2 py-2 rounded-md text-white group">
                        {isSuccess ? 'Go to Login' : 'Try Again'}
                    </Button>
                </CardFooter>
            </Card>
        </Modal>
    )
}
