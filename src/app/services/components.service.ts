import { Injectable, signal } from '@angular/core';
import { Products } from '../interfaces/products';

@Injectable({ providedIn: 'root' })
export class componentService {

    // navbar state 

    public _sidebarState = signal<boolean>(false);

    updateSignalSidebarState(state: boolean) {
        this._sidebarState.set(state)
    }

    // products array

    public _productList = signal<Products[] | undefined>(undefined)

    public _totalPrice = signal<number>(0)

    public _totalProducts = signal<number>(0)

    updateSignalProductAdd(selectProduct: Products) {

        this._productList.update(products => {

            if (!products) {
                return [{ ...selectProduct, amount: 1 }];
            }

            let found = false;

            products.forEach(product => {
                if (product.id === selectProduct.id) {
                    product.amount += 1;
                    found = true;
                }
            });

            if (!found) {
                selectProduct.amount = 1;
                products.push(selectProduct);
            }

            return products;
        });

        this.updateSignalTotalPrice(this._productList())
    }

    updateSignalProductLess(product: Products) {
        this._productList.update(products => {

            if (!products) return;

            products.forEach(products => {
                if (products.id === product.id && products.amount > 0) {
                    products.amount -= 1
                }
            });
            this.updateSignalTotalPrice(this._productList())
            return products;
        });
    }

    updateSignalProductMore(product: Products) {
        this._productList.update(products => {

            if (!products) return;

            products.forEach(products => {
                if (products.id === product.id) {
                    products.amount += 1
                }
            });
            return products;
        });
        this.updateSignalTotalPrice(this._productList())
    }

    updateSignalProductDelete(product: Products) {
        this._productList.update(products => {

            if (!products) return;

            const updateProducts = products.filter(p => p.id !== product.id)
            return updateProducts;
        });
        this.updateSignalTotalPrice(this._productList())
    }

    updateSignalProductCleanCard() {
        this._productList.set([])

        this.updateSignalTotalPrice(this._productList())
    }

    updateSignalTotalPrice(products: Products[] | undefined) {

        this._totalPrice.set(products!.reduce((total, product) => {
            return total + (product.price * product.amount);
        }, 0))
     

        this._totalProducts.set(products!.reduce((total, product) => {
            return total + product.amount;
        }, 0))
        
    }


    // detail product 

    public _productDetail = signal<Products | undefined>(undefined)

    updateSignalProductDetail(products: Products) {
        this._productDetail.set(products)
    }
}

