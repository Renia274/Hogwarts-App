import React, { useState, useEffect } from 'react';
import { House } from '@/types';
import { getGradientStyle } from '@/services/colorGradientService';
import TraitItem from '@/components/TraitItem';
import TraitSearchBar from '@/components/TraitSearchBar';

interface HouseCardProps {
  house: House;
}

export default function HouseCard({ house }: HouseCardProps) {
  const [traitFilter, setTraitFilter] = useState('');
  const [gradientStyle, setGradientStyle] = useState<{ background: string }>({ background: '' });
  const [loadingColors, setLoadingColors] = useState(true);

  useEffect(() => {
    const loadColors = async () => {
      try {
        const style = await getGradientStyle(house.houseColours);
        setGradientStyle(style);
      } catch (error) {
        console.error('Error loading colors:', error);
      } finally {
        setLoadingColors(false);
      }
    };

    loadColors();
  }, [house.houseColours]);

  const filteredTraits = traitFilter
    ? house.traits.filter(trait =>
        trait.name.toLowerCase().includes(traitFilter.toLowerCase())
      )
    : house.traits;

  const handleTraitSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTraitFilter(e.target.value);
  };

  return (
    <div className="rounded-lg shadow-lg border border-gray-200 p-4 mb-4 w-full md:w-[440px]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold">{house.name}</h2>
        <span className="text-sm">{house.animal}</span>
      </div>

      <div className="h-5 w-full mb-3 rounded-md relative overflow-hidden">
        {loadingColors ? (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        ) : (
          <div
            className="absolute inset-0"
            style={gradientStyle}
            aria-label={`${house.houseColours} gradient`}
          />
        )}
      </div>

      <p className="mb-2 text-md">
        <span className="font-normal">Founder:</span> <span className="font-bold">{house.founder}</span>
      </p>

      <TraitSearchBar onChange={handleTraitSearch} />

      <div className="flex flex-wrap">
        {filteredTraits.map(trait => (
          <TraitItem key={trait.id} trait={trait} />
        ))}
      </div>
    </div>
  );
}