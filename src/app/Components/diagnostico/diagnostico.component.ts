import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnostico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diagnostico.component.html',
  styleUrl: './diagnostico.component.css'
})
export class DiagnosticoComponent {
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
    this.limpiarFormulario();
  }

  enviarFormulario() {
    if (this.validarFormulario()) {
      console.log('Formulario de diagnóstico enviado:', this.formulario);
      // Aquí puedes agregar la lógica para enviar el formulario
      alert('¡Gracias por completar el diagnóstico! Te contactaremos pronto con un análisis personalizado.');
      this.cerrarFormulario();
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  validarFormulario(): boolean {
    return this.formulario.nombreEmpresa.trim() !== '' &&
           this.formulario.nombreContacto.trim() !== '' &&
           this.formulario.cargoContacto.trim() !== '' &&
           this.formulario.correoContacto.trim() !== '' &&
           this.formulario.numEmpleados !== '' &&
           this.formulario.sector !== '' &&
           this.formulario.nivelAutomatizacion !== '' &&
           this.formulario.frecuencia !== '' &&
           this.formulario.problemas !== '';
  }

  limpiarFormulario() {
    this.formulario = {
      nombreEmpresa: '',
      nombreContacto: '',
      cargoContacto: '',
      correoContacto: '',
      numEmpleados: '',
      sector: '',
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
  }
}
