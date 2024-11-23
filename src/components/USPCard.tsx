type USPCardProps = {
  icon: string;
  iconAlt: string;
  title: string;
  sub: string;
};

const USPCard = ({ icon, iconAlt, title, sub }: USPCardProps) => {
  return (
    <div className="flex gap-4 max-w-[360px]">
      <div className="w-full max-w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center">
        <img src={icon} alt={iconAlt} width={24} height={24} />
      </div>
      <div className="gap-1.5">
        <h3 className="text-[#18214D] font-extrabold text-[22px] leading-[30px] tracking--5">
          {title}
        </h3>
        <p className="text-[#3E4462] font-medium text-lg leading-[26px]">
          {sub}
        </p>
      </div>
    </div>
  );
};

export default USPCard;
