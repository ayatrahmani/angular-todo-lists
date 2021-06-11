import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WidgetsModule } from './widgets/widgets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderComponent, 
    FooterComponent,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
