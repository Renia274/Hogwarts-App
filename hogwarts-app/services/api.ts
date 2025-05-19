export const fetchHouses = async () => {
  try {
    const response = await fetch('https://hogwarts-app-one.vercel.app/houses');
    if (!response.ok) {
      throw new Error('Failed to fetch houses');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching houses:', error);
    return [];
  }
};

export const fetchHouseByName = async (name: string) => {
  try {
    const response = await fetch(`https://hogwarts-app-one.vercel.app/houses?name=${encodeURIComponent(name)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch house');
    }
    const houses = await response.json();
    return houses.length > 0 ? houses[0] : null;
  } catch (error) {
    console.error(`Error fetching house ${name}:`, error);
    return null;
  }
};

