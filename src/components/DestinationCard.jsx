const DestinationCard = ({ path, title, description }) => {
  return (
    <div className="flex flex-col w-[250px] gap-5">
      <img src={path} alt="" />
      <div>
        <h1 className="font-bold text-[40px]">{title}</h1>
        <p className=" font-extralight text-[12px] text-[#5f5f5f]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
