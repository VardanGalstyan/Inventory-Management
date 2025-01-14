import { Star } from "lucide-react";

type RatingPropTypes = {
  rating: number;
};

const Rating = ({ rating }: RatingPropTypes) =>
  Array.from({ length: 5 }, (_, index) => (
    <Star
      className="w-4 h-4"
      key={index}
      color={rating > index + 1 ? "#FFC107" : "#E4E5E9"}
    />
  ));
export default Rating;
