import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./modelling/home.component";
import { AboutComponent } from "./details/about.component";

import { AppRoutingModule } from "./app.routing";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [HomeComponent, AboutComponent, AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
