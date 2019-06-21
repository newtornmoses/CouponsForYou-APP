import { NavController } from '@ionic/angular';
import { Coupon } from './../models/coupon';
import { CouponService } from './../services/coupon.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  FeaturedCoupons = [];
  selectedPdt =[]
  fetchedCoupons: Subscription;

  constructor(private service: CouponService,  private navCTR: NavController) { 
    this.service.fetch_Coupons().subscribe(data => {  
    this.service.$FeaturedCollection.next(data)    
     this.FeaturedCoupons = data;
     
     
  })
 
}



 

  //viewDetails
  async viewDetails(id, category) {
    
    this.selectedPdt = await this.FeaturedCoupons.filter(Coupons => Coupons.name === id);
   console.log('selected', this.selectedPdt);
   await this.service.$selectedCollection.next(this.selectedPdt);
  this.service.SetSelectedPdt(JSON.stringify(this.selectedPdt), category)
  //  console.log(category);
  
  this.navCTR.navigateForward('/details')
  }


ngAfterViewInit() {
  this.service.destroy();
  if(this.fetchedCoupons) {
    this.fetchedCoupons.unsubscribe();
  }
}

slideOpts = {

  initialSlide: 1,
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  
};


// Get last  fetched data
suscribedData() {
 this.fetchedCoupons = this.service.$FeaturedCollectionObs.subscribe( data => this.FeaturedCoupons = data);

}




// Search
loadCategory(e) {
 
    this.suscribedData()
    this.FeaturedCoupons =  [...this.FeaturedCoupons].filter(data =>data.category.indexOf(e) != -1 )
 
  } 
  



}
