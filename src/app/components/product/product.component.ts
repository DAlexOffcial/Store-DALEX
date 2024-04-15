import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { componentService } from 'src/app/services/components.service';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input() product?: Products 
  productDecoration!: Products
  
  private _componetService = inject(componentService)
  private router = inject(Router)

  ngOnInit(): void {

    if( !this.product ) throw new Error('the product was not found');
    
    this.productDecoration = this.product
  }

  onDetail(products: Products){
    this._componetService.updateSignalProductDetail(products)
    this.router.navigate(['/productDetail']);
  }

  onAddProduct() {
    if(!this.product) return;  
    this._componetService.updateSignalProductAdd(this.product)
  }

}
