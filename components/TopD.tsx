"use client";
const destinations = [
  { name: "zanzibar", img: "https://altezzatravel.com/upload/medialibrary/681/j7hdoumiko515vfodf8ukvcualcx3bew.webp" },
  { name: "nugwi", img: "https://i.natgeofe.com/n/5446c17d-b82d-43ef-8e2c-8a2b99d26c21/ZanzibarLEAD.jpg" },
  { name: "kilimanjaro", img: "https://operation-adventure.com/wp-content/uploads/2022/09/IMG_8696.jpg" },
  { name: "ngorongoro", img: "https://abundadiscoveriesuganda.com/wp-content/uploads/2025/01/Ngorongoro-National-Park-Tanzania-by-Licious-Adventure-%E2%80%94-YouPic.jpg" },
  { name: "serengeti", img: "https://www.nativeafricatours.com/wp-content/uploads/2024/07/Cost-of-a-Safari-in-Serengeti-1200x600.jpg" },
  { name: "materuni", img: "https://tanzania-specialist.com/wp-content/uploads/2023/11/kuringe-waterfall-2.jpg" },
  { name: "rock city", img: "https://media.licdn.com/dms/image/v2/D5612AQHPq4QmodYodw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701945852681?e=2147483647&v=beta&t=N1qBSWQmCybOELfJS2-d-BRm1MIdoPX1BhI-xs4QRGQ" },
  { name: "hot spring", img: "https://www.tanzaniatourism.com/images/uploads/Rundugai_Hotsprings_Tour.jpg" },
];

export default function TopD() {
  return (
    <section id="destinations" className="py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#E1C5A0]">Top Destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="group relative rounded-2xl overflow-hidden min-h-[160px] md:min-h-[180px] shadow-lg transition-transform duration-300 card-diagonal-wipe hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="w-full h-full object-cover object-center transition-transform duration-300"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold capitalize z-10" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
              {dest.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
