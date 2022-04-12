export interface MenuItem {
  label: string;
  icon: string;
  routerLink: string;
  hasInfo: boolean;
  info?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
