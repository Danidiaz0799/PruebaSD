import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from './components/usuario-list/usuario-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuarioListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Usuario Management App';
}
