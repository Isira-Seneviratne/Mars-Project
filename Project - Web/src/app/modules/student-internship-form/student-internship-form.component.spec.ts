import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInternshipFormComponent } from './student-internship-form.component';

describe('StudentInternshipFormComponent', () => {
  let component: StudentInternshipFormComponent;
  let fixture: ComponentFixture<StudentInternshipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInternshipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInternshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
