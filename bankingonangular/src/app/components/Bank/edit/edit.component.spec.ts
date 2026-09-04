
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditBankComponent } from './edit.component';
import { BankService } from '../../../services/Bank.service';

describe('EditBankComponent', () => {
  let component: EditBankComponent;
  let fixture: ComponentFixture<EditBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditBankComponent
      ],
      providers: [
        BankService,
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

    fixture = TestBed.createComponent(EditBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});