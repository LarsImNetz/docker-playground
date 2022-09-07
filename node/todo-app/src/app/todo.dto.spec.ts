import { TestBed } from '@angular/core/testing';
import { SanitizeService } from './sanitizer-text/sanitize.service';
import { TodoDto } from './todo.dto';

describe('Todo.Dto', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [TodoDto],
  //   });
  // });

  it('should create an instance', () => {
    expect(new TodoDto()).toBeTruthy();
  });
});
