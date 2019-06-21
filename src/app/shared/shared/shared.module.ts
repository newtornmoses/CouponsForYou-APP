import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './../../header/header.page';
import { FooterPage } from './../../footer/footer.page';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterPage, HeaderPage],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[FooterPage, HeaderPage]
})
export class SharedModule { }
