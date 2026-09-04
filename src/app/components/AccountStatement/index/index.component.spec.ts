
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexAccountStatementComponent } from './index.component';
import { AccountStatementService } from '../../../services/AccountStatement.service';

describe('IndexAccountStatementComponent', () => {
  let component: IndexAccountStatementComponent;
  let fixture: ComponentFixture<IndexAccountStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexAccountStatementComponent
      ],
      providers: [
        AccountStatementService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexAccountStatementComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});