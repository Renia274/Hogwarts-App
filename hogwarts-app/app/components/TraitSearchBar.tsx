import React from 'react';

interface TraitSearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TraitSearchBar({ onChange }: TraitSearchBarProps) {
  return (
    <div className="mb-2">
      <input
        type="text"
        placeholder="Search house traits"
        onChange={onChange}
        className="w-full md:w-[236px] h-10 pl-2 pt-0.5 rounded-lg focus:outline-none  placeholder-[#757675]"
        style={{
          border: '1px solid #D3D2D2'
        }}
      />
    </div>
  );
}