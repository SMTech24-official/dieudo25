import { QuoteData } from '@/types/types';
import { Calendar, CalendarClock, Check, CircleCheckBig, CirclePlus, Clock, Eye, SendHorizontal, Truck, X } from 'lucide-react';
import React, { useState } from 'react';
import Modal from '@/components/modal/Modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FaToolbox } from 'react-icons/fa6';
import { Separator } from '@radix-ui/react-select';


const GarageQuoteTable = ({ data, headings, month }: { data: QuoteData[], headings: string[], month: string }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const date = new Date();
    console.log(date);
    console.log(data);

    const [selectedModalItem, setSelectedModalItem] = useState<null | QuoteData>(null)
    console.log(selectedModalItem);

    const handleView = (name: string) => {
        const selectedItem = data?.find(item => item?.id == name)
        if (selectedItem) {
            setSelectedModalItem(selectedItem);
            setIsModalOpen(true);

        }
    }

    const closeModal = () => setIsModalOpen(false);


    return (
        <div className="bg-white shadow rounded-lg mt-4 overflow-x-auto lg:overflow-hidden">
            <div className="p-4 -b flex items-center gap-2">
                {month === "This Month" ? <CalendarClock /> : month === "Previous Months" ? <Calendar /> : null}
                <h2 className='lg:text-xl text-lg font-semibold'>{month}</h2>
            </div>

            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        {headings.map((heading, index) => (
                            <th key={index} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center w-fit text-nowrap">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((quote, index) => (
                        <tr key={index} className="group hover:bg-blue-100 ">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center bg-opacity-60 group-even:bg-orange-100 group-odd:bg-blue-200`}>
                                        <span className="font-semibold text-xl">
                                            {quote?.customerName?.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{quote.customerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 text-start">
                                <p className=" px-4 py-1">{quote.location}</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 text-start">
                                {
                                    quote.services.length > 1 ? <p className='px-4 py-1 w-64 '>{quote.services[0].name} + More</p> : <p className=' px-4 py-1 w-64'>{quote.services[0].name}</p>
                                }
                            </td>
                            <td className="px-6 py-4 ">
                                <div className=" p-2 flex justify-center items-center">
                                    {quote.tirePurchased ? <CircleCheckBig className='stroke-green-700' /> : <CirclePlus className="rotate-45 stroke-red-700" />}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-24 text-center">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-xl ${quote.status === 'Pending' ? 'bg-orange-100 text-orange-400' :
                                    quote.status === 'Completed' ? 'bg-green-200 text-green-800' :
                                        quote.status === 'Received' ? 'bg-blue-200 text-blue-500' :
                                            'bg-red-200 text-red-500'
                                    }`}>
                                    {quote.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 text-center">
                                <p>{new Date(quote.requestedTime).toDateString()}</p>
                            </td>
                            <td className=" py-4  ">
                                <div className='flex justify-center text-primary w-full'>
                                    <button onClick={() => handleView(quote.id)}>
                                        <Eye className='w-6 h-6' />
                                    </button>
                                </div>

                            </td>
                            <td className=" py-4  ">
                                <div className=' flex justify-center items-center w-full h-full gap-2'>
                                    <button className='hover:bg-green-200 p-[2px] rounded-full'>
                                        <Check className='stroke-green-700 ' />
                                    </button>
                                    <button className='hover:bg-red-200 p-[2px] rounded-full'>
                                        <X className='stroke-red-700 ' />
                                    </button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} >
                <div className="">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Quote Details #{selectedModalItem?.id}</CardTitle>
                            <CardDescription>
                                Requested on {selectedModalItem?.requestDate} | Status: {selectedModalItem?.status}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Customer : <span>{selectedModalItem?.customerName}</span></h3>
                                    <p></p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Requested Services</h3>
                                    <ul className="grid grid-cols-2 gap-2 lg:gap-4 items-center justify-center">
                                        {selectedModalItem?.services?.map((service, index) => (
                                            <li key={index} className="flex justify-between items-center">
                                                <span className="flex items-center">
                                                    <FaToolbox className="mr-2 h-4 w-4" />
                                                    {service.name}
                                                </span>
                                                <span className="font-semibold">{service.price ? `CHF ${service.price?.toFixed(2)}` : ''}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Separator />

                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold">Total Estimated Price</span>
                                    <span className="text-xl font-bold">CHF {selectedModalItem?.totalPrice?.toFixed(2)}</span>
                                </div>

                                <div className="bg-muted p-4 rounded-lg flex items-center">
                                    <Clock className="mr-2 h-5 w-5" />
                                    <span>
                                        <strong>Estimated Completion Time:</strong> {selectedModalItem?.estimatedCompletion}
                                    </span>
                                </div>

                                <div className="bg-muted p-4 rounded-lg flex items-center">
                                    <Truck className="mr-2 h-5 w-5" />
                                    <span>
                                        <strong>Tire Delivery:</strong> Included in the estimated completion time
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-4">
                            <Button variant="outline">Request Modification</Button>
                            <Button className=" bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 gap-2 py-2 rounded-md text-white group">
                                <span>Send</span>
                                <SendHorizontal className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </Modal>

        </div>
    );
};

export default GarageQuoteTable;
