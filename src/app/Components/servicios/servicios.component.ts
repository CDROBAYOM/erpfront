import { Component, ViewChild } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  @ViewChild('contactoComponent') contactoComponent!: ContactoComponent;

  // Método para mostrar el formulario de contacto
  mostrarFormularioContacto() {
    if (this.contactoComponent) {
      this.contactoComponent.mostrarFormulario();
    }
  }
}
