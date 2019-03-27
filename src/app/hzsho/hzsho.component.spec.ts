import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzshoComponent } from './hzsho.component';

describe('HzshoComponent', () => {
  let component: HzshoComponent;
  let fixture: ComponentFixture<HzshoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HzshoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzshoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
