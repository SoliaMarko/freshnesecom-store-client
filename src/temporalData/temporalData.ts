import {v4 as uuid} from 'uuid';

export const temporalUsefulLinks = [
  {
    id: uuid(),
    header: 'Get In touch',
    items: [
      {id: uuid(), value: 'About us'},
      {id: uuid(), value: 'Careers'},
      {id: uuid(), value: 'Press Releases'},
      {id: uuid(), value: 'Blog'}
    ],
    links: [{}]
  },
  {
    id: uuid(),
    header: 'Connections',
    items: [
      {id: uuid(), value: 'Facebook'},
      {id: uuid(), value: 'Twitter'},
      {id: uuid(), value: 'Instagram'},
      {id: uuid(), value: 'Youtube'},
      {id: uuid(), value: 'LinkedIn'}
    ],
    links: [{}]
  },
  {
    id: uuid(),
    header: 'Earnings',
    items: [
      {id: uuid(), value: 'Become an Affiliate'},
      {id: uuid(), value: 'Advertise your product'},
      {id: uuid(), value: 'Sell on Market'}
    ],
    links: [{}]
  },
  {
    id: uuid(),
    header: 'Account',
    items: [
      {id: uuid(), value: 'Your account'},
      {id: uuid(), value: 'Returns Centre'},
      {id: uuid(), value: '100% purchase protection'},
      {id: uuid(), value: 'Chat with us'},
      {id: uuid(), value: 'Help'}
    ],
    links: [{}]
  }
];

export const temporalProductTags = [
  {id: uuid(), value: 'Beans'},
  {id: uuid(), value: 'Carrots'},
  {id: uuid(), value: 'Apples'},
  {id: uuid(), value: 'Garlic'},
  {id: uuid(), value: 'Mushrooms'},
  {id: uuid(), value: 'Tomatoes'},
  {id: uuid(), value: 'Chilli peppers'},
  {id: uuid(), value: 'Broccoli'},
  {id: uuid(), value: 'Watermelons'},
  {id: uuid(), value: 'Oranges'},
  {id: uuid(), value: 'Bananas'},
  {id: uuid(), value: 'Grapes'},
  {id: uuid(), value: 'Cherries'},
  {id: uuid(), value: 'Meat'},
  {id: uuid(), value: 'Seo tag'},
  {id: uuid(), value: 'Fish'},
  {id: uuid(), value: 'Fresh food'},
  {id: uuid(), value: 'Lemons'}
];

export const temporalCategories = [
  {
    id: uuid(),
    header: 'Electronics',
    subcategories: [
      'Laptops',
      'Tablets',
      'Smartphones',
      'Cameras',
      'Headphones',
      'Game Consoles',
      'Televisions',
      'Batteries',
      'Cables',
      'Accessories'
    ]
  },
  {
    id: uuid(),
    header: 'Food',
    subcategories: ['Pantry', 'Grocery', 'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Frozen Foods', 'Beverages', 'Bakery', 'Health & Wellness']
  },
  {
    id: uuid(),
    header: 'Clothes',
    subcategories: [
      'Shirts',
      'Sweaters',
      'Pants/Jeans',
      'Shorts',
      'Suits',
      'Jackets & Coats',
      'Dresses',
      'Skirts',
      'Accessories (hats, belts, socks etc.)'
    ]
  },
  {
    id: uuid(),
    header: 'Sports and outdoors',
    subcategories: [
      'Exercise & Fitness',
      'Team Sports',
      'Racket Sports',
      'Water Sports',
      'Winter Sports',
      'Climbing',
      'Cycling',
      'Camping & Hiking',
      'Fishing'
    ]
  },
  {
    id: uuid(),
    header: 'Books',
    subcategories: [
      'Fiction',
      'Nonfiction',
      "Children's Books",
      'Religion & Spirituality',
      'Arts & Photography',
      'Travel',
      'Calendars & Planners',
      'Coloring Books',
      'Comics & Graphic Novel'
    ]
  }
];
