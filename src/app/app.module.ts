import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessageBoardPageComponent } from './message-board/message-board-page/message-board-page.component';
import { MessagesComponent } from './message-board/messages/messages.component';
import { MessageForumComponent } from './message-board/message-forum/message-forum.component';
import { HttpClientModule } from '@angular/common/http';

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
    MessageForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
