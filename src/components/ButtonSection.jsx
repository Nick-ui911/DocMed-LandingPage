import React from "react";

const ButtonSection = () => {
  return (
    <section className="homeCardSection py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3  items-center justify-center">
          {[
            {
              bgColor: "bg-[#E5F9F8]",
              iconSrc: "https://cdn.lordicon.com/ftndcppj.json",
              title: "Medical Near Me",
              text: "24x7 Open",
            },
            {
              bgColor: "bg-[#EBF9EF]",
              iconSrc: "https://cdn.lordicon.com/vhyuhmbl.json",
              title: "Appointment",
              text: "Schedule Date",
            },
            {
              bgColor: "bg-[#F1EDF8]",
              iconSrc: "https://cdn.lordicon.com/xbrjceiu.json",
              title: "Medication",
              text: "Pills & Syringe",
            },
            {
              bgColor: "bg-[#FEF3D5]",
              iconSrc: "https://cdn.lordicon.com/xhigzoca.json",
              title: "Blood Tests",
              text: "See Reports",
            },
            {
              bgColor: "bg-[#FCEDEF]",
              iconSrc: "https://cdn.lordicon.com/thvvrdbi.json",
              title: "Emergency",
              text: "Call Ambulance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-4 rounded-xl shadow-md flex flex-row items-center gap-4 w-full sm:w-72 transition transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex justify-center items-center bg-white p-2 rounded-full shadow">
                <lord-icon
                  src={item.iconSrc}
                  trigger="loop"
                  delay="2000"
                  style={{ width: "40px", height: "40px" }}
                ></lord-icon>
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg text-black">{item.title}</div>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ButtonSection;
