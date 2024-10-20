"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathname = usePathname();

    // Split the current path into an array, filtering out any empty values
    const pathnames = pathname.split('/').filter((x) => x);
    console.log(pathnames);
    return (
        <nav aria-label="breadcrumb" className="py-2">
            <ol className="uppercase space-x-2 text-sm x flex items-center">
                <Link href={`/${pathnames[0]}`} className='hover:text-secondary '>{pathnames[0]}</Link><span className='text-lg'>/</span><Link className='hover:text-secondary' href={`/${pathnames[0]}/${pathnames[1]}`}>{pathnames[1]}</Link>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
