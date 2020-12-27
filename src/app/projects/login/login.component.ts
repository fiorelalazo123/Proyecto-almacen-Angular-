import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public abrirRegistro() {
    this.router.navigate(['registro-cliente']);
  }

  public entrarMenuPr() {
    if (this.user === '1012141618' && this.password === '12345678') {
      this.router.navigate(['menu-principal']);
    }
  }
}
