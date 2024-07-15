import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-fw-background',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './fw-background.component.html',
  styleUrl: './fw-background.component.css'
})
export class FwBackgroundComponent {

}
