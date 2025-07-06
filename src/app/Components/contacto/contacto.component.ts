import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(private http: HttpClient) {}

  formulario = {
    nombre: '',
    empresa: '',
    email: '',
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
        const url = 'https://ae87wjne5a.execute-api.us-east-1.amazonaws.com/prod/clientes'; // URL de invocación del API Gateway
        const headers = { 'Content-Type': 'application/json' };
        
        console.log(this.formulario);

        this.http.post(url, this.formulario, { headers }).subscribe({      
          next: (response) => {
            alert('¡Gracias por contactarnos! Te responderemos pronto.');
            this.cerrarFormulario();
          },
          error: (error) => {
            alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
            console.error(error);
          }
        });
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  validarFormulario(): boolean {
    return this.formulario.nombre.trim() !== '' &&
           this.formulario.empresa.trim() !== '' &&
           this.formulario.email.trim() !== '' &&
           this.formulario.mensaje.trim() !== '';
  }

  limpiarFormulario() {
    this.formulario = {
      nombre: '',
      empresa: '',
      email: '',
      mensaje: ''
    };
  }
}
