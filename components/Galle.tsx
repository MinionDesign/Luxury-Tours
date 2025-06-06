"use client";
const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", // Lion
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80", // Maasai
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80", // Camel
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", // Family beach
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", // Elephants
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Kilimanjaro
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Turtles
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Turtles
];

export default function Galle() {
  return (
    <section className="py-12 w-full flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-4 gap-8">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl"
            style={{ width: 300, height: 300, background: '#111' }}
          >
            <img
              src={src}
              alt={"gallery-" + idx}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

