import React from 'react';
import { carsData } from '../../carsData';
import { CarCard } from '../components';
export const BuyingCars: React.FC = (): JSX.Element => {
  return (
    <section className="padding-md margin-left-sm">
      <h1 className="font-md capitalize padding-bottom-xs">Buying Cars</h1>
      <ul className="d-flex cars">
        {carsData.map((data) => (
          <CarCard data={data} key={data.id} />
        ))}
      </ul>
    </section>
  );
};
