
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreeningResultService } from '../../../services/ScreeningResult.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-screeningResult',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditScreeningResultComponent implements OnInit {

    title = 'Edit ScreeningResult';

    screeningResultForm: FormGroup;
    screeningResult: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ScreeningResultService,
        private fb: FormBuilder
) {
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

    
    updateScreeningResult(screeningDate, provider, KycProfile, Outcome): void {
        this.route.params.subscribe(params => {
                        this.service.updateScreeningResult(screeningDate, provider, KycProfile, Outcome, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexScreeningResult']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editScreeningResult(params['id']).subscribe(res => {
                this.screeningResult = res;
            });
        });
    }
}