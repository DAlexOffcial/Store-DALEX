import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { componentService } from 'src/app/services/components.service';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {

  @Input() product?: Products

  private router = inject(Router)
  private _componetService = inject(componentService)

  onDetail() {
    this.router.navigate(['/productDetail']);
  }

  onAmoutLess(product: Products | undefined) {
    if(!product) return;
    this._componetService.updateSignalProductLess(product)
  }

  onAmoutMore(product: Products | undefined) {
    if(!product) return;
    this._componetService.updateSignalProductMore(product)
  }

  onDeleteItem(product: Products | undefined){
    if(!product) return;
    this._componetService.updateSignalProductDelete(product)
  }

}
