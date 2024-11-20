import { Dog } from '../types';

export const dogs: Dog[] = [
  {
    id: '1',
    name: 'Luna',
    age: '2 years',
    breed: 'Mixed Breed',
    location: 'Downtown Shelter',
    description: 'Luna is a sweet and gentle soul who loves cuddles and long walks.',
    imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b',
    status: 'available',
    temperament: ['Friendly', 'Gentle', 'Playful'],
    health: ['Vaccinated', 'Spayed', 'Dewormed']
  },
  {
    id: '2',
    name: 'Max',
    age: '1 year',
    breed: 'Labrador Mix',
    location: 'West Side Rescue',
    description: 'Max is an energetic young dog who gets along great with other pets.',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    status: 'available',
    temperament: ['Energetic', 'Social', 'Smart'],
    health: ['Vaccinated', 'Neutered', 'Microchipped']
  }
];