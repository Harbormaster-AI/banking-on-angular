
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexDisputeComponent } from './index.component';
import { DisputeService } from '../../../services/Dispute.service';

describe('IndexDisputeComponent', () => {
  let component: IndexDisputeComponent;
  let fixture: ComponentFixture<IndexDisputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexDisputeComponent
      ],
      providers: [
        DisputeService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexDisputeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});