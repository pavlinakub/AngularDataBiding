import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocpitComponent } from './cocpit.component';

describe('CocpitComponent', () => {
  let component: CocpitComponent;
  let fixture: ComponentFixture<CocpitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocpitComponent]
    });
    fixture = TestBed.createComponent(CocpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
