import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  protected readonly faGitHub = faGithub;
}
