import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './Components/home/product-list/product-list.component';
import { FilterComponent } from './Components/home/filter/filter.component';
import {provideHttpClient} from '@angular/common/http';
import { NameLenPipe } from './pipes/name-len-pipe';
import { DescriptionLenPipe } from './pipes/description-len-pipe';
import { ProductFilterPipePipe } from './pipes/product-filter-pipe-pipe';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    FilterComponent,
    NameLenPipe,
    DescriptionLenPipe,
    ProductFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
