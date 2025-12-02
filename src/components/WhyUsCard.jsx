const WhyUsCard = ({ path, description }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center bg-[#304F47] max-w-[180px] py-5 rounded-[30px]">
      <img className="max-w-[50px] w-full block" src={path} alt="" />
      <p className="text-center">{description}</p>
    </div>
  );
};

export default WhyUsCard;
