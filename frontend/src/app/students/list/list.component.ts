import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Student {
  id: number
  firstName: string
  lastName: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  public students!: Array<Student>

  constructor(private readonly _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get<Array<Student>>('http://localhost:3000/students').subscribe({
      next: (students: Array<Student>) => {
        this.students = students;
      }
    })
  }
}
