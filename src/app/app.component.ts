import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {FwBackgroundComponent} from "./components/fw-background/fw-background.component";
import {TitleComponent} from "./components/title/title.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FwBackgroundComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valentin_vacher_v2';
}
