import Button from "./Button";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#304F47] max-w-[75vw] mx-auto rounded-lg p-5 mt-[-50px] mb-[50px] ">
      <div className="flex gap-5">
        <span className="flex items-center bg-white px-5  rounded-lg">
          <input
            type="text"
            placeholder="Search activities or Destinations"
            className="max-w-[300px] w-full outline-0"
          />
          <img src="./images/search.svg" alt="" />
        </span>
        <div className="flex gap-5 text-[#9A9AB0]">
          <p className="flex flex-col items-start justify-center text-[12px]">
            Guests
            <span className="flex items-center gap-2 text-[18px] text-white">
              2 Adult
              <img src="./images/chevron-bottom.svg" alt="" />
            </span>
          </p>
          <p className="flex flex-col items-start justify-center text-[12px]">
            Date
            <span className="flex items-center gap-2 text-[18px] text-white">
              12-13 April 2021
              <img src="./images/chevron-bottom.svg" alt="" />
            </span>
          </p>
          <p className="flex flex-col items-start justify-center text-[12px]">
            Package
            <span className="flex items-center gap-2 text-[18px] text-white">
              All
              <img src="./images/chevron-bottom.svg" alt="" />
            </span>
          </p>
        </div>
      </div>
      <Button className="bg-[#C7923E] text-white rounded-lg px-6 py[11px] border-0 w-40 h-[50px]">
        Book Now
      </Button>
    </div>
  );
};

export default CallToAction;
