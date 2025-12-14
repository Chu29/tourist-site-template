const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-5 max-w-[300px] w-full items-center text-left p-5 border border-[#0000001A] shadow-sm">
      <div className="rounded-full w-[100px] h-[100px] border-[5px] p-1 border-[#304F47]">
        <img
          className="rounded-full w-full h-full "
          src="./images/user.jpg"
          alt=""
        />
      </div>
      <h1 className="font-bold">Emma Waston</h1>
      <p className="font-extralight text-[#9A9AB0] ">
        I recently went on a tour with XYZ Tourism Company and was extremely
        impressed with the level of professionalism and organization.
      </p>
    </div>
  );
};

export default TestimonialCard;
