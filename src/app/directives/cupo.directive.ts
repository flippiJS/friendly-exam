import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCupo]'
})
export class CupoDirective implements OnInit {
  @Input() cupo: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    console.log(this.cupo);
    if(this.cupo > 20) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else if(this.cupo > 10 && this.cupo < 20){
      this.el.nativeElement.style.backgroundColor = 'green';

    }
  }

}
