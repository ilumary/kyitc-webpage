import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor( private http: HttpClient ) { }

    HandleMessage(input: string) {
        console.log(input);

        //TODO figure out why nodemailer wont work
        /*let transporter = nodemailer.createTransport({
            host: import.meta.env['NG_APP_SMTP_HOST'],
            port: import.meta.env['NG_APP_SMTP_PORT'],
            secure: import.meta.env['NG_APP_SMTP_SECURE'] === 'true' ? true : false,
            auth: {
                user: import.meta.env['NG_APP_USER'],
                pass: import.meta.env['NG_APP_PASSWD'],
            },
        });

        await this.sendMail(transporter, "christoph.britsch@gmail.com", "KYITC Contact", input);*/ 
    }

    /*async sendMail(transporter: nodemailer.Transporter, to: string, subject: string, content: string) {
        return await transporter
            .sendMail({
                from: 'website_contact_form@kickstartyouritcareer.de',
                to: to,
                subject: subject,
                text: content,
            });
    }*/
}
