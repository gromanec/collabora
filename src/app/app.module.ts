import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { AuthInterceptor } from './auth/services/authinterceptor.service';
import { BoardsModule } from './boards/boards.module';
import { AuthService } from './auth/services/auth.service';
import { BoardModule } from './board/board.module';
import { SocketService } from './shared/services/socket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    BoardsModule,
    BoardModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    SocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
