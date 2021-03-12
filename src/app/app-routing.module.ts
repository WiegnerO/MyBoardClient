import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessageBoardPageComponent } from './message-board/message-board-page/message-board-page.component';
import { AllBoardsComponent } from './all-boards/all-boards.component';
import { RouteGuardServiceLoggedIn } from './services/route-guard.service';
import { RouteGuardServiceLoggedOut } from './services/route-guard-logged-out.service';
import { RouteGaurdAdminService } from './services/route-gaurd-admin.service';
import { AllUsersComponent } from './all-users/all-users.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

let homePage: string = !!localStorage.getItem('token') ? 'userpage' : '/loginPage';

const routes: Routes = [
  {path : '' , redirectTo : homePage , pathMatch : 'full'},
  {path : 'frontPage' , canActivate: [RouteGuardServiceLoggedIn],  component : FrontPageComponent},
  {path : 'userpage' , canActivate: [RouteGuardServiceLoggedIn], component : UserPageComponent},
  {path : 'loginPage' , canActivate: [RouteGuardServiceLoggedOut], component : LoginPageComponent},
  {path : 'registerPage', canActivate: [RouteGuardServiceLoggedOut], component : RegisterPageComponent},
  {path : 'messageBoard', canActivate: [RouteGuardServiceLoggedIn], component : AllBoardsComponent},
  {path : 'messageBoard/:Bname', canActivate: [RouteGuardServiceLoggedIn], component : MessageBoardPageComponent},
  {path : 'allUsers', canActivate: [RouteGuardServiceLoggedIn], component : AllUsersComponent},
  {path : 'admin', canActivate: [RouteGuardServiceLoggedIn, RouteGaurdAdminService], component : AdminPageComponent},
  {path : '**' , redirectTo : homePage , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
