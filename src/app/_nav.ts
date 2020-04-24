import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Search Restaurants',
    url: '/search-restaurants',
    icon: 'icon-magnifying-glass',
  },
  {
    name: 'Restaurant Info',
    url: '/restaurant-info',
    icon: 'icon-task',
  },
  {
    name: 'Left Over food',
    url: '/left-over-food',
    icon: 'icon-bell',
    badge: {
      variant: 'info',
      text: 'NEW-Covid'
    }
  },
  {
    name: 'My Favorite',
    url: '/fav',
    icon: 'icon-task',
  },
];
