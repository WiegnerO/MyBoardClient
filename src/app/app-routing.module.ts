import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { UserPageComponent } from './user-page/user-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessageBoardPageComponent } from './message-board/message-board-page/message-board-page.component'

const routes: Routes = [
  {path : '' , redirectTo : '/loginPage' , pathMatch : 'full'},
  {path : 'frontPage' ,  component : FrontPageComponent},
  {path : 'userpage' , component : UserPageComponent},
  {path : 'loginPage' , component : LoginPageComponent},
  {path : 'registerPage', component : RegisterPageComponent},
  {path : 'messageBoard', component : MessageBoardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
