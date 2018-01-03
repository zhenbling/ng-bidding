import { Routes, RouterModule } from '@angular/router';
import {MyCenterComponent} from "./my-center.component";
import {BiddingComponent} from "./components/bidding/bidding.component";
import {LoseBidComponent} from "./components/lose-bid/lose-bid.component";
import {WinBidComponent} from "./components/win-bid/win-bid.component";
import { WaitSignedComponent } from './components/wait-signed/wait-signed.component';
import { SignedComponent } from './components/signed/signed.component';
import { FirstPaymentComponent } from './components/first-payment/first-payment.component';
import { ExamineGoodsComponent } from './components/examine-goods/examine-goods.component';
import { PaidTailComponent } from './components/paid-tail/paid-tail.component';
import { ReceivedGoodsComponent } from './components/received-goods/received-goods.component';


const routes: Routes = [
  {
    path: '',
    component: MyCenterComponent,
    children: [
      { path: '', component: BiddingComponent },
      { path: 'losebidding', component: LoseBidComponent },
      { path: 'winbidding', component: WinBidComponent },
      { path: 'examinegoods', component: ExamineGoodsComponent },
      { path: 'waitsigned', component: WaitSignedComponent },
      { path: 'signed', component: SignedComponent },
      { path: 'firstpayment', component: FirstPaymentComponent },
      { path: 'paidtail', component: PaidTailComponent },
      { path: 'receivedgoods', component: ReceivedGoodsComponent }
    ]
  }
];
export const routing = RouterModule.forChild(routes);
