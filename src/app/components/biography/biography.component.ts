import {Component, OnInit} from '@angular/core';
import {faUser, faCompass, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {BiographyService} from "../../services/biography.service";

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css'
})
export class BiographyComponent implements OnInit{
  protected readonly faUser = faUser;
  protected readonly faCompass = faCompass;
  protected readonly faPhone = faPhone;
  protected age = Math.abs(new Date(Date.now() - new Date(2001, 3, 13).getTime()).getUTCFullYear() - 1970);

  constructor(private biographyService: BiographyService) {}

  ngOnInit() {
    console.log(this.biographyService.getBiography());
  }
}
