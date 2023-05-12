import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Button } from './component/button.component';
import { EntryDataComponent } from './component/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Button, EntryDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
