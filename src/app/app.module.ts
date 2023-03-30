import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscosComponent } from './discos/discos.component';
import { AlbumComponent } from './album/album.component';
import { NewAlbumComponent } from './new-album/new-album.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscosComponent,
    AlbumComponent,
    NewAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
