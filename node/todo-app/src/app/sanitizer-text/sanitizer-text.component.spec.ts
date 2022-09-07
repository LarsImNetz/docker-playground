import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SanitizeService } from './sanitize.service';

import { SanitizerTextComponent } from './sanitizer-text.component';

describe('SanitizerTextComponent', () => {
  let component: SanitizerTextComponent;
  let fixture: ComponentFixture<SanitizerTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizerTextComponent ],
      providers: [SanitizeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizerTextComponent);
    component = fixture.componentInstance;
    component.name = "theSanitizerTextComponent";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
