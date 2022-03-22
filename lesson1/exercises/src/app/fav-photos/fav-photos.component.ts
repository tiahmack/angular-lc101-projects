import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://th.bing.com/th/id/R.0cf3fdf0875cbf58dbdbb1a6d52846f8?rik=syTIfm6I4s5E7A&riu=http%3a%2f%2fwikiclipart.com%2fwp-content%2fuploads%2f2016%2f11%2fHousehold-chores-pictures-clipart.jpg&ehk=ttVQ0JqoBzNZyltpi9Bv7YXW0n4MP9uD3qWeXLmFpGI%3d&risl=&pid=ImgRaw&r=0';
  image2 = 'https://th.bing.com/th/id/R.bdd4861ec670d9cf566a9d2507ebebc3?rik=XbtXTwD6mbyXsw&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fpc7%2fKGB%2fpc7KGB9zi.jpg&ehk=9UGx5wtlblEyf6E2LXcKY4Wg%2fNs1bYail1xRX3Vq8b8%3d&risl=&pid=ImgRaw&r=0';
  image3 = 'https://th.bing.com/th/id/R.d4fb17ee207b520a54bb72747b3f87c0?rik=BuVENI1nBz5jjg&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f5iR%2fXRb%2f5iRXRbX4T.jpg&ehk=YrGT2wiuCuC3SaKlJyCTvpPSAia3NnLMXDLNA3qhxcQ%3d&risl=&pid=ImgRaw&r=0';

  constructor() { }

  ngOnInit() {
  }

}