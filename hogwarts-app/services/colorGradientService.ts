interface ColorResponse {
  data?: {
    hex: string;
  };
}

export async function getGradientStyle(houseColors: string): Promise<{ background: string }> {
  try {
    const colorParts = houseColors.toLowerCase().split(' and ');
    
    const colorPromises = colorParts.map(async (color) => {
      try {
        const response = await fetch(`https://hogwarts-app-one.vercel.app/colors/${color.trim()}`);
        if (!response.ok) return null;
        const data: ColorResponse = await response.json();
        return data?.data?.hex ? `#${data.data.hex}` : null;
      } catch {
        return null;
      }
    });

    const colors = await Promise.all(colorPromises);
    
    // If both colors fetched successfully
    if (colors[0] && colors[1]) {
      return {
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
      };
    }

    // Fallback gradient
    return {
      background: 'linear-gradient(to right, #fefefe ,#000000)'
    };
  } catch (error) {
    console.error('Error in getGradientStyle:', error);
    return {
      background: 'linear-gradient(to right,#fefefe, #000000)'
    };
  }
}