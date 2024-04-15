import { Component, effect, inject, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { componentService } from 'src/app/services/components.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  private _componentsService = inject(componentService)

  public productDetail?: Products 

  constructor() {
    effect(() =>{
       console.log( this._componentsService._productDetail());
       this.productDetail = this._componentsService._productDetail()
    })
  }

  addToCard(){
    if(this.productDetail)
    this._componentsService.updateSignalProductAdd(this.productDetail)
  }

}
