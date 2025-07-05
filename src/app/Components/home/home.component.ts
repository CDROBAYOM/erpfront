import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '../contacto/contacto.component';
import { DiagnosticoComponent } from '../diagnostico/diagnostico.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [], // Usará solo los estilos globales
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ContactoComponent, DiagnosticoComponent]
})
export class HomeComponent {
  @ViewChild('contactoComponent') contactoComponent!: ContactoComponent;
  @ViewChild('diagnosticoComponent') diagnosticoComponent!: DiagnosticoComponent;

  // Método para mostrar el formulario de contacto
  mostrarFormularioContacto() {
    if (this.contactoComponent) {
      this.contactoComponent.mostrarFormulario();
    }
  }

  // Método para mostrar el formulario de diagnóstico
  mostrarFormularioDiagnostico() {
    if (this.diagnosticoComponent) {
      this.diagnosticoComponent.mostrarFormulario();
    }
  }
} 