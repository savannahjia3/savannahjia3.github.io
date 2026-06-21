// Artwork data — replace placeholder images and titles with real work
// To swap in real images: replace the `img` and `thumb` values with your image URLs

function makePlaceholder(w, h, color, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${color}"/>
    <text x="${w/2}" y="${h/2}" font-family="Helvetica Neue, sans-serif" font-size="${Math.max(14, Math.min(w,h)/14)}" fill="rgba(255,255,255,0.45)" text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function makeThumb(color) { return makePlaceholder(300, 220, color, ''); }
function makeImg(w, h, color, label) { return makePlaceholder(w, h, color, label); }

const artworks = {
  paintings: [
    { id: 'p1',  title: 'Untitled (I)',   year: 2024, medium: 'paintings', dims: '24 × 30 in',
      img: makeImg(900, 700, '#c4876a', 'Untitled (I)'),   thumb: makeThumb('#c4876a') },
    { id: 'p2',  title: 'Untitled (II)',  year: 2024, medium: 'paintings', dims: '18 × 24 in',
      img: makeImg(700, 900, '#7a8fa6', 'Untitled (II)'),  thumb: makeThumb('#7a8fa6') },
    { id: 'p3',  title: 'Untitled (III)', year: 2024, medium: 'paintings', dims: '36 × 48 in',
      img: makeImg(1200,900, '#8fa89c', 'Untitled (III)'), thumb: makeThumb('#8fa89c') },
    { id: 'p4',  title: 'Untitled (IV)',  year: 2024, medium: 'paintings', dims: '20 × 20 in',
      img: makeImg(800, 800, '#c9a84c', 'Untitled (IV)'),  thumb: makeThumb('#c9a84c') },
    { id: 'p5',  title: 'Untitled (V)',   year: 2024, medium: 'paintings', dims: '30 × 40 in',
      img: makeImg(900, 700, '#9b7b8f', 'Untitled (V)'),   thumb: makeThumb('#9b7b8f') },
    { id: 'p6',  title: 'Untitled (VI)',  year: 2023, medium: 'paintings', dims: '16 × 20 in',
      img: makeImg(700, 900, '#6b9ea0', 'Untitled (VI)'),  thumb: makeThumb('#6b9ea0') },
    { id: 'p7',  title: 'Untitled (VII)', year: 2023, medium: 'paintings', dims: '24 × 36 in',
      img: makeImg(1000,750, '#d4a5a5', 'Untitled (VII)'), thumb: makeThumb('#d4a5a5') },
    { id: 'p8',  title: 'Untitled (VIII)',year: 2023, medium: 'paintings', dims: '12 × 16 in',
      img: makeImg(800,1000, '#8b6f5e', 'Untitled (VIII)'),thumb: makeThumb('#8b6f5e') },
    { id: 'p9',  title: 'Untitled (IX)',  year: 2022, medium: 'paintings', dims: '30 × 30 in',
      img: makeImg(900, 900, '#b5a89f', 'Untitled (IX)'),  thumb: makeThumb('#b5a89f') },
    { id: 'p10', title: 'Untitled (X)',   year: 2022, medium: 'paintings', dims: '24 × 30 in',
      img: makeImg(900, 700, '#a89b6b', 'Untitled (X)'),   thumb: makeThumb('#a89b6b') },
  ],
  'works-on-paper': [
    { id: 'w1', title: 'Study (I)',   year: 2024, medium: 'works-on-paper', dims: '11 × 14 in',
      img: makeImg(800, 1000, '#7a8fa6', 'Study (I)'),   thumb: makeThumb('#7a8fa6') },
    { id: 'w2', title: 'Study (II)',  year: 2024, medium: 'works-on-paper', dims: '8.5 × 11 in',
      img: makeImg(700,  900, '#c4876a', 'Study (II)'),  thumb: makeThumb('#c4876a') },
    { id: 'w3', title: 'Study (III)', year: 2024, medium: 'works-on-paper', dims: '18 × 24 in',
      img: makeImg(900,  700, '#8fa89c', 'Study (III)'), thumb: makeThumb('#8fa89c') },
    { id: 'w4', title: 'Study (IV)',  year: 2024, medium: 'works-on-paper', dims: '9 × 12 in',
      img: makeImg(750, 1000, '#9b7b8f', 'Study (IV)'),  thumb: makeThumb('#9b7b8f') },
    { id: 'w5', title: 'Study (V)',   year: 2023, medium: 'works-on-paper', dims: '11 × 14 in',
      img: makeImg(800, 1000, '#d4a5a5', 'Study (V)'),   thumb: makeThumb('#d4a5a5') },
    { id: 'w6', title: 'Study (VI)',  year: 2023, medium: 'works-on-paper', dims: '24 × 30 in',
      img: makeImg(900,  700, '#6b9ea0', 'Study (VI)'),  thumb: makeThumb('#6b9ea0') },
  ],
  sculpture: [
    { id: 's1', title: 'Form (I)',   year: 2024, medium: 'sculpture', dims: '12 × 8 × 6 in',
      img: makeImg(800, 1000, '#8b6f5e', 'Form (I)'),   thumb: makeThumb('#8b6f5e') },
    { id: 's2', title: 'Form (II)',  year: 2024, medium: 'sculpture', dims: '18 × 10 × 8 in',
      img: makeImg(900,  700, '#c9a84c', 'Form (II)'),  thumb: makeThumb('#c9a84c') },
    { id: 's3', title: 'Form (III)', year: 2024, medium: 'sculpture', dims: '24 × 14 × 12 in',
      img: makeImg(700,  900, '#b5a89f', 'Form (III)'), thumb: makeThumb('#b5a89f') },
  ]
};
