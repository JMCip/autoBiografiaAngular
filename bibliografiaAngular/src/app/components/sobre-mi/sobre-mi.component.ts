import {Component} from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {
  toggleCard(event: Event): void {
    const tarjeta = (event.currentTarget as HTMLElement);
    tarjeta.classList.toggle('activa');
  }
}
