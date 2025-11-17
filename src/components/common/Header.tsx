import { TbTruckDelivery } from "react-icons/tb";

const Header = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center sm:justify-between gap-2 md:gap-0">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <TbTruckDelivery className="text-lg" />
          <span className="font-medium">
            Free & Fast International Delivery
          </span>
        </div>

        {/* Right Section */}
        <div className="font-medium hidden sm:block">
          Helpline: <span className="text-gray-300">+123456789</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
