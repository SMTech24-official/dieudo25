"use client";

import CustomerQuoteTable from '@/components/dashboard/quote/CustomerQuote';
import GarageQuoteTable from '@/components/dashboard/quote/GarageQuote';
import { customerQuote, garageRequests } from '@/components/dashboard/quote/quotedata';
import DashBoardHeading from '@/components/dashboard/shared/heading/DashBoardHeading';
import useUserRole from '@/hooks/useUserRole';
import { QuoteData } from '@/types/types';
import React from 'react';






const QuotePage: React.FC = () => {

    const role = useUserRole();






    // Function to filter garage requests
    const filterRequests = (data: QuoteData[], filterType: string) => {
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














    if (role === "customer") {



        const CustomerThisMonthRequests = filterRequests(garageRequests, "thisMonth");
        const CustomerPreviousMonthRequests = filterRequests(garageRequests, "previousMonth");

        return (
            <div className='dashboard-containers'>
                <DashBoardHeading title='Quote Request Management' subTitle='Easily request and track quotes, review personalized proposals, and confirm services with just a click.' />
                <div className="">
                    <CustomerQuoteTable month={"This Month"} data={CustomerThisMonthRequests} headings={["Garage Name", "Services Requested", "Tire Purchased", "Status", "Requested Time", "View", "Action"]} />
                </div>
                <div className="">
                    <CustomerQuoteTable month={"Previous Months"} data={CustomerPreviousMonthRequests} headings={["Garage Name", "Services Requested", "Tire Purchased", "Status", "Requested Time", "View", "Action"]} />
                </div>
            </div>
        );
    }
    if (role === "servicesProvider") {

        const GarageThisMonthRequests = filterRequests(customerQuote, "thisMonth");
        const GaragePreviousMonthRequests = filterRequests(customerQuote, "previousMonth");

        return (
            <div className='dashboard-containers'>
                <DashBoardHeading title='Quote Request Management' subTitle='Efficiently Manage and Customize Quotes for Your Customers' />
                <div className="">
                    <GarageQuoteTable month={"This Month"} data={GarageThisMonthRequests} headings={["Location", "Services Requested", "Tire Purchased", "Status", "Requested Time", "View", "Action"]} />
                </div>
                <div className="">
                    <GarageQuoteTable month={"Previous Months"} data={GaragePreviousMonthRequests} headings={["Location", "Services Requested", "Tire Purchased", "Status", "Requested Time", "View", "Action"]} />
                </div>
            </div>
        );
    }

};

export default QuotePage;
