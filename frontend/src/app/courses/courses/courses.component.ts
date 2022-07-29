import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
    {
      _id: uuid(),
      name: 'Curso de Angular 2+',
      category: 'frontend',
    },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
