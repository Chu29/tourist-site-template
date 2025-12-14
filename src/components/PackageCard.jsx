import Button from "./Button";

const PackageCard = ({ path, title, description }) => {
  return (
    <div className="flex flex-col border border-[#E1E1E1] rounded-lg pb-5 gap-5 max-w-[350px]">
      <img src={path} alt="" />
      <div className="px-[5px] flex flex-col gap-5 justify-between">
        <h1 className="text-[24px] font-bold">{title}</h1>
        <div className="flex flex-col gap-5">
          <p className="text-[16px] font-light">{description}</p>
          <Button className="bg-[#C7923E] text-white rounded-lg px-6 py[11px] w-40 h-[50px]">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
