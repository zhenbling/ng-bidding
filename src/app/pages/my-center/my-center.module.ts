import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CatagoryModule} from '../catagory-detail/catagory.module';
import {MyCenterComponent} from './my-center.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {CenterMenuItemComponent} from "./components/center-menu-item/center-menu-item.component";
import {BiddingComponent} from "./components/bidding/bidding.component";
import {LoseBidComponent} from "./components/lose-bid/lose-bid.component";
import {WinBidComponent} from "./components/win-bid/win-bid.component";
import {routing} from "./center.routing";
import { WaitSignedComponent } from './components/wait-signed/wait-signed.component';
import { SignedComponent } from './components/signed/signed.component';
import { FirstPaymentComponent } from './components/first-payment/first-payment.component';
import { ExamineGoodsComponent } from './components/examine-goods/examine-goods.component';
import { PaidTailComponent } from './components/paid-tail/paid-tail.component';
import { ReceivedGoodsComponent } from './components/received-goods/received-goods.component';


@NgModule({
  imports: [
    AccordionModule,
    AccordionModule.forRoot(),
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    MyCenterComponent,
    CenterMenuItemComponent,
    BiddingComponent,
    LoseBidComponent,
    WinBidComponent,
    WaitSignedComponent,
    SignedComponent,
    FirstPaymentComponent,
    ExamineGoodsComponent,
    PaidTailComponent,
    ReceivedGoodsComponent,
  //  ClockComponent
  ],
  providers: []
})
export class MyCenterModule {}
