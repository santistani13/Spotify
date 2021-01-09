import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtitsComponent } from './artits.component';

describe('ArtitsComponent', () => {
  let component: ArtitsComponent;
  let fixture: ComponentFixture<ArtitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
