export interface ProductProps {
    products: {
      id: string;
      title: string;
      description: string;
    }[];
  }


  export interface Product {
    id: string;
    title: string;
    description: string;
  }
  
  export interface ProductData {
    products: Product[];
  }