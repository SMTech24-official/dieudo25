"use client";

import MAnageQuote from '@/components/dashboard/quote/ManageQuote';
import { garageRequests } from '@/components/dashboard/quote/quotedata';
import DashBoardHeading from '@/components/dashboard/shared/heading/DashBoardHeading';
import { QuoteData } from '@/types/types';
import React from 'react';



const page: React.FC = () => {
    // Function to filter garage requests
    const filterRequests = (data: QuoteData[], filterType: string): QuoteData[] => {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        return data.filter((request) => {
            const requestedDate = new Date(request.requestedTime);
            const requestedMonth = requestedDate.getMonth();
            const requestedYear = requestedDate.getFullYear();

            if (filterType === "thisMonth") {
                // Filter for requests in the current month and year
                return requestedYear === currentYear && requestedMonth === currentMonth;
            } else if (filterType === "previousMonths") {
                // Filter for requests from previous months, regardless of year
                return requestedYear < currentYear || (requestedYear === currentYear && requestedMonth < currentMonth);
            } else {
                return true; // Return all requests if the filterType is 'all'
            }
        });
    };


    const thisMonthRequests = filterRequests(garageRequests, "thisMonth");
    const previousMonthRequests = filterRequests(garageRequests, "previousMonth");

    return (
        <div className='dashboard-containers'>
            <DashBoardHeading title='Quote Request Management' subTitle='Easily request and track quotes, review personalized proposals, and confirm services with just a click.' />
            <div className="">
                <MAnageQuote month={"This Month"} data={thisMonthRequests} headings={["Garage Name", "Services Requested", "Tire Purchased", "Status", "Requested Time", "View", "Action"]} />
            </div>
            <div className="">
                <MAnageQuote month={"Previous Months"} data={previousMonthRequests} headings={["Garage Name", "Services Requested", "Tire Purchased", "Status", "Requested Time", "View", "Action"]} />
            </div>
        </div>
    );
};

export default page;
