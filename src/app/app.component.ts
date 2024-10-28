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
  //ngFor
  listStudents: Student[] = [
    { nombre: 'Romario Rodriguez', estado: 'promocionado' },
    { nombre: 'Luis Perez', estado: 'regular' },
    { nombre: 'ronaldo nazario', estado: 'retirado' },
  ]
}
