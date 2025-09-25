import React from "react";
import ServiceOne from "../assets/images/service_1.jpg";
import ServiceTwo from "../assets/images/service_2.jpg";
import ServiceThree from "../assets/images/service_3.jpg";
import ServiceFour from "../assets/images/service_4.jpg";
// import Accordion from "../../../utils/accordions";

const ServiceSecOne = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 space-y-12">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="order-1 lg:order-1"
            >
              <div className="rounded-lg overflow-hidden shadow-sm sm:shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 active:shadow-lg">
                <img
                  src={ServiceOne}
                  alt="Effortless Custom Clearance"
                  className="w-full h-48 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="order-2"
            >
              <h2 className="section-title font-jost font-semibold text-green-950">
                Effortless Custom Clearance
              </h2>
              <p className="mt-4 text-gray-600">
                Customs brokers facilitate the clearance of goods through
                customs checkpoints, ensuring compliance with import and export
                regulations. They handle documentation, taxes, duties, and
                liaise with government agencies on behalf of clients.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="order-2 lg:order-1"
            >
              <h2 className="section-title font-jost font-semibold text-green-950">
                Sea & Air Freight Forwarding
              </h2>
              <p className="mt-4 text-gray-600">
                Freight forwarders act as intermediaries between shippers and
                carriers, arranging the transportation of goods across various
                modes and routes. They handle documentation, customs clearance,
                and negotiations with carriers to ensure smooth shipments.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="order-1 lg:order-2"
            >
              <div className="rounded-lg overflow-hidden shadow-sm sm:shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 active:shadow-lg">
                <img
                  src={ServiceTwo}
                  alt="Sea & Air Freight"
                  className="w-full h-48 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="order-1 lg:order-1"
            >
              <div className="rounded-lg overflow-hidden shadow-sm sm:shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 active:shadow-lg">
                <img
                  src={ServiceThree}
                  alt="Transportation Management"
                  className="w-full h-48 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="order-2"
            >
              <h2 className="section-title font-jost font-semibold text-green-950">
                Transportation Management
              </h2>
              <p className="mt-4 text-gray-600">
                This service involves planning, optimizing, and executing the
                movement of goods from one location to another. It encompasses
                various modes of transportation such as road, rail, sea, and
                air, ensuring timely and cost-effective deliveries.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="order-2 lg:order-1"
            >
              <h2 className="section-title font-jost font-semibold text-green-950">
                Warehousing and Distribution
              </h2>
              <p className="mt-4 text-gray-600">
                Warehousing involves storing goods in a secure facility, while
                distribution ensures the efficient movement of those goods to
                their final destinations. These services are vital for managing
                inventory, fulfilling orders, and reducing delivery times.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="order-1 lg:order-2"
            >
              <div className="rounded-lg overflow-hidden shadow-sm sm:shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 active:shadow-lg">
                <img
                  src={ServiceFour}
                  alt="Warehousing and Distribution"
                  className="w-full h-48 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSecOne;
