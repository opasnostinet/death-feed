import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { FallbackComponent } from './pages/fallback/fallback.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'chats', component: ChatsComponent},
  {path: 'chat/:userId', component: ChatComponent},
  {path: '**', component: FallbackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
