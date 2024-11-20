export interface Dog {
  id: string;
  name: string;
  age: string;
  breed: string;
  location: string;
  description: string;
  imageUrl: string;
  status: 'available' | 'pending' | 'adopted';
  temperament: string[];
  health: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}