import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCoreComponent } from './core.component';

describe('CoreComponent', () => {
  let component: MainPageCoreComponent;
  let fixture: ComponentFixture<MainPageCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
