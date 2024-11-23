type ImageCardPops = {
  img: string;
  imgAlt: string;
  title: string;
  subTitle: string;
};

const ImageCard = ({ img, imgAlt, title, subTitle }: ImageCardPops) => {
  return (
    <div className="relative w-[278px] h-[392px] ">
      <img src={img} alt={imgAlt} className="rounded-lg shadow-2xl" />
      <div className="absolute bottom-0 left-0 rounded-bl-lg bg-white/70 py-2 px-6">
        <h3 className="text-[#042521] font-semibold text-[17px] leading-[20.5px]">
          {title}
        </h3>
        <p className="text-[#80918E] font-medium text-[15px] leading-[20.5px]">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
