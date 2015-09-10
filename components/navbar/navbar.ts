///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from 'angular2/angular2';

@Component({
  selector: 'navbar',
  viewBindings: []
})
@View({
  templateUrl: 'components/navbar/navbar.html',
  styleUrls: ['components/navbar/navbar.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class NavBar {

}