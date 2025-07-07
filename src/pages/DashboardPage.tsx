import React, { useEffect, useState } from 'react';
import api from '../api/axios';

type Car = {
  id: number;
  car_name: string;
  car_model: string;
  car_number: string;
  user?: {
    name: string;
  };
};

const DashboardPage = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    api.get<Car[]>('/cars')
      .then((res) => setCars(res.data))
      .catch(() => alert("Error loading cars"));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Car Listing</h1>
      <ul className="space-y-2">
        {cars.map((car) => (
          <li key={car.id} className="p-4 border rounded shadow">
            <p><strong>Name:</strong> {car.car_name}</p>
            <p><strong>Model:</strong> {car.car_model}</p>
            <p><strong>Number:</strong> {car.car_number}</p>
            <p><strong>Owner:</strong> {car.user?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
