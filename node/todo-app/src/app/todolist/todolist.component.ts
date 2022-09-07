import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TodoDto } from '../todo.dto';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {

  constructor(private todoDto: TodoDto) {
  }

  ngOnInit() {
  }

  /* delete item */
  public deleteItem(index: number) {
    this.todoDto.delete(index);
  }

}
