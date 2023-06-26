import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElementFormComponent } from './create-element-form.component';

describe('CreateElementFormComponent', () => {
  let component: CreateElementFormComponent;
  let fixture: ComponentFixture<CreateElementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateElementFormComponent]
    });
    fixture = TestBed.createComponent(CreateElementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
