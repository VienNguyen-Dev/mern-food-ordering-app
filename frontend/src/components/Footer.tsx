export default function Footer() {
  return (
    <div className="py-10 bg-orange-500 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className=" text-3xl font-bold tracking-tight text-white">VegetarianFood.com</span>
        <span className="flex font-bold tracking-tight text-white gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
}
