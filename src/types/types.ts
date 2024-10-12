export type TireService = {
    serviceName: string;
    description: string;
    price: number; // Price in currency units
};

export type Review = {
    customerName: string;
    rating: number; // Rating out of 5
    comment: string;
    date: string; // Date of the review
};