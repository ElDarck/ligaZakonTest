import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDescriptionComponent } from './file-description.component';

describe('FileDescriptionComponent', () => {
  let component: FileDescriptionComponent;
  let fixture: ComponentFixture<FileDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileDescriptionComponent]
    });
    fixture = TestBed.createComponent(FileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
