import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessageBoardPageComponent } from './message-board/message-board-page/message-board-page.component';
import { MessagesComponent } from './message-board/user-message/user-message.component';
import { MessageForumComponent } from './message-board/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { PostedMessagesComponent } from './message-board/posted-messages/posted-messages.component';
import { AllBoardsComponent } from './all-boards/all-boards.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserProfileComponent } from './all-users/user-profile/user-profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavigationBarComponent,
    UserPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MessageBoardPageComponent,
    MessagesComponent,
    MessageForumComponent,
    PostedMessagesComponent,
    AllBoardsComponent,
    AllUsersComponent,
    UserProfileComponent,
    AdminPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
