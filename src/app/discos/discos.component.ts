import { albumI } from './../interfaces/album.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.scss']
})
export class DiscosComponent {
  disco: albumI[] = [
    {
      title: 'Forever Changes',
      group: 'Love',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-albumes-historia-love-foreverchanges-161014-1623775312.jpg',
      genre: 'Rock',
    },
    {
      title: 'Ramones',
      group: 'Ramones',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-albumes-historia-ramones-1623775312.jpg',
      genre: 'Rock',
    },
    {
      title: 'King of the Delta Blues Singers',
      group: 'Robert Johnson',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-albumes-historia-robert-johnson-1623775315.jpg',
      genre: 'Rock',
    },
    {
      title: 'Horses',
      group: 'Patti Smith',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-albumes-historia-patti-s-ith-horses-1623775312.jpg',
      genre: 'Rock',
    },
    {
      title: 'Never Loved a Man the Way I love You',
      group: 'Aretha Franklin',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-albumes-historia-aretha-franklin-1623775314.jpg',
      genre: 'Soul',
    },
  ];

  addAlbum(album: albumI){
    this.disco.push(album);
  }

}
