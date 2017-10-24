/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Blank1_PhonePortrait } from '../pages/Blank1/PhonePortrait/Blank1';
import { Blank3_PhonePortrait } from '../pages/Blank3/PhonePortrait/Blank3';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    Blank1_PhonePortrait,
    Blank3_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Blank1': {
      PhonePortrait: Blank1_PhonePortrait
    },
    'Blank3': {
      PhonePortrait: Blank3_PhonePortrait
    }
  }
}