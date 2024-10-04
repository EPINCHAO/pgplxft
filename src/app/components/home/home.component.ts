import { Component } from '@angular/core';
import { BotonComponent } from '../boton/boton.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotonComponent,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
