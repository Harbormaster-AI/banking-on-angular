import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ScreeningResultService } from '../../../services/ScreeningResult.service';
import { SubBaseComponent } from '../../ScreeningResult/sub.base.component';


@Component({
    selector: 'app-edit-screeningResult',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditScreeningResultComponent extends SubBaseComponent implements OnInit {

    title = 'Edit ScreeningResult';

    screeningResultForm: FormGroup;
    screeningResult: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: ScreeningResultService,
        private fb: FormBuilder
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

    
    updateScreeningResult(screeningDate, provider, KycProfile, Outcome): void {
        this.route.params.subscribe(params => {
                        this.service.updateScreeningResult(screeningDate, provider, KycProfile, Outcome, params['id'])
                            .subscribe(() => {
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