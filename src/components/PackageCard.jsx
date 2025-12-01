import Button from "./Button";

const PackageCard = ({ path, title, description }) => {
  return (
    <div className="flex flex-col">
      <img src={path} alt="" />
      <div>
        <h1>{title}</h1>
        <div>
          <p>{description}</p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
