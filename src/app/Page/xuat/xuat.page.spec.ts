import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XuatPage } from './xuat.page';

describe('XuatPage', () => {
  let component: XuatPage;
  let fixture: ComponentFixture<XuatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XuatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
