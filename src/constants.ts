export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  features: string[];
  specs: {
    engine: string;
    transmission: string;
    fuel: string;
    tech: string;
  };
  description: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'tiggo-8-pro',
    name: 'Tiggo 8 Pro',
    tagline: 'The Ultimate Luxury SUV',
    price: 'Request Price',
    image: 'https://picsum.photos/seed/tiggo8/800/600',
    features: ['7-Seater Luxury', 'Panoramic Sunroof', 'ADAS Level 2', '12.3-inch Dual Screen'],
    specs: {
      engine: '1.6TGDI / 2.0TGDI',
      transmission: '7DCT',
      fuel: 'Petrol',
      tech: 'Sony Sound System, Voice Control'
    },
    description: 'Experience the pinnacle of Chery engineering. The Tiggo 8 Pro combines spacious luxury with cutting-edge safety technology for the modern Nigerian family.'
  },
  {
    id: 'arrizo-5',
    name: 'Arrizo 5',
    tagline: 'The Smart Sedan',
    price: 'Request Price',
    image: 'https://picsum.photos/seed/arrizo5/800/600',
    features: ['Sleek Design', 'Smart Connectivity', 'Fuel Efficient', 'Comfortable Cabin'],
    specs: {
      engine: '1.5L',
      transmission: 'CVT',
      fuel: 'Petrol',
      tech: 'Touchscreen Infotainment'
    },
    description: 'The Arrizo 5 is the perfect blend of style and efficiency. A smart sedan designed for the modern urban driver.'
  },
  {
    id: 'tiggo-4-pro',
    name: 'Tiggo 4 Pro',
    tagline: 'Your First Step into Luxury',
    price: 'Request Price',
    image: 'https://picsum.photos/seed/tiggo4/800/600',
    features: ['Compact & Powerful', 'Smart Keyless Entry', 'Fuel Efficient', 'Modern Interior'],
    specs: {
      engine: '1.5L / 1.5T',
      transmission: 'MT/CVT',
      fuel: 'Petrol',
      tech: 'Digital Instrument Cluster'
    },
    description: 'Affordable luxury at its best. The Tiggo 4 Pro is the ideal SUV for young professionals and small families looking for reliability and tech.'
  },
  {
    id: 'tiggo-9',
    name: 'Tiggo 9',
    tagline: 'The Flagship Experience',
    price: 'Request Price',
    image: 'https://picsum.photos/seed/tiggo9/800/600',
    features: ['Premium Luxury', 'Next-Gen Tech', 'Spacious 7-Seater', 'Advanced Safety'],
    specs: {
      engine: '2.0TGDI',
      transmission: '8AT',
      fuel: 'Petrol',
      tech: 'Dual 12.3-inch Screens'
    },
    description: 'The Tiggo 9 represents the future of Chery. A flagship SUV that redefines luxury and performance.'
  },
  {
    id: 'himla',
    name: 'Himla',
    tagline: 'Rugged Reliability',
    price: 'Request Price',
    image: 'https://picsum.photos/seed/himla/800/600',
    features: ['Durable Build', 'High Ground Clearance', 'Versatile Cargo', 'Reliable Engine'],
    specs: {
      engine: '2.0L',
      transmission: 'Manual/Auto',
      fuel: 'Petrol/Diesel',
      tech: 'Essential Connectivity'
    },
    description: 'Built for the toughest terrains. The Himla is your reliable partner for every journey, no matter where the road takes you.'
  }
];
