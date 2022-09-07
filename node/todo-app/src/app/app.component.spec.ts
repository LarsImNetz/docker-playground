import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ParameterHelper } from './parameter-helper/parameter-helper';
import { SubmitService } from './submit/submit.service';
import { TodoDto } from './todo.dto';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { TodolistComponent } from './todolist/todolist.component';

const parameterTodo = 'Dies ist ein Todo';
const parameterHelperMock = {
  getTodoParameterValue: () => Promise.resolve(parameterTodo),
} as ParameterHelper;

const submitServiceMock = {
  submit: (todos: TodoDto) => Promise.resolve("seems to be a legal submit")
} as SubmitService;

describe('AppComponent', () => {

  let appComponentSUT: AppComponent;

  let todoDtoMock = new TodoDto();

  beforeEach(() => {

    appComponentSUT = new AppComponent(
      parameterHelperMock,
      todoDtoMock,
      submitServiceMock
    );
  });

  it('should contain a value', fakeAsync(() => {
    appComponentSUT.ngOnInit();
    tick();

    // expect(appComponentSUT.todoArray[0]).toEqual(parameterTodo);
  }));

  // xit('should contain two values', fakeAsync(() => {
  //   appComponentSUT.ngOnInit();
  //   appComponentSUT.todoSubmit('test');
  //   tick();
  //
  //   expect(appComponentSUT.todoArray[1]).toEqual('test');
  // }));

});
