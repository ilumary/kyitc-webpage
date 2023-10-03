import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
    contactForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private http: HttpClient) {}

    ngOnInit() : void {}

    onSubmit(): void {
        this.http.post('/api/contact', this.contactForm.value).subscribe((res: any) => {
            console.log(res);
        });
    }
}
