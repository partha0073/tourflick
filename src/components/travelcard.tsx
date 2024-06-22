// components/TravelCard.js

import Image from "next/image";
import { Car, Hotel, Utensils, MapPin, DollarSign } from "lucide-react";

const TravelCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-300 ease-in-out transform hover:scale-105">
      <Image
        src="/tourflick.jpg"
        alt="Travel Destination"
        width={400}
        height={250}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">
          Explore{" "}
          <span className="text-2xl text-blue-600  decoration-blue-400">
            Arunachal Pradesh
          </span>
        </div>
        <div>
          <ul className="pl-6 flex flex-row gap-4 text-gray-500 text-xs font-bold">
            <li>Bhalukpong (1N)</li>
            <li>Dirang (1N)</li>
            <li>Tawang (3N)</li>
            <li>Bomdila (1N)</li>
          </ul>
        </div>
        <p className="text-gray-700 text-base mt-2">
          Find the best travel deals, hotels, dining experiences, and more!
        </p>
        <div className="text-gray-700 text-lg font-semibold mt-4 flex items-center">
          <DollarSign size={18} className="mr-1" />
          <span>$999</span>
        </div>
      </div>
      <div className="p-4 h-24 flex gap-4 justify-center">
        <div className="flex flex-col items-center rounded-xl p-4 bg-green-200 hover:bg-green-300 cursor-pointer transition duration-300 ease-in-out">
          <Car size={28} />
          <p className="text-sm">Transfer</p>
        </div>
        <div className="flex flex-col items-center rounded-xl p-4 bg-blue-200 hover:bg-blue-300 cursor-pointer transition duration-300 ease-in-out">
          <Hotel size={28} />
          <p className="text-sm">Hotels</p>
        </div>
        <div className="flex flex-col items-center rounded-xl p-4 bg-red-200 hover:bg-red-300 cursor-pointer transition duration-300 ease-in-out">
          <Utensils size={28} />
          <p className="text-sm">Dinner</p>
        </div>
      </div>
    
    </div>
  );
};

export default TravelCard;
