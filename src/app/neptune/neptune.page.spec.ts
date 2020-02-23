import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeptunePage } from './neptune.page';

describe('NeptunePage', () => {
  let component: NeptunePage;
  let fixture: ComponentFixture<NeptunePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeptunePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeptunePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
