import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';

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

    constructor(private fb: FormBuilder, private contact: ContactService) {}

    ngOnInit() : void {}

    onSubmit(): void {
        this.contact.HandleMessage(JSON.stringify(this.contactForm.value, null, 2));
    }
}
