import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  work1: string = 'Logistic Account Executive Trainee';
  work2: string = 'Logistic Coordinator';

  constructor() { }

  ngOnInit(): void {
  }

}
