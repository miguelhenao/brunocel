import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderUpsertComponent } from './provider-upsert.component';

describe('ProviderUpsertComponent', () => {
  let component: ProviderUpsertComponent;
  let fixture: ComponentFixture<ProviderUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderUpsertComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
