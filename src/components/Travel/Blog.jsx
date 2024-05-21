import React, { useState } from "react"; // Combine imports of React and useState

const Blog = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Overview",
      content: "The Langtang Valley Trek in Nepal offers adventurers a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
    {
      id: 2,
      title: "Itinerary",
      content: "Itinerary information goes here in Nepal offers adventires and a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
    {
      id: 3,
      title: "Trip Info",
      content: "Trip info goes here in Nepal offers adventires and a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
    {
      id: 4,
      title: "Weather",
      content: "Weather information goes here in Nepal offers adventires and a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
    {
      id: 5,
      title: "Equipments",
      content: "Equipment information goes here in Nepal offers adventires and a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
    {
      id: 6,
      title: "Useful Info",
      content: "Useful info goes here in Nepal offers adventires and a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
    {
      id: 7,
      title: "Others",
      content: "Other information goes here in Nepal offers adventires and a unique and captivating journey through some of the country's most breathtaking landscapes The trek typically begins in the bustling town of Syabrubesi, where travelers set out on a picturesque trail that winds through lush forests, cascading waterfalls, and charming Tamang villages. Along the way, trekkers are treated to sweeping vistas of snow-capped peaks, including the towering Langtang Lirung, which dominates the skyline. One of the highlights of the Langtang Trek is the opportunity to visit the Langtang National Park, home to a variety of rare and endangered species, including the elusive red panda..."
    },
  ];

  const handleClick = (id) => {
    setActiveTab(id);
  };

  const boldText = (text) => {
    const parts = text.split("The Langtang Valley Trek");
    return (
      <span>
        {parts[0]}<span className="font-bold">The Langtang Valley Trek</span>{parts[1]}
      </span>
    );
  };

  return (
    <section>
      <div className="w-[92rem] px-24 my-10">
        <div className="flex gap-5 -bottom-4 relative">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`rounded-tr-full rounded-bl-full w-36 h-10 items-center cursor-pointer ${
                activeTab === tab.id ? "bg-cyan-900 text-white" : "bg-[#E8F6FB] text-gray-500"
              }`}
              onClick={() => handleClick(tab.id)}
            >
              <p className={`py-2 ${tab.title.length > 8 ? "px-4" : "px-8"}`}>
                {tab.title}
              </p>
            </div>
          ))}
        </div>

        <div className="main-info w-full border shadow-xl -z-10">
          <div className="info w-[70rem] h-[23rem] mx-20 mt-10 py-10">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`leading-10 ${activeTab === tab.id ? "" : "hidden"}`}
              >
                {tab.title === "Overview" ? boldText(tab.content) : tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
