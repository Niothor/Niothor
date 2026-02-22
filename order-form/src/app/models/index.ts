// Product model
export interface Product {
  id: number;
  name: string;
  image: string;
  dimensions: Dimension[];
  description: string;
}

// Dimension model for each product
export interface Dimension {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select';
  options?: string[]; // For select type
  required: boolean;
}

// Customer data model
export interface CustomerData {
  fullName: string;
  address: string;
  phone: string;
}

// Order model
export interface Order {
  customer: CustomerData;
  product: Product;
  dimensions: { [key: string]: any };
}
