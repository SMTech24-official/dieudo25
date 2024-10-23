import { OpeningHour } from '@/types/types';
import React from 'react';

const TimeSlots = ({ data }: { data: OpeningHour }) => {
    return (
        <div className='flex items-center justify-between'>
            <p>{data.days}</p>
            <div className='flex items-center gap-1 text-secondary'>
                <p>{data.open}</p>
                <p>{data.status ? '' : "-"}</p>
                <p>{data.close}</p>
                <p>{data.status}</p>

            </div>
        </div>
    );
};

export default TimeSlots;