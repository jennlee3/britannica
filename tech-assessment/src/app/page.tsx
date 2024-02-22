"use client"

console.log('Processing page.tsx file');

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Brand {
  id: number;
  name: string;
  description: string;
  likes: number;
  rating: number;
  about: string;
}

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    fetch('/brands.json')
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched brands data:", data); 
        setBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error); 
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Sustainable Fashion Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <Link key={brand.id} href={`/pages/${brand.id}`} passHref>
            <div className="border p-4 rounded-lg shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{brand.name}</h2>
              <p className="text-gray-600">{brand.description}</p>
              <div className="mt-2">
                <span className="text-gray-800 font-medium">Rating: </span>{brand.rating}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
