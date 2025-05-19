import React from 'react'; 
import { Trait } from '@/types/type';  

interface TraitItemProps {   
  trait: Trait; 
}  

export default function TraitItem({ trait }: TraitItemProps) {   
  return (     
    <span       
      className="inline-flex text-white px-2 py-0.5 rounded-md text-xs bg-[#3c3333] justify-center items-center mr-2 mb-2"
    >       
      {trait.name}     
    </span>   
  ); 
}