import lumpiaIMG from '../assets/lumpia.jpg';
import crispypataImg from '../assets/crispy-pata.jpg';
import chopsueyImg from '../assets/chopsuey.jpg';
import freshlumpiaubodImg from '../assets/fresh-lumpia-ubod.jpg';
import karekareImg from '../assets/kare-kare.jpg';
import halohaloImg from '../assets/halo-halo.jpg';
import lecheflanImg from '../assets/lechr-flan.jpg';
import pjuiceImg from '../assets/pjuice.jpg';
import icedteaImg from '../assets/iced-tea.jpg';

export const menuData = [
  {
    category: 'Appetizers',
    items: [
      {
        id: 'fresh-lumpia-ubod',
        name: 'Fresh Lumpia Ubod',
        description: 'Crispy spring rolls filled with fresh vegetables and a sweet and sour sauce.',
        price: '₱90',
        image: freshlumpiaubodImg
      },
      {
        id: 'lumpia',
        name: 'Lumpia',
        description: 'Crispy spring rolls filled with savory pork, carrots, and garlic chili sauce.',
        price: '₱180',
        image: lumpiaIMG
      }
    ]
  },
  {
    category: 'Main Courses',
    items: [
      {
        id: 'crispypata',
        name: 'Crispy Pata',
        description: 'Crispy pork knuckle served with a side of vinegar and garlic sauce.',
        price: '₱850',
        image: crispypataImg
      },
      {
        id: 'chopsuey',
        name: 'Chopsuey',
        description: 'A savory stir-fried dish with vegetables and meat in a rich sauce.',
        price: '₱280',
        image: chopsueyImg
      }
    ]
  },
  {
    category: 'Desserts',
    items: [
      {
        id: 'halo-halo',
        name: 'Halo-Halo',
        description: 'A refreshing Filipino dessert with various ingredients in a sweet syrup.',
        price: '₱70',
        image: halohaloImg
      },
      {
        id: 'leche-flan',
        name: 'Leche Flan',
        description: 'Creamy caramel custard with a smooth and rich texture.',
        price: '₱180',
        image: lecheflanImg
      }
    ]
  },
  {
    category: 'Drinks',
    items: [
      {
        id: 'icedtea',
        name: 'Iced Tea',
        description: 'Refreshing iced tea with a hint of lemon and mint.',
        price: '₱80',
        image: icedteaImg
      },
      {
        id: 'pineapple-juice',
        name: 'Pineapple Juice',
        description: 'Freshly squeezed pineapple juice with a tropical twist.',
        price: '₱80',
        image: pjuiceImg
      }
    ]
  }
];