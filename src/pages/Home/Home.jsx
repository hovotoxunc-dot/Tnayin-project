import { useState } from "react";

function GlobalCard({ img, link, title }) {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-52 object-cover cursor-pointer"
        onClick={() => setShowLink(!showLink)}
      />

      {showLink && (
        <div className="p-4 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            {title}
          </a>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const cards = [
    {
      id: 1,
      img: "https://picsum.photos/300/200?1",
      link: "https://google.com",
      title: "Google",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200?2",
      link: "https://youtube.com",
      title: "YouTube",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200?3",
      link: "https://github.com",
      title: "GitHub",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <GlobalCard
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}