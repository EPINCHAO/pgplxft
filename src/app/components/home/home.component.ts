import { Component } from '@angular/core';
import { BotonComponent } from '../boton/boton.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotonComponent, DashboardComponent,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
