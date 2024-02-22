"use client"

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Brand {
  id: number;
  name: string;
  description: string;
  likes: number;
  rating: number;
  about: string;
}

export default function BrandDetails() {

  const paramId = useParams();
  const [likes, setLikes] = useState<number>(0); 
  const [brand, setBrand] = useState<Brand | null>(null);

  useEffect(() => {
    

    console.log("Brand ID from URL:", paramId);

    fetch('/brands.json')
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched data:", data); 
        
        const foundBrand = data.find((b: Brand) => b.id.toString() === paramId.id);
        
        // console.log("Found brand:", foundBrand);
        
        setBrand(foundBrand);
        if (foundBrand) {
          setLikes(foundBrand.likes);
        }
      })
      .catch((error) => {
        console.error("Fetching error:", error);
      });
  }, [paramId]);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  if (!brand) return <div>Unable to Find</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{brand.name}</h1>
      <p className="text-lg text-gray-700">{brand.description}</p>
      <p className="mt-2"><strong>Rating:</strong> {brand.rating}</p>
      <button onClick={handleLike} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Like
      </button>
      <p className="mt-2"><strong>Likes:</strong> {likes}</p>
      <p className="mt-2">{brand.about}</p>
    </div>
  );
}



