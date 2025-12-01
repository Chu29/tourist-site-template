const Title = ({title, description}) => {
  return (
    <div className="text-center max-w-[600px] w-full mx-auto font-bold mt-5 mb-5">
      <h1 className=" text-[38px] text-[#C7923E] ">{title}</h1>
      <p className=" text-[48px] ">{description}</p>
    </div>
  );
};

export default Title;
