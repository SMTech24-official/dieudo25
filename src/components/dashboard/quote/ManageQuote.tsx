// QuoteTable.js
import { QuoteData } from '@/types/types';
import { Eye } from 'lucide-react';
import React from 'react';




const QuoteTable = ({ data, headings, month }: { data: QuoteData[], headings: string[], month: string }) => {
    const date = new Date()
    console.log(date);
    console.log(data);
    return (
        <div className="bg-white shadow rounded-lg mt-4 overflow-x-scroll lg:overflow-hidden">
            <div className="p-4 border-b ">
                <h2 className='lg:text-xl text-lg font-semibold'>{month}</h2>
            </div>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        {headings.map((heading, index) => (
                            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white ">
                    {data.map((quote, index) => (
                        <tr key={index} className='group'>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className={`flex-shrink-0 h-10 w-10 rounded-full  flex items-center justify-center group-even:bg-orange-100 group-odd:bg-blue-200`}>
                                        <span className={` font-semibold`}>
                                            {quote.ownerName.charAt(0)} {/* Display the first letter of owner's name */}
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{quote.ownerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quote.garageName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {quote.servicesRequested.join(', ')} {/* Join services with a comma */}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quote.tirePurchased ? "Yes" : "No"}</td>
                            <td className="px-6 py-4 whitespace-nowrap w-24 text-center">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-xl ${quote.status === 'Pending' ? 'bg-orange-100 text-orange-400' : quote.status === "Completed" ? "bg-green-200 text-green-800" : quote.status === "Received" ? "bg-blue-200 text-blue-500" : "bg-red-200 text-red-500"}`}>
                                    {quote.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {
                                    new Date(quote.requestedTime).toDateString()
                                }

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><Eye /></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuoteTable;
