import car1 from './assets/car1.png';
import car2 from './assets/car2.png';
import car3 from './assets/car3.png';
import car4 from './assets/car4.png';
import car5 from './assets/car5.png';

//logos
import kia from './assets/kia.png';
import volkswagen from './assets/volkswagen.png';
import audi from './assets/audi.png';
import suzuki from './assets/suzuki.png';

export interface PurchasedCarDataProps {
  details: {
    brand: {
      logo: string;
      model: string;
    };
    preview: string;
    combustionFuel: string;
    acceleration: string;
    cost: number;
  };
  id: number;
  status: 'Delivered';
  date: string;
}
export const carsData: PurchasedCarDataProps[] = [
  {
    details: {
      brand: {
        logo: kia,
        model: 'Seltos',
      },
      preview: car1,
      combustionFuel: 'Diesel',
      acceleration: '21,749',
      cost: 10000,
    },
    id: 1,
    status: 'Delivered',
    date: 'Sat. 23rd Feb | 10:39 PM',
  },
  {
    details: {
      brand: {
        logo: volkswagen,
        model: 'T-Roc',
      },
      preview: car2,
      combustionFuel: 'Diesel',
      acceleration: '21,749',
      cost: 1800000,
    },
    id: 2,
    status: 'Delivered',
    date: 'Sun. 15th Mar | 11:00 AM',
  },
  {
    details: {
      brand: {
        logo: audi,
        model: 'q7',
      },
      preview: car3,
      combustionFuel: 'Diesel',
      acceleration: '21,749',
      cost: 5500000,
    },
    id: 3,
    status: 'Delivered',
    date: 'Sun. 15th Mar | 11:00 AM',
  },
  {
    details: {
      brand: {
        logo: suzuki,
        model: 'Baleno',
      },
      preview: car4,
      combustionFuel: 'Diesel',
      acceleration: '21,749',
      cost: 600000,
    },
    id: 4,
    status: 'Delivered',
    date: 'Sat. 23rd Feb | 10:39 PM',
  },
  {
    details: {
      brand: {
        logo: volkswagen,
        model: 'Polo',
      },
      preview: car5,
      combustionFuel: 'Diesel',
      acceleration: '21,749',
      cost: 540000,
    },
    id: 5,
    status: 'Delivered',
    date: 'Sat. 23rd Feb | 10:39 PM',
  },
];
