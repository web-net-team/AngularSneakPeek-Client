///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'navbar'
})
@View({
  templateUrl: 'components/navbar/navbar.html',
  styleUrls: ['components/navbar/navbar.css']
})
export class Navbar {
}