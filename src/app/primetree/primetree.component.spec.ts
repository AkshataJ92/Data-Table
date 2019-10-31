import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimetreeComponent } from './primetree.component';

describe('PrimetreeComponent', () => {
  let component: PrimetreeComponent;
  let fixture: ComponentFixture<PrimetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
