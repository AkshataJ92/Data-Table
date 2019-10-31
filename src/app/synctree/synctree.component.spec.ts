import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynctreeComponent } from './synctree.component';

describe('SynctreeComponent', () => {
  let component: SynctreeComponent;
  let fixture: ComponentFixture<SynctreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynctreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynctreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
