
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditExchangeRateComponent } from './edit.component';
import { ExchangeRateService } from '../../../services/ExchangeRate.service';

describe('EditExchangeRateComponent', () => {
  let component: EditExchangeRateComponent;
  let fixture: ComponentFixture<EditExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditExchangeRateComponent
      ],
      providers: [
        ExchangeRateService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});