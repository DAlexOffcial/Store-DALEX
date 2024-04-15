import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { WomanSectionComponent } from './components/woman-section/woman-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CardItemComponent,
    WomanSectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
