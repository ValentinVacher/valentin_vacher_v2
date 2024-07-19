import {Component} from '@angular/core';
import {faUser, faCompass, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css'
})
export class BiographyComponent {
  protected readonly faUser = faUser;
  protected readonly faCompass = faCompass;
  protected readonly faPhone = faPhone;
  protected age = Math.abs(new Date(Date.now() - new Date(2001, 3, 13).getTime()).getUTCFullYear() - 1970);

}
