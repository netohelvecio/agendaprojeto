import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ],

  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HeaderComponent,
    CardComponent
  ]
})
export class GeralModule { }
