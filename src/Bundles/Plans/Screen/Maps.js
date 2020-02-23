const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
  return color
}

export default FIGURES = [
  {
    id: '0',
    name: 'TAUREAU',
    shape: 'rectangle',
    description:
      'Ceci est une description test de l attraction taureau du gala 2019',
    x2: 290,
    y2: 168,
    x1: 272,
    y1: 154,
    prefill: 'transparent',
    fill: 'transparent',
  },
  {
    id: '1',
    name: 'M104',
    shape: 'rectangle',
    description: 'BAL VIP, CONCERTS ETUDIANTS AND MORE',
    x2: 145,
    y2: 155,
    x1: 122,
    y1: 134,
    prefill: 'transparent',
    fill: 'transparent',
  },
  {
    id: '2',
    name: 'BORNE DE RECHARGEMENT CASHLESS',
    shape: 'circle',
    x1: 183,
    y1: 118,
    radius: 20,
    prefill: 'transparent',
    fill: 'transparent',
  },
  {
    id: '3',
    name: 'BORNE DE RECHARGEMENT CASHLESS',
    shape: 'circle',
    x1: 230,
    y1: 180,
    radius: 20,
    prefill: 'transparent',
    fill: 'transparent',
  },
]
