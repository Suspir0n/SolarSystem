import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MercuryPage } from './mercury.page';

describe('MercuryPage', () => {
  let component: MercuryPage;
  let fixture: ComponentFixture<MercuryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercuryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MercuryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
