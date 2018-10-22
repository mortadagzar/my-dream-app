import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerlolComponent } from './serverlol/serverlol.component';
import { ThirdappComponent } from './thirdapp/thirdapp.component';
import { SecappComponent } from './secapp/secapp.component';

@NgModule({
  declarations: [
    SecappComponent,
    AppComponent,
    ServerComponent,
    ServerlolComponent,
    ThirdappComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
