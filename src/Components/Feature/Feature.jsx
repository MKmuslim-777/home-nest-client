import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Feature = () => {
  return (
    <div className="my-20 ">
      <div className="bg-primary p-5 container rounded-lg grid md:grid-cols-3 gap-5 ">
        <div className="flex items-center border-r-2 border-gray-400">
          <div className="text-secondary font-semibold text-4xl">
            <TbTruckDelivery className="" />
          </div>
          <div className="ml-5">
            <h2 className="text-secondary font-semibold text-xl">
              Express Delivery
            </h2>
            <p className="text-secondary ">Inside Cox's Bazar</p>
          </div>
        </div>

        <div className="flex items-center border-r-2 border-gray-400">
          <div className="text-secondary font-semibold text-4xl">
            <BiSupport />
          </div>
          <div className="ml-5">
            <h2 className="text-secondary font-semibold text-xl">
              24/7 Support
            </h2>
            <p className="text-secondary ">Online 24 Hours</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-secondary font-semibold text-4xl">
            <MdPayment />
          </div>
          <div className="ml-5">
            <h2 className="text-secondary font-semibold text-xl">
              Payment Method
            </h2>
            <p className="text-secondary ">Secure Payment Method</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
