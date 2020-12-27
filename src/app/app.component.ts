import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto-web-idat';

  public constructor(private readonly router: Router) {
  }

  public async ngOnInit() {
    this.initRouter();
  }

  private initRouter(): void {


    this.router.navigate(['login' ]);
  }
}
