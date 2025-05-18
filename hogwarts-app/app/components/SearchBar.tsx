import React from 'react';

interface SearchBarProps {
  value: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onSearch }: SearchBarProps) {
  return (
    <div className="mb-6 w-full md:w-64">
      <input
        type="text"
        placeholder="Search houses"
        value={value}
        onChange={onSearch}
        className="w-full pl-2 pt-0.5 h-14 border border-border-gray rounded-lg focus:outline-none placeholder-[#757675]"
        style={{
          border: '1px solid #D3D2D2'
        }}
      />
    </div>
  );
}