import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public irLogin() {
    this.router.navigate(['login']);
  }

}
