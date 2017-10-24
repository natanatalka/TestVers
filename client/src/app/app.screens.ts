/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Blank1_PhonePortrait } from '../pages/Blank1/PhonePortrait/Blank1';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Blank_PhonePortrait,
    Login_PhonePortrait,
    Blank1_PhonePortrait
  ];
  static mapping = {
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Blank1': {
      PhonePortrait: Blank1_PhonePortrait
    }
  }
}