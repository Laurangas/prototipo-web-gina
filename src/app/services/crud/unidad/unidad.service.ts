import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Unidad } from 'src/app/classes/unidad.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  constructor(private firestore: AngularFirestore) { }


  getUnidad() {
    return this.firestore.collection('unidad').snapshotChanges();
  }

  createUnidad(unidad: Unidad) {
    return this.firestore.collection('unidad').add({...unidad});
  }

  updateUnidad(unidad: Unidad){
    console.log(unidad);
    this.firestore.doc('unidad/' + unidad.id).update({...unidad});
  }

  deleteUnidad(unidadId: string){
    this.firestore.doc('unidad/' + unidadId).delete();
  }
}
