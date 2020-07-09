import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogModule } from 'src/app/components/shared/dialog/dialog.module';

interface Response {
  success: string;
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http: HttpClient, private dialogModule: DialogModule) {
  }

  sendMail(email: string, subject: string, text: string) {

    this.http.post('http://127.0.0.1:9001/mail',
        {
          from: 'al174382@edu.uaa.mx',
          to: 'rodogonzalez98@gmail.com',
          subject: 'Nvo msj de ' + email + ': ' + subject,
          text
        })
        .subscribe(
            (val: Response) => {
                this.dialogModule.openDialog('mdi-email-check',
                'Mensaje enviado',
                'Se ha enviado su mensaje',
                val.success + ' ' + val.response );
            },
            response => {
                this.dialogModule.openDialog('mdi-email-off',
                'Error al enviar mensaje',
                'Ha ocurrido un error', response.message);

            },
            () => {

            });
    }
}
