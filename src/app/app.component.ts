import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto-almacen';

  public constructor(private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.initRouter();
  }

  private initRouter(): void {


    this.router.navigate(['login' ]);
  }
}
