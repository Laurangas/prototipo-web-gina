import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Llantasexistencia } from '../llantasexistencia.model';

@Injectable({
  providedIn: 'root'
})
export class LlantasexistenciaService {

  constructor(private firestore: AngularFirestore) { }

  getLlantas() {
    return this.firestore.collection('llantasexistencia').snapshotChanges();
  }

  createLlantas(llantas: Llantasexistencia) {
    return this.firestore.collection('llantasexistencia').add(llantas);
  }

  updateLlantas(llantas: Llantasexistencia) {
    delete llantas.id;
    this.firestore.doc('llantasexistencia/'+ llantas.id).update(llantas);
  }

  deleteLlantas(llantasId: string) {
    this.firestore.doc('llantasexistencia/' + llantasId).delete();
    console.log(llantasId);
  }
}
