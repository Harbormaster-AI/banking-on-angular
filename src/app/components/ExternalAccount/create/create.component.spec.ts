
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateExternalAccountComponent } from './create.component';
import { ExternalAccountService } from '../../../services/ExternalAccount.service';
import { Router } from '@angular/router';

describe('CreateExternalAccountComponent', () => {
  let component: CreateExternalAccountComponent;
  let fixture: ComponentFixture<CreateExternalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateExternalAccountComponent
      ],
      providers: [
        ExternalAccountService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExternalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});