import React from 'react';
import { PurchasedCarDataProps } from '../../../carsData';
import { formatAmount } from '../../../utils';
import { GoClock } from 'react-icons/go';
import { BiGasPump, BiSmile } from 'react-icons/bi';
// import {  }
export const CarCard: React.FC<{ data: PurchasedCarDataProps }> = ({ data }) => {
  const {
    details: {
      brand: { logo, model },
      cost,
      combustionFuel,
      acceleration,
      preview,
    },
    date,
    status,
  } = data;
  return (
    <li className="car-card cursor-pointer border-radius-xs margin-right-md margin-bottom-md">
      <div className="d-flex flex-center nowrap padding-xs bg-white brand">
        <img src={logo} alt="brand logo" className="logo margin-right-xs" />
        <span className="text-content font-weight-400 font-sm">{model}</span>
      </div>
      <div className="d-flex flex-center padding-xs">
        <span className="text-content font-xs font-weight-400 color-gray-dark margin-right-xs">
          {status}
        </span>
        <span className="text-content font-xs font-weight-400 color-gray-dark">
          {date}
        </span>
      </div>
      <div className="car-card-preview">
        <img src={preview} alt="Car preview" />
      </div>
      <div className="d-flex flex-center nowrap padding-xs">
        <div className="flex-equal d-flex align-items-center flex-center text-content padding-horizontal-xs slim-border-right">
          <GoClock className="color-google margin-right-xs" size={15} />
          <span className="text-content font-xs font-weight-400 color-gray-dark">
            {acceleration}
          </span>
        </div>
        <div className="flex-equal d-flex align-items-center flex-center padding-horizontal-xs slim-border-right">
          <BiGasPump
            className="margin-right-xs"
            size={15}
            color="rgb(134, 241, 46)"
          />
          <span className="text-content font-xs font-weight-400 color-gray-dark">
            {combustionFuel}
          </span>
        </div>
        <div className="flex-equal d-flex align-items-center flex-center nowrap padding-horizontal-xs">
          <BiSmile className="margin-right-xs" size={15} color="rgb(3, 165, 194)" />
          <span className="text-content font-xs font-weight-400 color-gray-dark">
            First Owner
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between padding-sm bg-white border-radius-bottom-inherit">
        <div className="d-flex column text-content flex-equal">
          <span className="text-content font-xs font-weight-600 margin-right-sm">
            {formatAmount(cost)}
          </span>
        </div>
        <button
          type="button"
          className="padding-sm uppercase font-weight-500 bg-transparent color-google view-button ripple">
          view details
        </button>
      </div>
    </li>
  );
};
