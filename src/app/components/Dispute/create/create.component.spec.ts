
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateDisputeComponent } from './create.component';
import { DisputeService } from '../../../services/Dispute.service';
import { Router } from '@angular/router';

describe('CreateDisputeComponent', () => {
  let component: CreateDisputeComponent;
  let fixture: ComponentFixture<CreateDisputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateDisputeComponent
      ],
      providers: [
        DisputeService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});