import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://th.bing.com/th/id/R.bdd4861ec670d9cf566a9d2507ebebc3?rik=XbtXTwD6mbyXsw&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fpc7%2fKGB%2fpc7KGB9zi.jpg&ehk=9UGx5wtlblEyf6E2LXcKY4Wg%2fNs1bYail1xRX3Vq8b8%3d&risl=&pid=ImgRaw&r=0';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}