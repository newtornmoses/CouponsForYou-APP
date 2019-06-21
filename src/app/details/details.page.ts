import { CouponService } from './../services/coupon.service';
import { Coupon } from './../models/coupon';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  CouponDetails = [];
  CouponsYouMayLike:Coupon[];
  selectedCategory
  category: any;
  selectedPdt;
  FeaturedCoupons = [];
  @ViewChild(IonContent) content: IonContent;   

  constructor(private service: CouponService, private navCTR: NavController) {
  this.service.category.subscribe(data => this.category = data);

   }


  // addToCart
  addToCart(title) {
    
    // this.cartService.$cartCollection.next([])
    this.navCTR.navigateForward('/detail')
    
  }

  cart(){
    
  }

   //viewDetails
   viewDetails(id, category) {
   this.content.scrollToTop(500);
     
    this.CouponDetails = this.FeaturedCoupons.filter(Coupons => Coupons.id === id);
    console.log(this.selectedPdt);
    
 
   
   }


  // Get Selected image
  async GetSelectedImage(){
    this.service.$selectedCollectionObs.subscribe(data => {
      if(!data) {
        this.navCTR.navigateBack('/')
      }
      this.CouponDetails = data;
      console.log(this.CouponDetails);
      
    })
    // this.CouponDetails = await this.service.LoadSelectedPdt();
    // console.log('loadedPdt', this.CouponDetails);
    
    // this.service.$FeaturedCollectionObs.subscribe(data => {
    //   console.log(data);
    //   console.log(this.category);
      
    //   this.CouponsYouMayLike = data.filter(Coupon => Coupon.Category === this.category);
    
    // })


  }

 

  async ionViewWillLoad() {
    this.CouponDetails = await this.service.LoadSelectedPdt();
    console.log('loadedPdt', this.CouponDetails);
  }

  ngOnDestroy(){
    this.service.destroy()
  }

  ngOnInit() {
    this.GetSelectedImage();
  }

}
