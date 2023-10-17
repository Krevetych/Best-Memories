/* eslint-disable */
const SliderCard = ({ photo, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={`./photos/${photo}`} alt="" className="w-[500px]" />
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
};

export default SliderCard;
