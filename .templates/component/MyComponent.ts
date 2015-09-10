///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'my-component',
  viewBindings: []
})
@View({
  templateUrl: 'components/my-component/my-component.html',
  styleUrls: ['components/my-component/my-component.css'],
  directives: [CORE_DIRECTIVES]
})
export class MyComponent {
  name: string;
  
  constructor(){
    this.name = 'Alice';
  }
}