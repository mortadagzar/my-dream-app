import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerlolComponent } from './serverlol/serverlol.component';
import { thirdappComponent } from './thirdapp/thirdapp.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerlolComponent,
    thirdapp,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
