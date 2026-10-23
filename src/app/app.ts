import { Component } from '@angular/core';
import { Usuarios } from './usuarios/usuarios';

@Component({
  selector: 'app-root',
  imports: [Usuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}