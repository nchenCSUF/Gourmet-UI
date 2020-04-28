import { INavData } from '@coreui/angular';

export const navItemsRes: INavData[] = [
  {
    name: 'My Restaurant',
    url: '/restaurant-info',
    icon: 'icon-task',
  },
  {
    name: 'Add Left Over',
    url: '/add-left-over',
    icon: 'icon-bell',
    badge: {
      variant: 'info',
      text: 'NEW-Covid'
    }
  },
  {
    name: 'Reviews',
    url: '/reviews',
    icon: 'icon-task',
  },
];
