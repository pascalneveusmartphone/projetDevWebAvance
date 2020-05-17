import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTodoFormComponent } from './modifTodo-form.component';

describe('ModifTodoFormComponent', () => {
  let component: ModifTodoFormComponent;
  let fixture: ComponentFixture<ModifTodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifTodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
