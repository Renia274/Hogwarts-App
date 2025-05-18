function getGradientStyle(houseColors: string) {
  const colors = houseColors.toLowerCase();

  let firstColor = '#fff';
  let secondColor = '#000';

  if (colors.includes('gryffindor') || colors.includes('scarlet and gold')) {
    firstColor = '#ff2400';
    secondColor = '#ffd700';
  } 
  else if (colors.includes('ravenclaw') || colors.includes('blue and bronze')) {
    firstColor = '#0000ff';
    secondColor = '#cd7f32';
  }
  else if (colors.includes('hufflepuff') || colors.includes('yellow and black')) {
    firstColor = '#ffff00';
    secondColor = '#000000';
  }
  else if (colors.includes('slytherin') || colors.includes('green and silver')) {
    firstColor = '#008000';
    secondColor = '#c0c0c0';
  }
  
  return {
    background: `linear-gradient(to right, ${firstColor}, ${secondColor})`
  };
}

export { getGradientStyle };