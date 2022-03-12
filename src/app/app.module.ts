import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
