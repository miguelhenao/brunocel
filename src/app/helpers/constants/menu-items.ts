import { MenuItem } from '../../components/menu/interfaces/types';

export const MENU_OPTIONS: MenuItem[] = [
  { label: 'Facturas', icon: 'receipt', routerLink: 'facturas', hasInfo: false },
  { label: 'Clientes', icon: 'groups', routerLink: 'clientes', hasInfo: false },
  { label: 'Proveedores', icon: 'groups', routerLink: 'proveedores', hasInfo: false },
  { label: 'Productos', icon: 'inventory', routerLink: 'proveedores', hasInfo: false },
  { label: 'Deudores', icon: 'paid', routerLink: 'deudores', hasInfo: false },
  { label: 'Usuarios', icon: 'people', routerLink: 'usuarios', hasInfo: false }
];

export const MENU_ITEMS = [{ title: '', items: MENU_OPTIONS }];
