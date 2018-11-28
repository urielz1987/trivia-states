import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from '../components/welcome-screen/welcome-screen.component';
import { TriviaManagerMobileComponent } from '../components/trivia-manager-mobile/trivia-manager-mobile.component';
import { PrizeMoneyComponent } from '../components/prize-money/prize-money.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Canada/Welcome', pathMatch: 'full' },
  { path: 'Canada/Welcome', component: WelcomeScreenComponent },
  { path: 'Canada/Prize', component:  PrizeMoneyComponent },
  //{ path: 'Canada/Play', component: TriviaManagerMobileComponent },
  //{ path: 'component-two/:id', component: ComponentTwoComponent },
  { path: '**', redirectTo: 'Canada/Welcome' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);