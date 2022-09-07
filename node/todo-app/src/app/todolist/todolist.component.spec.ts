import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { TodoDto } from '../todo.dto';

import { TodolistComponent } from './todolist.component';

class AppComponentMock {
  public todoArray = [];
}

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      providers: [
        TodoDto,
        {provide: AppComponent, useClass: AppComponentMock},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
