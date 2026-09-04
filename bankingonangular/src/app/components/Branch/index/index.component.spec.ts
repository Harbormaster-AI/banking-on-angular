
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexBranchComponent } from './index.component';
import { BranchService } from '../../../services/Branch.service';

describe('IndexBranchComponent', () => {
  let component: IndexBranchComponent;
  let fixture: ComponentFixture<IndexBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexBranchComponent
      ],
      providers: [
        BranchService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexBranchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});