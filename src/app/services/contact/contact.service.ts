import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor() { }

    HandleMessage(input: string) {
        console.log(input);
        let user = import.meta.env['NG_APP_USER'];
        let passwd = import.meta.env['NG_APP_PASSWD'];
    }
}
