import StarRating from "./StarRating";

type TestimonialCardProps = {
  img: string;
  name: string;
  post: string;
  desp: string;
  rating: number;
};
const TestimonialCard = ({
  img,
  name,
  post,
  desp,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="lg:max-w-[366px] flex flex-col items-center px-4 lg:px-6 xl:px-[35px] py-6 lg:py-8 xl:py-10 rounded-md shadow-2xl">
      <img src={img} alt={`${name} image`} />
      <div className="pt-[30px] flex flex-col items-center gap-4">
        <p className="text-[#737373] text-base leading-[26px] font-medium tracking-wide text-center">
          {desp}
        </p>
        <StarRating rating={rating} />
        <h3 className="text-[#23A6F0] text-sm leading-6 tracking-wide font-semibold">
          {name}
        </h3>
        <p className="text-[#252B42] text-sm leading-6 tracking-wide font-semibold">
          {post}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
