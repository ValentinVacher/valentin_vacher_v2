import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  protected smaller = false;
  protected highter = false

  constructor(private breakpointObserver$: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver$.observe('(min-height: 720px)').subscribe(result => {
      this.smaller = !result.matches
      console.log("test")
    });

    this.breakpointObserver$.observe('(max-height: 850px)').subscribe(result => {
      this.highter = !result.matches
    });
  }
}
