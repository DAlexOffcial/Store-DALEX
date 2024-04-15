import { Component, OnInit, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private _productServices = inject(ProductsService)

  public products: Products[] = [] 

  ngOnInit(): void {
     this._productServices.getProducts().subscribe( products => {
      this.products = products
     })
  }

}
