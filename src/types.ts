export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}

export interface Banner{
  id: number;
  title: string;
  link: string;
  image: string;
}

export interface Account{
  id: number;
  email: string;
  password: string;
}
