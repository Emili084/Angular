import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { BlockComponent } from './block/block.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [AppComponent, BlockComponent, UserProfilComponent, DirectivesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
