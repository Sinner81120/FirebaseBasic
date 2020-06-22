import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs'
import { User } from '../../Models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  items: Observable<User[]>;

  constructor(public db: AngularFirestore, public afs: AngularFireStorage) {
    this.items = this.db.collection<User>('users').valueChanges();
    // this.items = this.db.collection('users').snapshotChanges().map(changes =>{
    let x = this.db.collection('users').doc().get();
    console.log(x)
    // })
  }
  addUser(value: User) {
    this.db.collection('users').add({
      name: value.name,
      age: value.age,
      address: value.address,
      job: value.job
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  getUser() {
    return this.items;
  }
  getImg() {
    return this.afs.ref('Image/Thorimg.jpg')
  }
  deleteUser() {

  }
  updateUser() {

  }
}
