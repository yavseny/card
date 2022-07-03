import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
post = [
  {
    title: 'Neat Treet',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this neat tree today'
  },
  {
    title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: 'moutainlover',
    content: 'Here is a picture of a snowy moun tain'
  },
  {
    title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'bicking12222',
    content: 'I did some biking today'
  }
];
}
