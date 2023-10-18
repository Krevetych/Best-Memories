import { useLocation } from "react-router-dom";

const Footer = () => {
	const location = useLocation()
	console.log(location)
  return (
    <>
      <footer className={`${location.pathname=='/' || location.pathname=='/job' ? "absolute bottom-3" : "mb-3" } w-full flex items-center justify-center`}>
        <p className="font-bold text-lg">
          &copy; {new Date().getFullYear()} Все права защищены 😊
        </p>
      </footer>
    </>
  );
};

export default Footer;
