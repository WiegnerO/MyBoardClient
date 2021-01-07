import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { UserPageComponent } from './user-page/user-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessageBoardPageComponent } from './message-board/message-board-page/message-board-page.component'

let homePage : string = !!localStorage.getItem('token')? 'userpage' : '/loginPage';

//TODO update this so you cant acces these routes when you are logged in or not
const routes: Routes = [
  {path : '' , redirectTo : homePage , pathMatch : 'full'},
  {path : 'frontPage' ,  component : FrontPageComponent},
  {path : 'userpage' , component : UserPageComponent},
  {path : 'loginPage' , component : LoginPageComponent},
  {path : 'registerPage', component : RegisterPageComponent},
  {path : 'messageBoard', component : MessageBoardPageComponent},
  {path : 'messageBoard/:Mid', component : MessageBoardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
