import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartscreenComponent } from './restartscreen.component';

describe('RestartscreenComponent', () => {
  let component: RestartscreenComponent;
  let fixture: ComponentFixture<RestartscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
