import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { TodoDto } from '../todo.dto';

import { TodoinputComponent } from './todoinput.component';

class AppComponentMock {
  public todoArray = [];
}

describe('TodoinputComponent', () => {
  let component: TodoinputComponent;
  let fixture: ComponentFixture<TodoinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoinputComponent ],
      providers: [
        TodoDto,
        {provide: AppComponent, useClass: AppComponentMock},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoinputComponent);
    component = fixture.componentInstance;
    component.name = "theTodoInputComponent";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
