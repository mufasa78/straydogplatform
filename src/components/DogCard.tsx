import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Dog } from '../types';

interface DogCardProps {
  dog: Dog;
  onAdopt: (id: string) => void;
}

export function DogCard({ dog, onAdopt }: DogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={dog.imageUrl}
          alt={dog.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => onAdopt(dog.id)}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-pink-50 transition-colors"
          >
            <Heart className="w-5 h-5 text-pink-500" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{dog.name}</h3>
          <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
            {dog.status}
          </span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{dog.location}</span>
        </div>
        <p className="text-gray-600 mb-4">{dog.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {dog.temperament.map((trait) => (
            <span
              key={trait}
              className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
            >
              {trait}
            </span>
          ))}
        </div>
        <button
          onClick={() => onAdopt(dog.id)}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Adopt {dog.name}
        </button>
      </div>
    </div>
  );
}