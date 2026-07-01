// Artwork data
// - img: web-optimized image (max 2400px, shown in lightbox)
// - thumb: thumbnail image (max 800px, shown in grid)
// - dims: fill in actual physical dimensions
// - year: null = unknown (won't appear under a year heading until filled in)

const artworks = {
  paintings: [
    { id: 'p1',  slug: 'death-by-magnitude',    title: 'Death by Magnitude',     year: null, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/death-by-magnitude.jpg',    thumb: 'images/paintings/thumbs/death-by-magnitude.jpg' },
    { id: 'p2',  slug: 'still-lovely',           title: 'Still Lovely',           year: 2024, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/still-lovely.jpg',          thumb: 'images/paintings/thumbs/still-lovely.jpg' },
    { id: 'p3',  slug: 'no-redemption-in-death', title: 'No Redemption in Death', year: null, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/no-redemption-in-death.jpg',thumb: 'images/paintings/thumbs/no-redemption-in-death.jpg' },
    { id: 'p4',  slug: 'untitled-i',             title: 'Untitled (I)',           year: 2024, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/untitled-i.jpg',            thumb: 'images/paintings/thumbs/untitled-i.jpg' },
    { id: 'p5',  slug: 'untitled-ii',            title: 'Untitled (II)',          year: 2024, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/untitled-ii.jpg',           thumb: 'images/paintings/thumbs/untitled-ii.jpg' },
    { id: 'p6',  slug: 'spit-the-bones-out',     title: 'Spit the Bones Out',    year: 2025, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/spit-the-bones-out.jpg',    thumb: 'images/paintings/thumbs/spit-the-bones-out.jpg' },
    { id: 'p7',  slug: 'trick-mountain',         title: 'Trick Mountain',        year: 2024, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/trick-mountain.jpg',        thumb: 'images/paintings/thumbs/trick-mountain.jpg' },
    { id: 'p8',  slug: 'untitled-iii',           title: 'Untitled (III)',         year: 2025, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/untitled-iii.jpg',          thumb: 'images/paintings/thumbs/untitled-iii.jpg' },
    { id: 'p9',  slug: 'untitled-iv',            title: 'Untitled (IV)',          year: 2025, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/untitled-iv.jpg',           thumb: 'images/paintings/thumbs/untitled-iv.jpg' },
    { id: 'p10', slug: 'untitled-v',             title: 'Untitled (V)',           year: null, medium: 'paintings',      dims: '? × ? in',
      img: 'images/paintings/web/untitled-v.jpg',            thumb: 'images/paintings/thumbs/untitled-v.jpg' },
  ],
  'works-on-paper': [
    { id: 'w1', slug: 'hands',       title: 'Hands',     year: 2025, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/hands.jpg',     thumb: 'images/works-on-paper/thumbs/hands.jpg' },
    { id: 'w2', slug: 'leda',        title: 'Leda',      year: 2025, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/leda.jpg',      thumb: 'images/works-on-paper/thumbs/leda.jpg' },
    { id: 'w3', slug: 'mythos',      title: 'Mythos',    year: 2026, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/mythos.jpg',    thumb: 'images/works-on-paper/thumbs/mythos.jpg' },
    { id: 'w4', slug: 'okck',        title: 'OKCK',      year: 2026, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/okck.jpg',      thumb: 'images/works-on-paper/thumbs/okck.jpg' },
    { id: 'w5', slug: 'todo-list',   title: 'Todo List', year: 2025, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/todo-list.jpg', thumb: 'images/works-on-paper/thumbs/todo-list.jpg' },
    { id: 'w6', slug: 'untitled-i',  title: 'Untitled (I)',  year: null, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/untitled-i.jpg',  thumb: 'images/works-on-paper/thumbs/untitled-i.jpg' },
    { id: 'w7', slug: 'untitled-ii', title: 'Untitled (II)', year: null, medium: 'works-on-paper', dims: '? × ? in',
      img: 'images/works-on-paper/web/untitled-ii.jpg', thumb: 'images/works-on-paper/thumbs/untitled-ii.jpg' },
  ],
  sculpture: [
    // Add sculpture works here when available
  ]
};
