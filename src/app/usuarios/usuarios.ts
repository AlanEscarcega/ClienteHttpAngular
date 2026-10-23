import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements OnInit {
  // Inyecta el cliente HTTP configurado en app.config.ts
  private http = inject(HttpClient);

  usuarios = signal<Usuario[]>([]);
  cargando = signal(true);
  error = signal(false);

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando.set(true);
    this.error.set(false);

    // Peticion GET que devuelve un arreglo de usuarios
    this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (datos) => {
        this.usuarios.set(datos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(true);
        this.cargando.set(false);
      }
    });
  }
}