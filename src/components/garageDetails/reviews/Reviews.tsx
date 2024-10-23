import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviews } from "@/utils/review";
import ReviewCard from "@/components/reviewCard/ReviewCard";


const Reviews = () => {

    const [reviewsToShow, setReviewsToShow] = useState<number>(3);


    const handleReadMore = () => {
        setReviewsToShow(prev => prev + 3 > reviews.total ? 3 : prev + 3);
    };

    return (
        <Card className="mb-8 bg-section">
            <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    {reviews.data.slice(0, reviewsToShow).map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <Button onClick={handleReadMore} className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white">
                        Read {reviewsToShow + 3 > reviews.total ? "Less" : "More"}
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
};

export default Reviews;