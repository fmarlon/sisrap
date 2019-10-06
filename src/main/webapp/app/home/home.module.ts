import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SisrapSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SisrapSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class SisrapHomeModule {}
