import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [], // Usará solo los estilos globales
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule]
})
export class HomeComponent {
  formularioVisible = false;
  
  formulario = {
    // Información general
    nombreEmpresa: '',
    nombreContacto: '',
    cargoContacto: '',
    correoContacto: '',
    numEmpleados: '',
    sector: '',
    
    // Procesos
    procesos: {
      facturacion: false,
      conciliacion: false,
      inventario: false,
      reportes: false,
      crm: false,
      notificaciones: false,
      otros: false,
      otrosTexto: ''
    },
    nivelAutomatizacion: '',
    frecuencia: '',
    problemas: '',
    
    // Interés y oportunidades
    mejoras: {
      ahorrarTiempo: false,
      reducirErrores: false,
      trazabilidad: false,
      disminuirCostos: false,
      liberarTiempo: false
    },
    interes: '',
    contacto: ''
  };

  mostrarFormulario() {
    this.formularioVisible = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarFormulario() {
    this.formularioVisible = false;
    document.body.style.overflow = 'auto';
  }

  enviarFormulario() {
    console.log('Formulario enviado:', this.formulario);
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    this.cerrarFormulario();
  }
} 