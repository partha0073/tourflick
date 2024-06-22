// components/TravelCard.js

import Image from 'next/image';
import { Car, Hotel, Utensils, MapPin } from 'lucide-react';

const TravelCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src="/tourflick.jpg"
        alt="Travel Destination"
        width={400}
        height={250}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Explore Beautiful Places</div>
        <p className="text-gray-700 text-base">
          Find the best travel deals, hotels, dining experiences, and more!
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <div className="flex items-center space-x-2">
          <Car size={24} />
          <span>Transfer</span>
        </div>
        <div className="flex items-center space-x-2">
          <Hotel size={24} />
          <span>Hotels</span>
        </div>
        <div className="flex items-center space-x-2">
          <Utensils size={24} />
          <span>Dinner</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={24} />
          <span>Suggestions</span>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
