import { Review } from "@/types/types";
import StarPicker from "react-star-picker";
import 'react-star-picker/styles.css';


const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 mb-5 space-y-3">
            <div className="flex items-center space-x-3">
                {/* Customer name and date */}
                <h4 className="font-bold text-lg">{review.customerName}</h4>
                <span className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
                {/* Render stars based on rating */}
                <StarPicker
                onChange={()=>{}}
                          size={20}
                          starCount={5}
                          disabled={true}
                          className=""
                          halfStars={true}
                          value={review.rating} />
                {/* Display the rating */}
                <span className="text-gray-600 font-medium ml-2">{review.rating}/5</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
        </div>
    );
};
export default ReviewCard