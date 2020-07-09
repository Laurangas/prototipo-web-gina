import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Llantaentrada } from 'src/app/llantaentrada.model';

@Injectable({
  providedIn: 'root'
})
export class LlantaentradaService {

  constructor(private firestore: AngularFirestore) { }

  getLlantasEntrada() {
    return this.firestore.collection('llantasentrada').snapshotChanges();
  }

  getLlantaEntrada(id: string) {
    return this.firestore.doc('llantasentrada/' + id).get();
  }

  createLlantaEntrada(llantaEntrada: Llantaentrada) {
    return this.firestore.collection('llantasentrada').add({...llantaEntrada});
  }

  updateLlantaEntrada(llantaEntrada: Llantaentrada){
    console.log(llantaEntrada);
    this.firestore.doc('llantasentrada/' + llantaEntrada.id).update({...llantaEntrada});
  }

  deleteLlantaEntrada(llantaEntradaId: string){
    this.firestore.doc('llantasentrada/' + llantaEntradaId).delete();
  }
}
