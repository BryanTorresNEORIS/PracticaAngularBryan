import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioServiceComponent } from './usuario-service.component';

describe('UsuarioServiceComponent', () => {
  let component: UsuarioServiceComponent;
  let fixture: ComponentFixture<UsuarioServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
