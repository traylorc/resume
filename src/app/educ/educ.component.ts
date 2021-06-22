import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {

  edu1: string = 'Hamilton Highschool'

  constructor() { }

  ngOnInit(): void {
  }

}
