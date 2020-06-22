import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhapPage } from './nhap.page';

describe('NhapPage', () => {
  let component: NhapPage;
  let fixture: ComponentFixture<NhapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
