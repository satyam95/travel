type InfoCardProps = {
  icon: string;
  iconAlt: string;
  head: string;
  subHead: string;
};

const InfoCard = ({ icon, iconAlt, head, subHead }: InfoCardProps) => {
  return (
    <div className="flex gap-[22px]">
      <div className="min-w-14 min-h-14 bg-[#EFE0B4] rounded-2xl flex justify-center items-center">
        <img src={icon} alt={iconAlt} width={24} height={30} />
      </div>
      <div className="md:max-w-[351px] flex flex-col gap-2">
        <h3 className="text-[#5E6282] text-lg font-bold leading-[21px]">
          {head}
        </h3>
        <p className="text-[#5E6282] text-base leading-[21px]">{subHead}</p>
      </div>
    </div>
  );
};

export default InfoCard;
