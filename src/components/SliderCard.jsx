/* eslint-disable */
const SliderCard = ({ photo, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={`./photos/${photo}`} alt="" className="h-[500px] w-[500px] object-cover rounded-lg" />
      <p className='font-bold text-2xl my-2.5'>{title}</p>
      <p className='w-[900px] text-center text-xl font-semibold mb-10'>{desc}</p>
    </div>
  );
};

export default SliderCard;
