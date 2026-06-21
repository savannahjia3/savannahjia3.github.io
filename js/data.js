// Artwork data — replace placeholder images and titles with real work
const artworks = {
  paintings: [
    // 2024
    { id: 'p1', title: 'Untitled (I)', year: 2024, medium: 'paintings', dims: '24 × 30 in', img: 'https://picsum.photos/seed/sj-p1/900/700', thumb: 'https://picsum.photos/seed/sj-p1/300/230' },
    { id: 'p2', title: 'Untitled (II)', year: 2024, medium: 'paintings', dims: '18 × 24 in', img: 'https://picsum.photos/seed/sj-p2/700/900', thumb: 'https://picsum.photos/seed/sj-p2/230/300' },
    { id: 'p3', title: 'Untitled (III)', year: 2024, medium: 'paintings', dims: '36 × 48 in', img: 'https://picsum.photos/seed/sj-p3/1200/900', thumb: 'https://picsum.photos/seed/sj-p3/300/225' },
    { id: 'p4', title: 'Untitled (IV)', year: 2024, medium: 'paintings', dims: '20 × 20 in', img: 'https://picsum.photos/seed/sj-p4/800/800', thumb: 'https://picsum.photos/seed/sj-p4/250/250' },
    { id: 'p5', title: 'Untitled (V)', year: 2024, medium: 'paintings', dims: '30 × 40 in', img: 'https://picsum.photos/seed/sj-p5/900/700', thumb: 'https://picsum.photos/seed/sj-p5/300/230' },
    // 2023
    { id: 'p6', title: 'Untitled (VI)', year: 2023, medium: 'paintings', dims: '16 × 20 in', img: 'https://picsum.photos/seed/sj-p6/700/900', thumb: 'https://picsum.photos/seed/sj-p6/230/300' },
    { id: 'p7', title: 'Untitled (VII)', year: 2023, medium: 'paintings', dims: '24 × 36 in', img: 'https://picsum.photos/seed/sj-p7/1000/750', thumb: 'https://picsum.photos/seed/sj-p7/300/225' },
    { id: 'p8', title: 'Untitled (VIII)', year: 2023, medium: 'paintings', dims: '12 × 16 in', img: 'https://picsum.photos/seed/sj-p8/800/1000', thumb: 'https://picsum.photos/seed/sj-p8/240/300' },
    // 2022
    { id: 'p9', title: 'Untitled (IX)', year: 2022, medium: 'paintings', dims: '30 × 30 in', img: 'https://picsum.photos/seed/sj-p9/900/900', thumb: 'https://picsum.photos/seed/sj-p9/260/260' },
    { id: 'p10', title: 'Untitled (X)', year: 2022, medium: 'paintings', dims: '24 × 30 in', img: 'https://picsum.photos/seed/sj-p10/900/700', thumb: 'https://picsum.photos/seed/sj-p10/300/230' },
  ],
  'works-on-paper': [
    // 2024
    { id: 'w1', title: 'Study (I)', year: 2024, medium: 'works-on-paper', dims: '11 × 14 in', img: 'https://picsum.photos/seed/sj-w1/800/1000', thumb: 'https://picsum.photos/seed/sj-w1/240/300' },
    { id: 'w2', title: 'Study (II)', year: 2024, medium: 'works-on-paper', dims: '8.5 × 11 in', img: 'https://picsum.photos/seed/sj-w2/700/900', thumb: 'https://picsum.photos/seed/sj-w2/230/300' },
    { id: 'w3', title: 'Study (III)', year: 2024, medium: 'works-on-paper', dims: '18 × 24 in', img: 'https://picsum.photos/seed/sj-w3/900/700', thumb: 'https://picsum.photos/seed/sj-w3/300/230' },
    { id: 'w4', title: 'Study (IV)', year: 2024, medium: 'works-on-paper', dims: '9 × 12 in', img: 'https://picsum.photos/seed/sj-w4/750/1000', thumb: 'https://picsum.photos/seed/sj-w4/225/300' },
    // 2023
    { id: 'w5', title: 'Study (V)', year: 2023, medium: 'works-on-paper', dims: '11 × 14 in', img: 'https://picsum.photos/seed/sj-w5/800/1000', thumb: 'https://picsum.photos/seed/sj-w5/240/300' },
    { id: 'w6', title: 'Study (VI)', year: 2023, medium: 'works-on-paper', dims: '24 × 30 in', img: 'https://picsum.photos/seed/sj-w6/900/700', thumb: 'https://picsum.photos/seed/sj-w6/300/230' },
  ],
  sculpture: [
    // 2024
    { id: 's1', title: 'Form (I)', year: 2024, medium: 'sculpture', dims: '12 × 8 × 6 in', img: 'https://picsum.photos/seed/sj-s1/800/1000', thumb: 'https://picsum.photos/seed/sj-s1/240/300' },
    { id: 's2', title: 'Form (II)', year: 2024, medium: 'sculpture', dims: '18 × 10 × 8 in', img: 'https://picsum.photos/seed/sj-s2/900/700', thumb: 'https://picsum.photos/seed/sj-s2/300/230' },
    { id: 's3', title: 'Form (III)', year: 2024, medium: 'sculpture', dims: '24 × 14 × 12 in', img: 'https://picsum.photos/seed/sj-s3/700/900', thumb: 'https://picsum.photos/seed/sj-s3/230/300' },
  ]
};
