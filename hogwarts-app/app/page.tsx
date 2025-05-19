'use client';  

import { useState, useEffect } from 'react'; 
import { House } from '@/types/type'; 
import HouseCard from '@/components/HouseCard'; 
import SearchBar from '@/components/SearchBar'; 
import LoadingSpinner from '@/components/LoadingSpinner';  

export default function Home() {   
  const [houses, setHouses] = useState<House[]>([]);   
  const [filteredHouses, setFilteredHouses] = useState<House[]>([]);   
  const [searchTerm, setSearchTerm] = useState('');   
  const [loading, setLoading] = useState(true);      
  
  useEffect(() => {     
    fetchHouses();   
  }, []);      
  
  const fetchHouses = async () => {     
    setLoading(true);     
    try {       
      const response = await fetch('https://hogwarts-app-one.vercel.app/houses');     
      if (!response.ok) {         
        throw new Error('Failed to fetch houses');       
      }       
      const data = await response.json();       
      setHouses(data);       
      setFilteredHouses(data);       
      setLoading(false);     
    } catch (error) {       
      console.error('Error fetching houses:', error);       
      setLoading(false);     
    }   
  };      
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {     
    const term = e.target.value.toLowerCase();     
    setSearchTerm(term);          
    
    const filtered = houses.filter(house =>       
      house.name.toLowerCase().includes(term)     
    );     
    setFilteredHouses(filtered);   
  };      
  
  return (     
    <div className="max-w-md mx-auto px-4 py-4">       
      <div className="flex justify-start">         
        <SearchBar value={searchTerm} onSearch={handleSearch} />       
      </div>              
      
      {loading ? (         
        <div className="flex justify-center">           
          <LoadingSpinner />         
        </div>       
      ) : (         
        <div className="space-y-6">           
          {filteredHouses.map(house => (             
            <HouseCard key={house.id} house={house} />           
          ))}         
        </div>       
      )}     
    </div>   
  ); 
}