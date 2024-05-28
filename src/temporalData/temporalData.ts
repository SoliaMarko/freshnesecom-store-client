import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

export const temporalUsefulLinks = getTransformedArrayWithIDs([
  {
    header: 'Get In touch',
    items: getTransformedArrayWithIDs(['About us', 'Careers', 'Press Releases', 'Blog']),
    links: [{}]
  },
  {
    header: 'Connections',
    items: getTransformedArrayWithIDs(['Facebook', 'Twitter', 'Instagram', 'Youtube', 'LinkedIn']),
    links: [{}]
  },
  {
    header: 'Earnings',
    items: getTransformedArrayWithIDs(['Become an Affiliate', 'Advertise your product', 'Sell on Market']),
    links: [{}]
  },
  {
    header: 'Account',
    items: getTransformedArrayWithIDs(['Your account', 'Returns Centre', '100% purchase protection', 'Chat with us', 'Help']),
    links: [{}]
  }
]);

export const temporalProductTags = getTransformedArrayWithIDs([
  'Beans',
  'Carrots',
  'Apples',
  'Garlic',
  'Mushrooms',
  'Tomatoes',
  'Chilli peppers',
  'Broccoli',
  'Watermelons',
  'Oranges',
  'Bananas',
  'Grapes',
  'Cherries',
  'Meat',
  'Seo tag',
  'Fish',
  'Fresh food',
  'Lemons'
]);

export const temporalCategories = getTransformedArrayWithIDs([
  {
    header: 'Electronics',
    subcategories: getTransformedArrayWithIDs([
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
    ])
  },
  {
    header: 'Food',
    subcategories: getTransformedArrayWithIDs([
      'Pantry',
      'Grocery',
      'Fruits',
      'Vegetables',
      'Dairy',
      'Meat',
      'Frozen Foods',
      'Beverages',
      'Bakery',
      'Health & Wellness'
    ])
  },
  {
    header: 'Clothes',
    subcategories: getTransformedArrayWithIDs([
      'Shirts',
      'Sweaters',
      'Pants/Jeans',
      'Shorts',
      'Suits',
      'Jackets & Coats',
      'Dresses',
      'Skirts',
      'Accessories (hats, belts, socks etc.)'
    ])
  },
  {
    header: 'Sports and outdoors',
    subcategories: getTransformedArrayWithIDs([
      'Exercise & Fitness',
      'Team Sports',
      'Racket Sports',
      'Water Sports',
      'Winter Sports',
      'Climbing',
      'Cycling',
      'Camping & Hiking',
      'Fishing'
    ])
  },
  {
    header: 'Books',
    subcategories: getTransformedArrayWithIDs([
      'Fiction',
      'Nonfiction',
      "Children's Books",
      'Religion & Spirituality',
      'Arts & Photography',
      'Travel',
      'Calendars & Planners',
      'Coloring Books',
      'Comics & Graphic Novel'
    ])
  }
]);
