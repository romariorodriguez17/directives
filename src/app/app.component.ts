import { Component } from '@angular/core';

interface Student {
  nombre: string;
  estado: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
  mostrar = true
  //ngFor
  listStudents: Student[] = [
    { nombre: 'Romario Rodriguez', estado: 'promocionado' },
    { nombre: 'Luis Perez', estado: 'regular' },
    { nombre: 'ronaldo nazario', estado: 'retirado' },
    { nombre: 'Ana Gomez', estado: 'promocionado' },
    { nombre: 'Carlos Sanchez', estado: 'regular' },
    { nombre: 'Maria Lopez', estado: 'retirado' },
    { nombre: 'fernando pulido', estado: 'expulsado' }
  ]

  //NgIf

  // toogle(): void {
  //   this.mostrar = !this.mostrar
  // }
  toogle(): void {
    this.listStudents.length && this.listStudents.pop();
  }
}
