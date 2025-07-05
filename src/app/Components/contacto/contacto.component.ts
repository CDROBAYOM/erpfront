import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  formulario = {
    nombre: '',
    empresa: '',
    correo: '',
    mensaje: ''
  };

  formularioVisible = false;

  mostrarFormulario() {
    this.formularioVisible = true;
  }

  cerrarFormulario() {
    this.formularioVisible = false;
    this.limpiarFormulario();
  }

  enviarFormulario() {
    if (this.validarFormulario()) {
      console.log('Formulario enviado:', this.formulario);
      // Aquí puedes agregar la lógica para enviar el formulario
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
      this.cerrarFormulario();
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  validarFormulario(): boolean {
    return this.formulario.nombre.trim() !== '' &&
           this.formulario.empresa.trim() !== '' &&
           this.formulario.correo.trim() !== '' &&
           this.formulario.mensaje.trim() !== '';
  }

  limpiarFormulario() {
    this.formulario = {
      nombre: '',
      empresa: '',
      correo: '',
      mensaje: ''
    };
  }
}
