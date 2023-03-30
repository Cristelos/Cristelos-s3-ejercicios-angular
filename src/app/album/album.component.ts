import { albumI } from './../interfaces/album.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album!: albumI[]
}
