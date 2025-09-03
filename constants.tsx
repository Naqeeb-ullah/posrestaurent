
import type { ReactNode } from 'react';
import type { Product, Sale } from './types';
import { HomeIcon, ShoppingCartIcon, TagIcon, DocumentTextIcon, Cog8ToothIcon } from './components/common/Icons';

export const TAX_RATE = 0.08; // 8%

export const NAV_ITEMS = [
  { name: 'Home', icon: HomeIcon, page: 'home' },
  { name: 'Orders', icon: ShoppingCartIcon, page: 'orders' },
  { name: 'Products', icon: TagIcon, page: 'products' },
  { name: 'Invoice', icon: DocumentTextIcon, page: 'invoice' },
  { name: 'Settings', icon: Cog8ToothIcon, page: 'settings' },
];

export const INITIAL_PRODUCTS: Product[] = [
  { id: 'prod1', name: 'Margherita Pizza', category: 'Pizza', price: 12.99, imageUrl: 'https://picsum.photos/id/1080/400/300' },
  { id: 'prod2', name: 'Classic Burger', category: 'Burgers', price: 9.99, imageUrl: 'https://picsum.photos/id/106