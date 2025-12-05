const ContactCard = ({ title, children }) => {
  return (
    <div className="max-w-[300px] w-full border border-[#E1E1E1] rounded-lg p-5 shadow-2xl flex flex-col gap-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <>{children}</>
    </div>
  );
};

export default ContactCard;
