import { albumI } from './../interfaces/album.interfaces';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss']
})
export class NewAlbumComponent {
  @Output() newAlbum = new EventEmitter();

  sendNewAlbum(album: albumI){
    console.log(album)
    this.newAlbum.emit(album);
  }
}
