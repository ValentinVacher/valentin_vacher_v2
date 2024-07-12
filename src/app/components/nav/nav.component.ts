import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FaIconComponent,
    NgbCollapse,
    NgIf
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  protected readonly faGitHub = faGithub;
  protected readonly faBars = faBars;
  protected isCollapsed = true;
  protected navDisplay = true;

  constructor(private breakpointObserver$: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver$.observe('(max-width: 991px)').subscribe(result => {
      this.navDisplay = !result.matches
    });

    this.breakpointObserver$.observe('(min-width: 991px)').subscribe(() => {
      this.isCollapsed = true
    });
  }
}
