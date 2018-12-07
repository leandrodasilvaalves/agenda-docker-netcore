import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneListaComponent } from './telefone-lista.component';

describe('TelefoneComponent', () => {
  let component: TelefoneListaComponent;
  let fixture: ComponentFixture<TelefoneListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
