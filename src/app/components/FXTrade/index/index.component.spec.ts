
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexFXTradeComponent } from './index.component';
import { FXTradeService } from '../../../services/FXTrade.service';

describe('IndexFXTradeComponent', () => {
  let component: IndexFXTradeComponent;
  let fixture: ComponentFixture<IndexFXTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexFXTradeComponent
      ],
      providers: [
        FXTradeService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexFXTradeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});