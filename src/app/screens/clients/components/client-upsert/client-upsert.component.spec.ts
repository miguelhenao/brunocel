import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpsertComponent } from './client-upsert.component';

describe('ClientUpsertComponent', () => {
  let component: ClientUpsertComponent;
  let fixture: ComponentFixture<ClientUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientUpsertComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
