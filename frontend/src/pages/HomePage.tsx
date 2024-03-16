import landingImage from "../assets/landingimage.jpg";
import appDowload from "../assets/appDownload.png";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col py-8 bg-white rounded-lg shadow-md gap-8 -mt-16 text-center">
        <h1 className=" text-5xl text-orange-600 tracking-tight font-bold">Tuck into a takway today</h1>
        <span className=" text-xl">Food is just a click away! </span>
      </div>
      <div className=" grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className=" flex flex-col gap-4 justify-center items-center text-center">
          <span className=" font-bold text-3xl tracking-tighter">Order takeaway even faster!</span>
          <span>Dowload the VegetarianFood App for faster ordering and personalised recommentdations </span>
          <img src={appDowload} />
        </div>
      </div>
    </div>
  );
}
