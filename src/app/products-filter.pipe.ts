import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';

@Pipe({
  name: 'productsFilter',
  pure: false,
})
export class ProductsFilterPipe implements PipeTransform {
  transform(
    products: IProduct[],
    searchTerm: string,
    onlyFavorites: boolean = false
  ): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = products.filter((products) => products.isFavorite);
    }
    if (!searchTerm) {
      return result;
    }
    return result.filter((product) =>
      `${product.title} ${product.price}`
        .toLocaleLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }
}
