import Button from "./Button";

const ContactFrom = () => {
  return (
    <div className="max-w-[90vw] lg:max-w-[800px] mx-auto p-10 border border-[#E1E1E1] rounded-lg flex flex-col gap-10 my-20">
      <h3 className="font-bold text-3xl">Contact us</h3>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col flex-1">
            <label className="font-bold" htmlFor="first-name">
              First Name
            </label>
            <input
              className="border border-[#E1E1E1] rounded-lg py-3 px-2 w-full"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Input your First Name in Here"
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-bold" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="border border-[#E1E1E1] rounded-lg py-3 px-2"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Input your Last Name in Here"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            className="border border-[#E1E1E1] rounded-lg py-3 px-2"
            type="email"
            name="email"
            id="email"
            placeholder="Input your Email Address in Here"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className="border border-[#E1E1E1] rounded-lg py-3 px-2"
            type="phone"
            id="phone-number"
            placeholder="Input your Phone Number in Here"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-[#E1E1E1] rounded-lg py-3 px-2"
            rows={4}
            name="message"
            id="message"
          ></textarea>
        </div>
        <Button className="bg-[#C7923E] text-white rounded-lg px-6 py[11px] border  w-40 h-[50px] text-[15px]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactFrom;
