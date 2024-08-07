import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BiographyComponent} from "../biography/biography.component";
import {CareerComponent} from "../career/career.component";

@Component({
  selector: 'app-fw-background',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BiographyComponent,
    CareerComponent
  ],
  templateUrl: './fw-background.component.html',
  styleUrl: './fw-background.component.css'
})
export class FwBackgroundComponent {

}
