import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IProduct {
  _id: string;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
}

export const products = [
  {
    _id: '456148dsa',
    title: 'Product_11',
    img: 'assets/img/1.png',
    price: 221,
    author: 'Vlad',
    isFavorite: false,
  },
  {
    _id: '456148saa4dsa',
    title: 'Product_21',
    img: 'assets/img/2.jpg',
    price: 2241,
    author: 'Ihor',
    isFavorite: true,
  },
  {
    _id: '4564564148dsa',
    title: 'Product_31',
    img: 'assets/img/3.jpg',
    price: 22441,
    author: 'Maksim',
    isFavorite: true,
  },
];

export const products$: Observable<IProduct[]> = of(products).pipe(delay(3000));
