import { WebComponentsModule } from 'src/libs/web-components.module'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, WebComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
