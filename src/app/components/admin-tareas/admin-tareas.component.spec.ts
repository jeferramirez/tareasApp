import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTareasComponent } from './admin-tareas.component';

describe('AdminTareasComponent', () => {
  let component: AdminTareasComponent;
  let fixture: ComponentFixture<AdminTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
