import { Coupon } from './../models/coupon';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
// import {map} from 'rxjs/operators'
import {Storage} from '@ionic/storage'
@Injectable({
  providedIn: 'root'
})
export class CouponService {

  $Coupons = new BehaviorSubject(null);
$CouponsObs = this.$Coupons.asObservable();
$FeaturedCollection = new BehaviorSubject([]);
$FeaturedCollectionObs = this.$FeaturedCollection.asObservable();
$selectedCollection = new BehaviorSubject([]);
$selectedCollectionObs = this.$selectedCollection.asObservable();
CouponCollection: AngularFirestoreCollection<Coupon>;
Coupons: Observable<Coupon[]>;
SliderCollection: AngularFirestoreCollection<Coupon>;
Sliders: Observable<Coupon[]>;
FeaturedCollection: AngularFirestoreCollection<Coupon>;
Featured: Observable<any>;
category = new BehaviorSubject('Men');


  constructor(private db: AngularFirestore, private storage: Storage) {}


  // Get Coupons
fetch_Coupons(){

  this.CouponCollection = this.db.collection<Coupon>('advertiser');
this.Coupons = this.CouponCollection.valueChanges()
 
  // this.Coupons = this.CouponCollection.snapshotChanges().pipe(
  //     map(actions =>  actions.map(action =>{
  //        const data = action.payload.doc.data() as Coupon;
  //        const id = action.payload.doc.id;
  //        const newData = { id, ...data };
  //        this.$Coupons.next( [newData] );
  //        return newData;
 
  //     }))
  //  )
//  return this.CouponCollection
  return this.Coupons;
 
 }


 
 //GetSelected Image
 async SetSelectedPdt(product, category) {
  console.log(category);
  
 this.category.next(category);
//  this.storage.set('selectedProduct', product);


}

// destroy Storage
destroy(){
   this.storage.remove('selectedProduct')
}


//  LoadSelected Image
async LoadSelectedPdt() {
return await this.storage.get('selectedProduct').then( data => {
  const Loadedproduct = JSON.parse(data)
  return Loadedproduct;
});
// this.$FeaturedCollectionObs.subscribe(data => console.log('featured', data))

}

// Get Slider  Images
fetchSlider(){
this.SliderCollection = this.db.collection('slider_collection');
this.Sliders = this.SliderCollection.valueChanges()
return this.Sliders;
}


}
