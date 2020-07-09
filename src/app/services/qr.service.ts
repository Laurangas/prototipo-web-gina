import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

interface QR {
  dataUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private httpClient: HttpClient) { }

  qr(str: string): Observable<QR> {
    return this.httpClient.post<QR>('https://automaga.umizoomi.tk/api/qr', {str}).pipe(
      catchError(this.handleError<QR>('0'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
