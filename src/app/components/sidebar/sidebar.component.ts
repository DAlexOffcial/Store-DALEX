import { Component, effect, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { componentService } from 'src/app/services/components.service';

@Component({
  selector: 'Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  private _componetService = inject(componentService)

  Navbar?: boolean

  productsList?: Products[] = []

  total: number = 0

  bag: number = 0


  constructor() {
    effect(() => {
      this.Navbar = this._componetService._sidebarState()
      this.productsList = this._componetService._productList()
      this.total = this._componetService._totalPrice()
      this.bag = this._componetService._totalProducts()
    })
  }

  stateNavbar() {
    this._componetService.updateSignalSidebarState(!this._componetService._sidebarState());
  }

  cleanCard(){
    this._componetService.updateSignalProductCleanCard()
  }
  
}
