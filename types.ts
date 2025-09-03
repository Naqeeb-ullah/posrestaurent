
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface OrderItem extends Product {
  quantity: number;
}

export interface Invoice {
  id: string;
  date: Date;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface Sale {
  date: string; // "YYYY-MM-DD"
  revenue: number;
  orders: number;
}
