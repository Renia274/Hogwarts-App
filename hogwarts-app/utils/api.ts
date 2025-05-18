// services/api.js
export const fetchHouses = async () => {
  try {
    const response = await fetch('http://localhost:3001/houses');
    if (!response.ok) {
      throw new Error('Failed to fetch houses');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching houses:', error);
    return [];
  }
};