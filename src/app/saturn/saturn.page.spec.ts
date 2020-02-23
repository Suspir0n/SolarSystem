import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaturnPage } from './saturn.page';

describe('SaturnPage', () => {
  let component: SaturnPage;
  let fixture: ComponentFixture<SaturnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
