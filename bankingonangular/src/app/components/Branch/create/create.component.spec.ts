
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBranchComponent } from './create.component';
import { BranchService } from '../../../services/Branch.service';
import { Router } from '@angular/router';

describe('CreateBranchComponent', () => {
  let component: CreateBranchComponent;
  let fixture: ComponentFixture<CreateBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateBranchComponent
      ],
      providers: [
        BranchService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});