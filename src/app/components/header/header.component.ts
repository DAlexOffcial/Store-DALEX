import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { componentService } from 'src/app/services/components.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _componetService = inject(componentService)
  private router = inject(Router)

  get amout() {
    if(this._componetService._productList() !== undefined && this._componetService._productList() !== null) {

      return this._componetService._productList()!.reduce( (total, products) => total + products.amount , 0 )
    }
    return 0
  }

  stateNavbar(){
    this._componetService.updateSignalSidebarState(!this._componetService._sidebarState());
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
