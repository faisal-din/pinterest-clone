import logo from './icons/logo.jpg';
import creator_img from './images/creator-img.png';
import model_img from './images/model-img.png';

export const assets = {
  logo,
  creator_img,
  model_img,
};

export const pinData = [
  // Animals category
  {
    id: 1,
    title: 'Siberian Husky in Snow',
    description:
      'Beautiful Siberian Husky playing in fresh powder snow during winter in Alaska',
    image:
      'https://images.unsplash.com/photo-1706530593869-7eeeda382bd0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    comments: [
      {
        userId: 28,
        username: 'dogLover42',
        content: 'Such a beautiful coat!',
        timestamp: '2025-01-15T14:23:10Z',
      },
      {
        userId: 105,
        username: 'arcticExplorer',
        content: 'Reminds me of my first husky!',
        timestamp: '2025-01-16T09:45:22Z',
      },
    ],
    likes: 1247,
    category: 'Animals',
    creator: { id: 14, username: 'wildlifePhotos', fullName: 'Alex Johnson' },
    tags: ['dogs', 'husky', 'winter', 'snow', 'alaska'],
    dateCreated: '2025-01-15T10:12:30Z',
    saves: 892,
    dimensions: { width: 1200, height: 800 },
  },
  {
    id: 2,
    title: 'Sleeping Cat Positions',
    description:
      'The 10 most common sleeping positions for cats and what they mean about your feline friend',
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7',
    comments: [
      {
        userId: 56,
        username: 'catMomForever',
        content: 'My tabby always does #3!',
        timestamp: '2025-02-03T16:08:45Z',
      },
      {
        userId: 77,
        username: 'petVet',
        content: 'Great information! Position #7 can also indicate joint pain.',
        timestamp: '2025-02-04T11:32:19Z',
      },
    ],
    likes: 3456,
    category: 'Animals',
    creator: { id: 22, username: 'petBehaviorist', fullName: 'Sarah Williams' },
    tags: ['cats', 'pets', 'sleeping', 'behavior', 'feline'],
    dateCreated: '2025-02-03T08:45:12Z',
    saves: 2198,
    dimensions: { width: 1000, height: 1200 },
  },
  {
    id: 3,
    title: 'Rare Bird Species of the Amazon',
    description:
      'Colorful and exotic birds found in the Amazon rainforest that most people never get to see',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731',
    comments: [
      {
        userId: 112,
        username: 'birdWatcher',
        content: 'The Hoatzin is my favorite! So prehistoric looking.',
        timestamp: '2025-01-28T20:14:32Z',
      },
    ],
    likes: 876,
    category: 'Animals',
    creator: { id: 31, username: 'rainforestGuide', fullName: 'Carlos Mendez' },
    tags: ['birds', 'amazon', 'wildlife', 'exotic', 'rainforest'],
    dateCreated: '2025-01-28T15:30:45Z',
    saves: 654,
    dimensions: { width: 2000, height: 1333 },
  },
  {
    id: 4,
    title: 'Marine Life of the Great Barrier Reef',
    description:
      "Stunning underwater photography showcasing the diverse ecosystem of Australia's Great Barrier Reef",
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b',
    comments: [
      {
        userId: 45,
        username: 'scubaDiver',
        content: 'The colors are unreal! Planning my trip now.',
        timestamp: '2025-03-02T13:21:09Z',
      },
      {
        userId: 89,
        username: 'marineConservation',
        content: 'Beautiful but fragile ecosystem. We must protect it.',
        timestamp: '2025-03-03T08:17:42Z',
      },
    ],
    likes: 2387,
    category: 'Animals',
    creator: { id: 18, username: 'oceanExplorer', fullName: 'Emma Chen' },
    tags: ['ocean', 'coral', 'reef', 'fish', 'australia', 'underwater'],
    dateCreated: '2025-03-01T09:23:18Z',
    saves: 1845,
    dimensions: { width: 1800, height: 1200 },
  },
  {
    id: 5,
    title: 'Wildlife Safari Guide',
    description:
      'Essential tips for planning your African safari adventure and spotting the Big Five',
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098',
    comments: [
      {
        userId: 132,
        username: 'travelAddict',
        content: 'Just booked my safari after seeing this!',
        timestamp: '2025-02-18T16:54:30Z',
      },
    ],
    likes: 1532,
    category: 'Animals',
    creator: { id: 42, username: 'safariExpert', fullName: 'David Okafor' },
    tags: ['safari', 'africa', 'wildlife', 'travel', 'lion', 'elephant'],
    dateCreated: '2025-02-17T11:42:33Z',
    saves: 1128,
    dimensions: { width: 2200, height: 1467 },
  },
  {
    id: 6,
    title: 'Exotic Butterflies Collection',
    description:
      'Rare and beautiful butterfly species from around the world with identification guide',
    image: 'https://images.unsplash.com/photo-1557089041-7fa90d40a3ef',
    comments: [
      {
        userId: 73,
        username: 'natureLover',
        content: 'The Blue Morpho is absolutely stunning!',
        timestamp: '2025-01-10T19:28:06Z',
      },
      {
        userId: 91,
        username: 'biologyStu',
        content: 'Using this for my entomology project, thanks!',
        timestamp: '2025-01-11T14:37:51Z',
      },
    ],
    likes: 982,
    category: 'Animals',
    creator: { id: 27, username: 'entomologist', fullName: 'Maya Patel' },
    tags: ['butterflies', 'insects', 'nature', 'colorful', 'species'],
    dateCreated: '2025-01-10T10:15:22Z',
    saves: 745,
    dimensions: { width: 1600, height: 1067 },
  },

  // Art category
  {
    id: 7,
    title: 'Abstract Expressionism Guide',
    description:
      'Understanding the revolutionary art movement of the 1940s and 1950s with famous examples',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262',
    comments: [
      {
        userId: 58,
        username: 'artHistory101',
        content: "Pollock's technique was truly groundbreaking!",
        timestamp: '2025-02-12T15:43:18Z',
      },
      {
        userId: 119,
        username: 'galleryOwner',
        content: 'Great overview of a complex movement.',
        timestamp: '2025-02-13T10:21:05Z',
      },
    ],
    likes: 1843,
    category: 'Art',
    creator: { id: 36, username: 'artCritic', fullName: 'Julian Barnes' },
    tags: ['abstract', 'expressionism', 'painting', 'modernism', 'pollock'],
    dateCreated: '2025-02-12T09:34:27Z',
    saves: 1456,
    dimensions: { width: 1400, height: 1000 },
  },
  {
    id: 8,
    title: 'Watercolor Techniques for Beginners',
    description:
      'Step-by-step tutorial on basic watercolor painting techniques with supply recommendations',
    image: 'https://images.unsplash.com/photo-1520420097861-e4959843b682',
    comments: [
      {
        userId: 83,
        username: 'newPainter',
        content: 'The wet-on-wet technique changed everything for me!',
        timestamp: '2025-01-22T18:09:42Z',
      },
    ],
    likes: 2765,
    category: 'Art',
    creator: { id: 19, username: 'watercolorArtist', fullName: 'Mei Lin' },
    tags: ['watercolor', 'painting', 'tutorial', 'art supplies', 'beginner'],
    dateCreated: '2025-01-22T14:28:36Z',
    saves: 2341,
    dimensions: { width: 1200, height: 800 },
  },
  {
    id: 9,
    title: 'Street Art Around the World',
    description:
      'Famous street art and murals from cities across the globe showcasing urban creativity',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8',
    comments: [
      {
        userId: 64,
        username: 'urbanExplorer',
        content: 'The Berlin Wall piece is incredible!',
        timestamp: '2025-03-05T21:17:33Z',
      },
      {
        userId: 97,
        username: 'artStudent',
        content: "Banksy's work always makes me think.",
        timestamp: '2025-03-06T13:42:19Z',
      },
    ],
    likes: 3127,
    category: 'Art',
    creator: {
      id: 24,
      username: 'streetPhotographer',
      fullName: 'Marco Rossi',
    },
    tags: ['street art', 'urban', 'graffiti', 'mural', 'banksy', 'city'],
    dateCreated: '2025-03-05T16:45:23Z',
    saves: 2594,
    dimensions: { width: 1800, height: 1200 },
  },
  {
    id: 10,
    title: 'Digital Art Essentials',
    description:
      'Must-have tools and software for aspiring digital artists with sample workflows',
    image: 'https://images.unsplash.com/photo-1601790567550-c7bd65230497',
    comments: [
      {
        userId: 48,
        username: 'pixelArtist',
        content: 'Procreate changed my life!',
        timestamp: '2025-02-09T17:53:28Z',
      },
    ],
    likes: 1678,
    category: 'Art',
    creator: { id: 33, username: 'digitalCreator', fullName: 'Sophia Chen' },
    tags: [
      'digital art',
      'software',
      'procreate',
      'drawing tablet',
      'illustration',
    ],
    dateCreated: '2025-02-09T12:38:14Z',
    saves: 1489,
    dimensions: { width: 1600, height: 900 },
  },
  {
    id: 11,
    title: 'Renaissance Masterpieces',
    description:
      'An exploration of the most influential paintings from the Italian Renaissance period',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342',
    comments: [
      {
        userId: 71,
        username: 'historyBuff',
        content: 'The detail in these works is astonishing!',
        timestamp: '2025-01-17T16:29:47Z',
      },
      {
        userId: 108,
        username: 'italyLover',
        content: 'Planning to see these in Florence next month!',
        timestamp: '2025-01-18T09:36:21Z',
      },
    ],
    likes: 2134,
    category: 'Art',
    creator: { id: 29, username: 'artHistorian', fullName: 'Isabella Bianchi' },
    tags: [
      'renaissance',
      'painting',
      'italy',
      'davinci',
      'michelangelo',
      'history',
    ],
    dateCreated: '2025-01-17T11:23:09Z',
    saves: 1876,
    dimensions: { width: 2000, height: 1333 },
  },
  {
    id: 12,
    title: 'Pottery for Beginners',
    description:
      'Getting started with ceramic arts - essential tools, techniques, and first projects',
    image: 'https://images.unsplash.com/photo-1565539383096-8914fdcfa90c',
    comments: [
      {
        userId: 53,
        username: 'clayLover',
        content: 'Made my first bowl following these tips!',
        timestamp: '2025-03-12T18:47:32Z',
      },
    ],
    likes: 1421,
    category: 'Art',
    creator: { id: 38, username: 'ceramicArtist', fullName: 'Ryan Miller' },
    tags: ['pottery', 'ceramics', 'clay', 'handmade', 'craft', 'beginner'],
    dateCreated: '2025-03-12T14:19:53Z',
    saves: 1287,
    dimensions: { width: 1200, height: 1600 },
  },

  // Beauty category
  {
    id: 13,
    title: 'Natural Skincare Routine',
    description:
      'Creating an effective skincare regimen using only natural and organic ingredients',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f',
    comments: [
      {
        userId: 69,
        username: 'organicLover',
        content: 'The honey mask is amazing for sensitive skin!',
        timestamp: '2025-01-25T19:43:21Z',
      },
      {
        userId: 94,
        username: 'beautyBlogger',
        content: 'Love these eco-friendly alternatives!',
        timestamp: '2025-01-26T10:36:14Z',
      },
    ],
    likes: 4231,
    category: 'Beauty',
    creator: { id: 15, username: 'holisticBeauty', fullName: 'Emily Green' },
    tags: ['skincare', 'natural', 'organic', 'beauty', 'routine', 'self-care'],
    dateCreated: '2025-01-25T15:28:37Z',
    saves: 3647,
    dimensions: { width: 1067, height: 1600 },
  },
  {
    id: 14,
    title: '10-Minute Makeup for Busy Mornings',
    description:
      'Quick and easy makeup routine for professional women on the go with product recommendations',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    comments: [
      {
        userId: 41,
        username: 'makeupAddict',
        content: 'This saved my mornings! Thank you!',
        timestamp: '2025-02-27T17:52:39Z',
      },
    ],
    likes: 3765,
    category: 'Beauty',
    creator: { id: 26, username: 'beautyExpert', fullName: 'Jessica Wong' },
    tags: [
      'makeup',
      'quick',
      'professional',
      'morning routine',
      'beauty hacks',
    ],
    dateCreated: '2025-02-27T12:45:31Z',
    saves: 3142,
    dimensions: { width: 1200, height: 800 },
  },
  {
    id: 15,
    title: 'Nail Art Trends 2025',
    description:
      'The hottest nail designs and techniques taking over salons this year',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
    comments: [
      {
        userId: 78,
        username: 'nailTech',
        content: 'The chrome finish is so popular in my salon!',
        timestamp: '2025-03-08T16:31:27Z',
      },
      {
        userId: 103,
        username: 'fashionFwd',
        content: 'Trying the negative space design this weekend!',
        timestamp: '2025-03-09T11:24:53Z',
      },
    ],
    likes: 2987,
    category: 'Beauty',
    creator: { id: 21, username: 'nailArtist', fullName: 'Zoe Martinez' },
    tags: ['nails', 'manicure', 'trends', 'nail art', 'beauty', '2025'],
    dateCreated: '2025-03-08T09:17:45Z',
    saves: 2568,
    dimensions: { width: 1067, height: 1600 },
  },
  {
    id: 16,
    title: 'Hair Care for Curly Textures',
    description:
      'Complete guide to maintaining healthy curly hair with product recommendations and styling techniques',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f',
    comments: [
      {
        userId: 62,
        username: 'curlyCrew',
        content: 'Finally embracing my natural curls thanks to these tips!',
        timestamp: '2025-01-19T20:43:18Z',
      },
    ],
    likes: 4562,
    category: 'Beauty',
    creator: { id: 32, username: 'curlSpecialist', fullName: 'Nina Jackson' },
    tags: ['curly hair', 'natural hair', 'hair care', 'styling', 'products'],
    dateCreated: '2025-01-19T15:36:24Z',
    saves: 3879,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 17,
    title: 'DIY Face Masks for Every Skin Type',
    description:
      'Homemade facial treatments using kitchen ingredients tailored to different skin concerns',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f',
    comments: [
      {
        userId: 87,
        username: 'skinCareLover',
        content: 'The avocado mask saved my dry winter skin!',
        timestamp: '2025-02-05T18:27:49Z',
      },
      {
        userId: 116,
        username: 'naturalBeauty',
        content: 'Love that these are all natural ingredients!',
        timestamp: '2025-02-06T10:15:33Z',
      },
    ],
    likes: 2453,
    category: 'Beauty',
    creator: { id: 17, username: 'ecoBeauty', fullName: 'Olivia Park' },
    tags: ['face mask', 'DIY', 'skincare', 'natural remedies', 'beauty'],
    dateCreated: '2025-02-05T13:42:18Z',
    saves: 2187,
    dimensions: { width: 1333, height: 2000 },
  },
  {
    id: 18,
    title: "Men's Grooming Essentials",
    description:
      "Ultimate guide to men's skincare, hair care, and beard maintenance for the modern gentleman",
    image: 'https://images.unsplash.com/photo-1581429188904-5e687c073d86',
    comments: [
      {
        userId: 59,
        username: 'modernGent',
        content: 'Finally got my beard under control!',
        timestamp: '2025-03-15T19:28:36Z',
      },
    ],
    likes: 1876,
    category: 'Beauty',
    creator: { id: 39, username: 'grooming101', fullName: 'James Taylor' },
    tags: ["men's grooming", 'beard care', 'skincare', 'hair care', 'shaving'],
    dateCreated: '2025-03-15T14:23:47Z',
    saves: 1534,
    dimensions: { width: 1800, height: 1200 },
  },

  // Design category
  {
    id: 19,
    title: 'Minimalist Interior Design',
    description:
      'Principles and examples of minimalist home design with tips for decluttering your space',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
    comments: [
      {
        userId: 74,
        username: 'designEnthusiast',
        content: 'Transformed my living room with these principles!',
        timestamp: '2025-01-11T17:39:26Z',
      },
      {
        userId: 98,
        username: 'minimalLife',
        content: 'Less is definitely more. Love this aesthetic!',
        timestamp: '2025-01-12T09:28:14Z',
      },
    ],
    likes: 3214,
    category: 'Design',
    creator: { id: 23, username: 'interiorDesigner', fullName: 'Anna Schmidt' },
    tags: ['minimalism', 'interior design', 'decluttering', 'home', 'space'],
    dateCreated: '2025-01-11T12:34:19Z',
    saves: 2876,
    dimensions: { width: 2000, height: 1333 },
  },
  {
    id: 20,
    title: 'Color Theory for Designers',
    description:
      'Understanding color relationships and psychology for effective design with practical examples',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968',
    comments: [
      {
        userId: 49,
        username: 'graphicArtist',
        content: 'The complementary color guide changed my approach!',
        timestamp: '2025-02-23T18:46:32Z',
      },
    ],
    likes: 2567,
    category: 'Design',
    creator: { id: 34, username: 'colorExpert', fullName: 'Daniel Lee' },
    tags: [
      'color theory',
      'design',
      'psychology',
      'graphic design',
      'creativity',
    ],
    dateCreated: '2025-02-23T14:27:38Z',
    saves: 2132,
    dimensions: { width: 1800, height: 1200 },
  },
  {
    id: 21,
    title: 'UI/UX Design Trends 2025',
    description:
      'Current and emerging trends in user interface and experience design with case studies',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698',
    comments: [
      {
        userId: 84,
        username: 'webDeveloper',
        content: 'The micro-interactions trend is game-changing!',
        timestamp: '2025-03-07T16:38:25Z',
      },
      {
        userId: 109,
        username: 'productDesigner',
        content: 'Great insights on dark mode implementation.',
        timestamp: '2025-03-08T10:21:43Z',
      },
    ],
    likes: 3785,
    category: 'Design',
    creator: { id: 28, username: 'uxDesigner', fullName: 'Thomas Wilson' },
    tags: [
      'UI/UX',
      'design trends',
      'interfaces',
      'web design',
      'mobile apps',
      '2025',
    ],
    dateCreated: '2025-03-07T11:29:47Z',
    saves: 3241,
    dimensions: { width: 1600, height: 900 },
  },
  {
    id: 22,
    title: 'Typography Fundamentals',
    description:
      'Essential principles of typography for designers with font pairing suggestions and examples',
    image: 'https://images.unsplash.com/photo-1561655573-0ce3c0e459bf',
    comments: [
      {
        userId: 63,
        username: 'fontLover',
        content: 'The serif/sans-serif pairing guide is so helpful!',
        timestamp: '2025-01-30T19:42:37Z',
      },
    ],
    likes: 2143,
    category: 'Design',
    creator: {
      id: 37,
      username: 'typographyExpert',
      fullName: 'Laura Johnson',
    },
    tags: ['typography', 'fonts', 'graphic design', 'text', 'layout'],
    dateCreated: '2025-01-30T15:36:24Z',
    saves: 1876,
    dimensions: { width: 1800, height: 1200 },
  },
  {
    id: 23,
    title: 'Sustainable Design Practices',
    description:
      'Eco-friendly approaches to product and packaging design for a greener future',
    image: 'https://images.unsplash.com/photo-1511108690759-009324a90311',
    comments: [
      {
        userId: 92,
        username: 'ecoDesigner',
        content: 'The bamboo alternatives are brilliant!',
        timestamp: '2025-02-14T17:34:28Z',
      },
      {
        userId: 117,
        username: 'sustainableLiving',
        content: 'Implementing these in my small business!',
        timestamp: '2025-02-15T09:21:46Z',
      },
    ],
    likes: 1954,
    category: 'Design',
    creator: { id: 16, username: 'greenDesign', fullName: 'Michael Brown' },
    tags: [
      'sustainable',
      'eco-friendly',
      'packaging',
      'product design',
      'green',
    ],
    dateCreated: '2025-02-14T12:28:37Z',
    saves: 1743,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 24,
    title: 'Logo Design Process',
    description:
      'Step-by-step guide to creating memorable brand logos with case studies and examples',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926',
    comments: [
      {
        userId: 57,
        username: 'brandDesigner',
        content: 'The sketching phase is so crucial, great tips!',
        timestamp: '2025-03-18T18:34:29Z',
      },
    ],
    likes: 2765,
    category: 'Design',
    creator: { id: 43, username: 'logoMaster', fullName: 'Christine Walker' },
    tags: [
      'logo design',
      'branding',
      'identity',
      'graphic design',
      'creative process',
    ],
    dateCreated: '2025-03-18T13:26:47Z',
    saves: 2341,
    dimensions: { width: 1800, height: 1200 },
  },

  // DIY and Crafts category
  {
    id: 25,
    title: 'Macramé Wall Hanging Tutorial',
    description:
      'Beginner-friendly guide to creating a beautiful bohemian wall decoration',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea',
    comments: [
      {
        userId: 76,
        username: 'craftLover',
        content: 'Made this over the weekend! So therapeutic.',
        timestamp: '2025-02-08T19:27:35Z',
      },
      {
        userId: 101,
        username: 'bohoHome',
        content: 'Perfect addition to my living room wall!',
        timestamp: '2025-02-09T11:13:24Z',
      },
    ],
    likes: 3214,
    category: 'DIY and Crafts',
    creator: { id: 25, username: 'macrameArtist', fullName: 'Lila Roberts' },
    tags: [
      'macrame',
      'wall hanging',
      'DIY',
      'crafts',
      'home decor',
      'tutorial',
    ],
    dateCreated: '2025-02-08T14:28:36Z',
    saves: 2765,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 26,
    title: 'Upcycled Furniture Ideas',
    description:
      'Creative ways to transform old furniture into stunning new pieces with minimal tools',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126',
    comments: [
      {
        userId: 54,
        username: 'diyEnthusiast',
        content: 'Transformed an old dresser using the paint technique!',
        timestamp: '2025-01-21T18:42:37Z',
      },
    ],
    likes: 2543,
    category: 'DIY and Crafts',
    creator: { id: 35, username: 'upcycleQueen', fullName: 'Rebecca Foster' },
    tags: ['upcycling', 'furniture', 'DIY', 'repurpose', 'sustainable', 'home'],
    dateCreated: '2025-01-21T14:36:28Z',
    saves: 2187,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 27,
    title: 'Handmade Soap Tutorial',
    description:
      'Complete guide to making natural soap at home with essential oil combinations',
    image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824ce',
    comments: [
      {
        userId: 82,
        username: 'naturalLiving',
        content: 'The lavender recipe makes beautiful gifts!',
        timestamp: '2025-03-10T17:39:26Z',
      },
      {
        userId: 107,
        username: 'soapMaker',
        content: 'Great tips on working safely with lye!',
        timestamp: '2025-03-11T10:28:43Z',
      },
    ],
    likes: 3751,
    category: 'DIY and Crafts',
    creator: { id: 19, username: 'artisanCreator', fullName: 'Hannah White' },
    tags: [
      'soap making',
      'DIY',
      'natural',
      'essential oils',
      'handmade',
      'crafts',
    ],
    dateCreated: '2025-03-10T13:24:15Z',
    saves: 3142,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 28,
    title: 'Paper Crafts for Kids',
    description:
      'Simple and fun paper craft ideas to keep children creative and entertained',
    image: 'https://images.unsplash.com/photo-1551645506-b94cf797e5c1',
    comments: [
      {
        userId: 61,
        username: 'craftMom',
        content: 'These saved our rainy weekend! Kids loved them.',
        timestamp: '2025-01-14T19:36:25Z',
      },
    ],
    likes: 2876,
    category: 'DIY and Crafts',
    creator: { id: 41, username: 'kidsCrafts', fullName: 'Priya Sharma' },
    tags: ['paper crafts', 'kids activities', 'DIY', 'family', 'easy crafts'],
    dateCreated: '2025-01-14T15:28:37Z',
    saves: 2453,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 29,
    title: "Beginner's Embroidery Guide",
    description:
      'Learn basic embroidery stitches and create your first hoop art with pattern templates',
    image: 'https://images.unsplash.com/photo-1547240089-161ea0d1994e',
    comments: [
      {
        userId: 79,
        username: 'stitchLover',
        content: 'The french knot tutorial finally helped me master it!',
        timestamp: '2025-02-28T18:29:36Z',
      },
      {
        userId: 104,
        username: 'craftNewbie',
        content: 'My first project turned out so well!',
        timestamp: '2025-03-01T11:15:42Z',
      },
    ],
    likes: 2134,
    category: 'DIY and Crafts',
    creator: { id: 27, username: 'embroideryArtist', fullName: 'Chloe Adams' },
    tags: [
      'embroidery',
      'stitching',
      'craft',
      'needlework',
      'hoop art',
      'beginner',
    ],
    dateCreated: '2025-02-28T14:16:23Z',
    saves: 1876,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 30,
    title: 'DIY Candle Making',
    description:
      'Step-by-step instructions for creating scented soy candles with custom containers',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d',
    comments: [
      {
        userId: 66,
        username: 'candleLover',
        content: 'The coffee scent is amazing! Making more for gifts.',
        timestamp: '2025-03-20T19:27:38Z',
      },
    ],
    likes: 1845,
    category: 'DIY and Crafts',
    creator: { id: 44, username: 'candleMaker', fullName: 'Morgan Lewis' },
    tags: ['candles', 'DIY', 'soy wax', 'home fragrance', 'crafts', 'gifts'],
    dateCreated: '2025-03-20T15:19:32Z',
    saves: 1567,
    dimensions: { width: 1200, height: 1800 },
  },

  // Food category
  {
    id: 31,
    title: '30-Minute Weeknight Dinners',
    description:
      'Quick and nutritious meal recipes perfect for busy weeknights that the whole family will love',
    image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5',
    comments: [
      {
        userId: 72,
        username: 'busyParent',
        content: 'The one-pot pasta saved my Tuesday night!',
        timestamp: '2025-01-23T19:28:36Z',
      },
      {
        userId: 96,
        username: 'homeCook',
        content: 'These are now in our regular rotation. So tasty!',
        timestamp: '2025-01-24T10:15:47Z',
      },
    ],
    likes: 4327,
    category: 'Food',
    creator: { id: 20, username: 'quickMeals', fullName: 'Jamie Rivera' },
    tags: [
      'dinner',
      'quick meals',
      'recipes',
      'weeknight',
      'family',
      'healthy',
    ],
    dateCreated: '2025-01-23T15:26:38Z',
    saves: 3895,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 32,
    title: 'Sourdough Bread Guide',
    description:
      'Comprehensive guide to creating and maintaining a sourdough starter with foolproof bread recipe',
    image: 'https://images.unsplash.com/photo-1585478259715-4d3f5f616a3d',
    comments: [
      {
        userId: 51,
        username: 'breadBaker',
        content:
          'My first successful loaf! The troubleshooting tips were crucial.',
        timestamp: '2025-02-19T18:34:26Z',
      },
    ],
    likes: 3567,
    category: 'Food',
    creator: { id: 30, username: 'artisanBaker', fullName: 'Simon Carter' },
    tags: [
      'sourdough',
      'bread',
      'baking',
      'starter',
      'homemade',
      'fermentation',
    ],
    dateCreated: '2025-02-19T14:28:37Z',
    saves: 3124,
    dimensions: { width: 1200, height: 1600 },
  },
  {
    id: 33,
    title: 'Plant-Based Protein Sources',
    description:
      'Complete guide to getting adequate protein on a vegetarian or vegan diet with recipes',
    image: 'https://images.unsplash.com/photo-1615424422120-1336b3fd79e4',
    comments: [
      {
        userId: 86,
        username: 'veganFoodie',
        content: 'The lentil recipes have been game-changers!',
        timestamp: '2025-03-09T17:39:24Z',
      },
      {
        userId: 113,
        username: 'newVegan',
        content: 'Finally feeling confident about my protein intake!',
        timestamp: '2025-03-10T10:21:37Z',
      },
    ],
    likes: 2978,
    category: 'Food',
    creator: { id: 22, username: 'plantBasedChef', fullName: 'Leila Ahmed' },
    tags: [
      'vegan',
      'vegetarian',
      'protein',
      'plant-based',
      'nutrition',
      'recipes',
    ],
    dateCreated: '2025-03-09T13:25:42Z',
    saves: 2564,
    dimensions: { width: 1800, height: 1200 },
  },
  {
    id: 34,
    title: 'International Street Food Tour',
    description:
      'Authentic street food recipes from around the world that you can make at home',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    comments: [
      {
        userId: 67,
        username: 'foodieTraveler',
        content: 'The Thai street noodles taste just like Bangkok!',
        timestamp: '2025-01-09T19:34:27Z',
      },
    ],
    likes: 3214,
    category: 'Food',
    creator: { id: 40, username: 'globalChef', fullName: 'Raj Patel' },
    tags: [
      'street food',
      'international',
      'recipes',
      'authentic',
      'world cuisine',
    ],
    dateCreated: '2025-01-09T15:26:38Z',
    saves: 2876,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 35,
    title: 'Artisan Cocktail Recipes',
    description:
      'Craft cocktail recipes from top mixologists with techniques and presentation tips',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
    comments: [
      {
        userId: 89,
        username: 'homeBartender',
        content: 'The smoked old fashioned was a hit at my dinner party!',
        timestamp: '2025-02-15T18:27:36Z',
      },
      {
        userId: 114,
        username: 'cocktailEnthusiast',
        content: 'The infused syrups take these to another level.',
        timestamp: '2025-02-16T11:19:43Z',
      },
    ],
    likes: 2543,
    category: 'Food',
    creator: { id: 24, username: 'mixologist', fullName: 'Alex Thompson' },
    tags: [
      'cocktails',
      'drinks',
      'mixology',
      'entertaining',
      'spirits',
      'recipes',
    ],
    dateCreated: '2025-02-15T14:23:47Z',
    saves: 2187,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 36,
    title: 'Meal Prep Sunday Guide',
    description:
      "Complete system for prepping a week's worth of healthy meals in under 3 hours",
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
    comments: [
      {
        userId: 52,
        username: 'fitnessFoodie',
        content: 'Saved me so much time and money this month!',
        timestamp: '2025-03-17T19:28:36Z',
      },
    ],
    likes: 3876,
    category: 'Food',
    creator: { id: 31, username: 'mealPrepPro', fullName: 'Taylor Williams' },
    tags: [
      'meal prep',
      'healthy eating',
      'organization',
      'nutrition',
      'time-saving',
    ],
    dateCreated: '2025-03-17T15:21:34Z',
    saves: 3245,
    dimensions: { width: 1600, height: 1067 },
  },

  // Home Decor category
  {
    id: 37,
    title: 'Scandinavian Interior Inspiration',
    description:
      'Achieve the perfect balance of hygge and minimalism with these Scandinavian design ideas',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea',
    comments: [
      {
        userId: 75,
        username: 'nordicStyle',
        content: 'Love the light wood and white combinations!',
        timestamp: '2025-01-31T19:34:27Z',
      },
      {
        userId: 99,
        username: 'designLover',
        content: 'Transformed my living room following these principles.',
        timestamp: '2025-02-01T11:23:45Z',
      },
    ],
    likes: 3452,
    category: 'Home Decor',
    creator: {
      id: 18,
      username: 'interiorStylist',
      fullName: 'Emma Nordström',
    },
    tags: [
      'scandinavian',
      'nordic',
      'interior design',
      'minimalism',
      'hygge',
      'home decor',
    ],
    dateCreated: '2025-01-31T15:27:38Z',
    saves: 2987,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 38,
    title: 'Small Space Solutions',
    description:
      'Clever storage and multi-functional furniture ideas for apartments and tiny homes',
    image: 'https://images.unsplash.com/photo-1595526051245-4506e0005bd0',
    comments: [
      {
        userId: 46,
        username: 'cityDweller',
        content: 'The wall-mounted desk idea was perfect for my studio!',
        timestamp: '2025-02-25T18:34:27Z',
      },
    ],
    likes: 2876,
    category: 'Home Decor',
    creator: {
      id: 33,
      username: 'smallSpaceDesigner',
      fullName: 'Olivia Chen',
    },
    tags: [
      'small space',
      'storage',
      'apartment',
      'furniture',
      'organization',
      'tiny home',
    ],
    dateCreated: '2025-02-25T14:26:38Z',
    saves: 2453,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 39,
    title: 'Indoor Plant Styling Guide',
    description:
      'Turn your home into an urban jungle with creative ways to display and care for houseplants',
    image: 'https://images.unsplash.com/photo-1545165375-1b744b9ed444',
    comments: [
      {
        userId: 81,
        username: 'plantLover',
        content: 'My monstera looks amazing in the macramé hanger!',
        timestamp: '2025-03-01T19:28:36Z',
      },
      {
        userId: 106,
        username: 'urbanGardener',
        content: 'The plant shelf transformed my living room!',
        timestamp: '2025-03-02T11:15:43Z',
      },
    ],
    likes: 3127,
    category: 'Home Decor',
    creator: { id: 26, username: 'plantStylist', fullName: 'Jasmine Green' },
    tags: [
      'houseplants',
      'urban jungle',
      'plants',
      'home decor',
      'styling',
      'indoor garden',
    ],
    dateCreated: '2025-03-01T15:23:47Z',
    saves: 2786,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 40,
    title: 'Budget-Friendly Home Makeover',
    description:
      'Transform your living spaces with these affordable decorating tips and DIY projects',
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    comments: [
      {
        userId: 60,
        username: 'budgetDesigner',
        content: 'The repurposed thrift store finds look amazing!',
        timestamp: '2025-01-07T19:34:27Z',
      },
    ],
    likes: 2543,
    category: 'Home Decor',
    creator: { id: 38, username: 'frugalHomemaker', fullName: 'Ashley Cooper' },
    tags: [
      'budget decor',
      'affordable',
      'DIY',
      'home makeover',
      'thrifting',
      'upcycling',
    ],
    dateCreated: '2025-01-07T15:27:38Z',
    saves: 2187,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 41,
    title: 'Seasonal Home Decor Transitions',
    description:
      'Easy ways to update your home decor for each season without major renovations',
    image: 'https://images.unsplash.com/photo-1584752242711-19046a103e18',
    comments: [
      {
        userId: 88,
        username: 'seasonalStylist',
        content: 'The spring refresh ideas are so doable!',
        timestamp: '2025-02-20T18:34:27Z',
      },
      {
        userId: 115,
        username: 'homeDesignFan',
        content: 'Love the swappable textile suggestions!',
        timestamp: '2025-02-21T11:23:45Z',
      },
    ],
    likes: 1987,
    category: 'Home Decor',
    creator: {
      id: 21,
      username: 'interiorDecorator',
      fullName: 'Sophia Martinez',
    },
    tags: [
      'seasonal',
      'home decor',
      'quick updates',
      'decorating',
      'refresh',
      'styling',
    ],
    dateCreated: '2025-02-20T14:26:38Z',
    saves: 1765,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 42,
    title: 'Statement Wall Ideas',
    description:
      'Create a focal point in any room with these creative wall treatment and art display ideas',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
    comments: [
      {
        userId: 55,
        username: 'boldDesigner',
        content:
          'The geometric paint pattern completely transformed my bedroom!',
        timestamp: '2025-03-19T19:28:36Z',
      },
    ],
    likes: 2134,
    category: 'Home Decor',
    creator: { id: 35, username: 'wallDesignPro', fullName: 'Nathan Black' },
    tags: [
      'accent wall',
      'wall decor',
      'interior design',
      'paint',
      'wallpaper',
      'gallery wall',
    ],
    dateCreated: '2025-03-19T15:23:47Z',
    saves: 1876,
    dimensions: { width: 1200, height: 1800 },
  },

  // Men's Fashion category
  {
    id: 43,
    title: "Essential Men's Capsule Wardrobe",
    description:
      'Build a versatile, minimal wardrobe with these timeless pieces that mix and match perfectly',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
    comments: [
      {
        userId: 70,
        username: 'dappergent',
        content: 'Finally simplified my closet and look better than ever!',
        timestamp: '2025-01-13T19:34:27Z',
      },
      {
        userId: 95,
        username: 'minimalStyle',
        content: 'The quality over quantity approach changed my fashion game.',
        timestamp: '2025-01-14T11:23:45Z',
      },
    ],
    likes: 2876,
    category: "Men's Fashion",
    creator: { id: 17, username: 'mensStylist', fullName: 'Marcus Johnson' },
    tags: [
      "men's fashion",
      'capsule wardrobe',
      'minimalism',
      'style',
      'essentials',
      'timeless',
    ],
    dateCreated: '2025-01-13T15:27:38Z',
    saves: 2453,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 44,
    title: 'Business Casual Done Right',
    description:
      'Modern interpretation of business casual attire for the contemporary professional man',
    image: 'https://images.unsplash.com/photo-1520975916090-3489c9a1e1e1',
    comments: [
      {
        userId: 50,
        username: 'corpProfessional',
        content: 'Great tips for my new office job!',
        timestamp: '2025-02-22T18:34:27Z',
      },
    ],
    likes: 2345,
    category: "Men's Fashion",
    creator: {
      id: 32,
      username: 'professionalStyle',
      fullName: 'Victor Torres',
    },
    tags: [
      'business casual',
      "men's fashion",
      'office attire',
      'professional',
      'work style',
    ],
    dateCreated: '2025-02-22T14:26:38Z',
    saves: 1987,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 45,
    title: "Men's Accessory Guide",
    description:
      'Elevate any outfit with the right watches, ties, bags, and other essential accessories',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
    comments: [
      {
        userId: 80,
        username: 'watchCollector',
        content: 'Finally understand how to match leather tones!',
        timestamp: '2025-03-04T19:28:36Z',
      },
      {
        userId: 105,
        username: 'fashionForward',
        content: 'The minimalist watch recommendations are perfect.',
        timestamp: '2025-03-05T11:15:43Z',
      },
    ],
    likes: 1876,
    category: "Men's Fashion",
    creator: { id: 25, username: 'accessoryExpert', fullName: 'James Wilson' },
    tags: [
      "men's accessories",
      'watches',
      'ties',
      'fashion',
      'style',
      'details',
    ],
    dateCreated: '2025-03-04T15:23:47Z',
    saves: 1543,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 46,
    title: "Sustainable Men's Fashion",
    description:
      'Ethical and eco-friendly brands and practices for the environmentally conscious man',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d',
    comments: [
      {
        userId: 65,
        username: 'ecoFashion',
        content: 'The hemp clothing brands are amazing quality!',
        timestamp: '2025-01-08T19:34:27Z',
      },
    ],
    likes: 1543,
    category: "Men's Fashion",
    creator: { id: 39, username: 'sustainableStyle', fullName: 'Oliver Green' },
    tags: [
      'sustainable',
      'eco-friendly',
      'ethical fashion',
      "men's clothing",
      'conscious consumer',
    ],
    dateCreated: '2025-01-08T15:27:38Z',
    saves: 1298,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 47,
    title: 'Sneaker Collection Essentials',
    description:
      'Must-have sneakers for every style and occasion from classic to contemporary',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    comments: [
      {
        userId: 93,
        username: 'sneakerhead',
        content: 'Finally copped those white leather minimalists!',
        timestamp: '2025-02-16T18:34:27Z',
      },
      {
        userId: 118,
        username: 'urbanStyle',
        content: 'The versatile options guide is so practical.',
        timestamp: '2025-02-17T11:23:45Z',
      },
    ],
    likes: 2187,
    category: "Men's Fashion",
    creator: { id: 23, username: 'sneakerExpert', fullName: 'Kevin Park' },
    tags: [
      'sneakers',
      'shoes',
      "men's fashion",
      'footwear',
      'street style',
      'collection',
    ],
    dateCreated: '2025-02-16T14:26:38Z',
    saves: 1876,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 48,
    title: "Men's Grooming Routine",
    description:
      'Essential skincare, haircare, and grooming practices for the modern man',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e',
    comments: [
      {
        userId: 59,
        username: 'groomedGent',
        content: 'The morning routine has completely cleared my skin!',
        timestamp: '2025-03-21T19:28:36Z',
      },
    ],
    likes: 1765,
    category: "Men's Fashion",
    creator: { id: 36, username: 'mensGrooming', fullName: 'Ryan Smith' },
    tags: [
      'grooming',
      'skincare',
      "men's fashion",
      'self-care',
      'haircare',
      'routine',
    ],
    dateCreated: '2025-03-21T15:23:47Z',
    saves: 1432,
    dimensions: { width: 1200, height: 1800 },
  },

  // Quotes category
  {
    id: 49,
    title: 'Motivational Quotes for Entrepreneurs',
    description:
      'Inspiring words from successful business leaders to fuel your entrepreneurial journey',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    comments: [
      {
        userId: 77,
        username: 'startupFounder',
        content: 'The Steve Jobs quote is my daily mantra now!',
        timestamp: '2025-01-24T19:34:27Z',
      },
      {
        userId: 102,
        username: 'businessMinded',
        content: 'Printing #5 for my office wall.',
        timestamp: '2025-01-25T11:23:45Z',
      },
    ],
    likes: 4123,
    category: 'Quotes',
    creator: { id: 16, username: 'inspirationDaily', fullName: 'Robert Chen' },
    tags: [
      'motivational quotes',
      'entrepreneurs',
      'business',
      'inspiration',
      'success',
    ],
    dateCreated: '2025-01-24T15:27:38Z',
    saves: 3567,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 50,
    title: 'Self-Love Affirmations',
    description:
      'Daily affirmations to promote self-acceptance, confidence, and positive mindset',
    image: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71',
    comments: [
      {
        userId: 47,
        username: 'mindfulnessJourney',
        content: 'Reading these each morning has changed my outlook!',
        timestamp: '2025-02-24T18:34:27Z',
      },
    ],
    likes: 3876,
    category: 'Quotes',
    creator: { id: 29, username: 'wellnessCoach', fullName: 'Amara Nelson' },
    tags: [
      'affirmations',
      'self-love',
      'positivity',
      'mindfulness',
      'mental health',
      'quotes',
    ],
    dateCreated: '2025-02-24T14:26:38Z',
    saves: 3245,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 51,
    title: 'Literary Quotes for Book Lovers',
    description:
      'Beautiful passages from classic and contemporary literature that capture the magic of books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    comments: [
      {
        userId: 85,
        username: 'bookworm',
        content: 'The Jane Austen quote speaks to my soul!',
        timestamp: '2025-03-03T19:28:36Z',
      },
      {
        userId: 110,
        username: 'literaryFan',
        content: 'Found my next tattoo inspiration!',
        timestamp: '2025-03-04T11:15:43Z',
      },
    ],
    likes: 2765,
    category: 'Quotes',
    creator: {
      id: 27,
      username: 'literatureTeacher',
      fullName: 'William Hayes',
    },
    tags: [
      'literary quotes',
      'books',
      'reading',
      'literature',
      'authors',
      'inspiration',
    ],
    dateCreated: '2025-03-03T15:23:47Z',
    saves: 2341,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 52,
    title: 'Minimalist Life Philosophy',
    description:
      'Thoughtful quotes about simplicity, intentional living, and finding meaning with less',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    comments: [
      {
        userId: 68,
        username: 'minimalLiving',
        content: 'These remind me why I chose this lifestyle.',
        timestamp: '2025-01-06T19:34:27Z',
      },
    ],
    likes: 1987,
    category: 'Quotes',
    creator: { id: 37, username: 'simpleLiving', fullName: 'Ethan Miller' },
    tags: [
      'minimalism',
      'simple living',
      'quotes',
      'philosophy',
      'intentional',
      'mindful',
    ],
    dateCreated: '2025-01-06T15:27:38Z',
    saves: 1765,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 53,
    title: 'Quotes for Tough Times',
    description:
      'Words of wisdom and encouragement to help you through challenges and difficult periods',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f',
    comments: [
      {
        userId: 90,
        username: 'resilientSpirit',
        content: 'Number 7 got me through my darkest days.',
        timestamp: '2025-02-11T18:34:27Z',
      },
      {
        userId: 111,
        username: 'hopeSeeker',
        content: 'Saving these for when I need strength.',
        timestamp: '2025-02-12T11:23:45Z',
      },
    ],
    likes: 3214,
    category: 'Quotes',
    creator: {
      id: 22,
      username: 'inspirationFinder',
      fullName: 'Gabriela Lopez',
    },
    tags: [
      'resilience',
      'tough times',
      'encouragement',
      'strength',
      'quotes',
      'hope',
    ],
    dateCreated: '2025-02-11T14:26:38Z',
    saves: 2876,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 54,
    title: 'Creative Inspiration Quotes',
    description:
      'Words from artists, writers, and innovators to spark creativity and overcome creative blocks',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
    comments: [
      {
        userId: 56,
        username: 'artisticSoul',
        content: 'The Picasso quote changed my perspective completely!',
        timestamp: '2025-03-16T19:28:36Z',
      },
    ],
    likes: 2345,
    category: 'Quotes',
    creator: { id: 34, username: 'creativeCoach', fullName: 'Isabella Wright' },
    tags: [
      'creativity',
      'artistic',
      'inspiration',
      'quotes',
      'innovation',
      'creative process',
    ],
    dateCreated: '2025-03-16T15:23:47Z',
    saves: 1987,
    dimensions: { width: 1600, height: 1067 },
  },

  // Travel category
  {
    id: 55,
    title: 'Hidden Gems of Portugal',
    description:
      'Off-the-beaten-path destinations in Portugal that most tourists miss but locals love',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b',
    comments: [
      {
        userId: 73,
        username: 'worldTraveler',
        content: 'The coastal village recommendation was magical!',
        timestamp: '2025-01-29T19:34:27Z',
      },
      {
        userId: 97,
        username: 'europeExplorer',
        content:
          'Heading to Portugal next month and adding these all to my itinerary!',
        timestamp: '2025-01-30T11:23:45Z',
      },
    ],
    likes: 3567,
    category: 'Travel',
    creator: { id: 15, username: 'travelWriter', fullName: 'Miguel Santos' },
    tags: [
      'portugal',
      'travel',
      'hidden gems',
      'europe',
      'off the beaten path',
      'destinations',
    ],
    dateCreated: '2025-01-29T15:27:38Z',
    saves: 3124,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 56,
    title: 'Budget Travel Hacks',
    description:
      'Smart strategies to travel more for less with practical money-saving tips for every stage',
    image: 'https://images.unsplash.com/photo-1503221043305-f7498f8b7888',
    comments: [
      {
        userId: 44,
        username: 'backpacker',
        content: 'The flight booking strategy saved me $300 last trip!',
        timestamp: '2025-02-26T18:34:27Z',
      },
    ],
    likes: 4231,
    category: 'Travel',
    creator: { id: 28, username: 'budgetTraveler', fullName: 'Alex Kim' },
    tags: [
      'budget travel',
      'travel hacks',
      'affordable',
      'backpacking',
      'money saving',
      'tips',
    ],
    dateCreated: '2025-02-26T14:26:38Z',
    saves: 3876,
    dimensions: { width: 1200, height: 1800 },
  },
  {
    id: 57,
    title: 'Solo Female Travel Safety',
    description:
      'Essential safety tips and destination recommendations for women traveling alone',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080',
    comments: [
      {
        userId: 79,
        username: 'soloAdventurer',
        content:
          'Used these tips throughout Southeast Asia and felt so prepared!',
        timestamp: '2025-03-06T19:28:36Z',
      },
      {
        userId: 104,
        username: 'worldExplorer',
        content: 'The accommodation safety checklist is gold.',
        timestamp: '2025-03-07T11:15:43Z',
      },
    ],
    likes: 3127,
    category: 'Travel',
    creator: { id: 20, username: 'femaleNomad', fullName: 'Sarah Thompson' },
    tags: [
      'solo travel',
      'female traveler',
      'safety',
      'women',
      'travel tips',
      'destinations',
    ],
    dateCreated: '2025-03-06T15:23:47Z',
    saves: 2765,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 58,
    title: 'Japan Travel Guide',
    description:
      'Comprehensive guide to experiencing the best of Japan from Tokyo to rural villages',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d',
    comments: [
      {
        userId: 61,
        username: 'japanLover',
        content: 'Your onsen recommendations were perfect!',
        timestamp: '2025-01-05T19:34:27Z',
      },
    ],
    likes: 3876,
    category: 'Travel',
    creator: { id: 40, username: 'tokyoExpert', fullName: 'Ken Tanaka' },
    tags: ['japan', 'tokyo', 'kyoto', 'travel guide', 'asia', 'culture'],
    dateCreated: '2025-01-05T15:27:38Z',
    saves: 3245,
    dimensions: { width: 1600, height: 1067 },
  },
  {
    id: 59,
    title: 'Road Trip Essentials',
    description:
      'Everything you need to pack and prepare for the perfect highway adventure',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    comments: [
      {
        userId: 91,
        username: 'roadTripper',
        content: 'The car organization tips transformed our family trip!',
        timestamp: '2025-02-13T18:34:27Z',
      },
      {
        userId: 112,
        username: 'adventureSeeker',
        content: 'The offline maps recommendation saved us in remote areas.',
        timestamp: '2025-02-14T11:23:45Z',
      },
    ],
    likes: 2876,
    category: 'Travel',
    creator: {
      id: 19,
      username: 'highwayAdventurer',
      fullName: 'Chris Johnson',
    },
    tags: ['road trip', 'travel', 'packing', 'car', 'adventure', 'essentials'],
    dateCreated: '2025-02-13T14:26:38Z',
    saves: 2453,
    dimensions: { width: 1800, height: 1200 },
  },
  {
    id: 60,
    title: "World's Most Breathtaking Hikes",
    description:
      'Spectacular hiking trails around the globe with difficulty levels and best seasons to visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
    comments: [
      {
        userId: 57,
        username: 'hikerLife',
        content:
          'Just completed the Torres del Paine trek - your guide was spot on!',
        timestamp: '2025-03-14T19:28:36',
      },
    ],
    likes: 2876,
    category: 'Travel',
    creator: {
      id: 19,
      username: 'highwayAdventurer',
      fullName: 'Chris Johnson',
    },
    tags: ['road trip', 'travel', 'hikin', 'car', 'adventure', 'essentials'],
    dateCreated: '2025-02-13T14:26:38Z',
    saves: 2453,
    dimensions: { width: 1800, height: 1200 },
  },
];

// export const categories = [
//   {
//     id: 1,
//     name: 'Animals',
//     image:
//       'https://i.pinimg.com/474x/cd/a2/be/cda2be611e4466e5e6182b627b18f851.jpg',
//   },
//   {
//     id: 2,
//     name: 'Art',
//     image:
//       'https://i.pinimg.com/236x/05/a6/98/05a698e8295457728ff5b0e5472d3f28.jpg',
//   },
//   {
//     id: 3,
//     name: 'Beauty',
//     image:
//       'https://i.pinimg.com/474x/3e/75/69/3e7569d750a771d5c5ed6ebd1c25aa19.jpg',
//   },
//   {
//     id: 4,
//     name: 'Design',
//     image:
//       'https://i.pinimg.com/474x/5d/92/e9/5d92e99a415012c93e65e529742a902c.jpg',
//   },
//   {
//     id: 5,
//     name: 'DIY and Crafts',
//     image:
//       'https://i.pinimg.com/474x/d4/3b/98/d43b985a3372a50816b6c243f1401358.jpg',
//   },
//   {
//     id: 6,
//     name: 'Food',
//     image:
//       'https://i.pinimg.com/236x/72/d9/af/72d9af964d384fc2a16fd087c1062a7c.jpg',
//   },
//   {
//     id: 7,
//     name: 'Home Decor',
//     image:
//       'https://i.pinimg.com/474x/ae/23/4d/ae234ddf0826afc435e6c1388d1cc3b8.jpg',
//   },
//   {
//     id: 8,
//     name: 'Fashion',
//     image:
//       'https://i.pinimg.com/474x/b8/ac/51/b8ac51e8e5d9de70114f431574907072.jpg',
//   },
//   {
//     id: 9,
//     name: 'Quotes',
//     image:
//       'https://i.pinimg.com/236x/d0/41/c4/d041c4558e68b0616e56cd5ed0d2794d.jpg',
//   },
//   {
//     id: 10,
//     name: 'Travel',
//     image:
//       'https://i.pinimg.com/474x/c2/ae/fb/c2aefbed78698218736102f618f7dd7d.jpg',
//   },
//   {
//     id: 11,
//     name: 'Tattos',
//     image:
//       'https://i.pinimg.com/474x/8d/fd/06/8dfd06c0d6d7e108ff6ecf939c0ee1b5.jpg',
//   },
//   {
//     id: 12,
//     name: 'Weddings',
//     image:
//       'https://i.pinimg.com/474x/a0/e3/8c/a0e38ce2caa7b7d311a02068bc8b9752.jpg',
//   },
//   {
//     id: 13,
//     name: 'Women`s Fashion',
//     image:
//       'https://i.pinimg.com/236x/bd/cd/8f/bdcd8fe1577ff288973074735f36bb05.jpg',
//   },
// ];

export const categories = [
  {
    id: 1,
    name: 'Art',
    image:
      'https://images.unsplash.com/photo-1577084381380-3b9ea4153664?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    id: 3,
    name: 'Travel',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: 6,
    name: 'DIY and Crafts',
    image:
      'https://images.unsplash.com/photo-1592199279376-d48388291e22?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Fitness',
    image:
      'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Home Decor',
    image:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Photography',
    image:
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
  },
  {
    id: 10,
    name: 'Nature',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
];
