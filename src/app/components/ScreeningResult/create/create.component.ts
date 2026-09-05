import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreeningResultService } from '../../../services/ScreeningResult.service';
import { ScreeningResult } from '../../../models/ScreeningResult';
import { SubBaseComponent } from '../../ScreeningResult/sub.base.component';

@Component({
    selector: 'app-create-screeningResult',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateScreeningResultComponent extends SubBaseComponent implements OnInit {

    title = 'Add ScreeningResult';

    screeningResultForm: FormGroup;
    screeningResult: ScreeningResult;

    constructor(
        private screeningResultService: ScreeningResultService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.screeningResultForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  screeningDate: ['', Validators.required],
      provider: ['', Validators.required],
      KycProfile: ['', ],
      Outcome: ['', ]
        });
    }

    
    addScreeningResult(screeningDate, provider, KycProfile, Outcome): void {
        this.screeningResultService
        .addScreeningResult(screeningDate, provider, KycProfile, Outcome)
.then(() => {
        this.router.navigate(['/indexScreeningResult']);
    });
}

    ngOnInit(): void {
    }
}