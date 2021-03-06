import { BrowserModule } from '@angular/platform-browser';
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { NgxSignaturePadModule } from '@eve-sama/ngx-signature-pad';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentComponent } from './document/document.component';
import { MobileComponent } from './mobile/mobile.component';
import { IconComponent } from './mobile/icon.component';

@NgModule({
  declarations: [AppComponent, DocumentComponent, MobileComponent, IconComponent],
  imports: [BrowserModule, PlatformModule, AppRoutingModule, NgxSignaturePadModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
