import {Component} from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {SobreMiComponent} from './components/sobre-mi/sobre-mi.component';
import {MisGustosComponent} from './components/mis-gustos/mis-gustos.component';
import {MisMetasComponent} from './components/mis-metas/mis-metas.component';
import {MomentosComponent} from './components/momentos/momentos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    InicioComponent,
    SobreMiComponent,
    MisGustosComponent,
    MisMetasComponent,
    MomentosComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'bibliografiaAngular';
}
