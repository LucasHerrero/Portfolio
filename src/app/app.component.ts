import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Datos } from './datos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private appService: AppService) {}
  datos: Datos[] =[];



  ngOnInit() {
    this.appService.getJsonData().subscribe((data) => {
      this.datos = data;
      console.log(this.datos);
    });
  }
}
