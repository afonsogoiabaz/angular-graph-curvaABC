import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvaAbcViewComponent } from './curva-abc-view.component';

describe('BarChartComponent', () => {
  let component: CurvaAbcViewComponent;
  let fixture: ComponentFixture<CurvaAbcViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurvaAbcViewComponent]
    });
    fixture = TestBed.createComponent(CurvaAbcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
