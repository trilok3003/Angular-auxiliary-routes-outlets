import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
<button [routerLink]="['/',{ outlets: { dialog: ['test'] } }]">Test</button>
<a [routerLink]="['/', {outlets: { dialog: 'test' } } ]">test</a>
<button (click)="changeRoute()">Test</button>
<button (click)="closeRoute()">close</button>


  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  constructor(public router: Router) {}
  changeRoute() {
    this.router.navigate(['', { outlets: { dialog: 'test' } }], {
      skipLocationChange: true,
    });
  }
  closeRoute() {
    this.router.navigate(['', { outlets: { dialog: null } }])
  }
}
