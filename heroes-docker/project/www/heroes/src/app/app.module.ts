import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OwlModule} from 'ngx-owl-carousel';
import {HeroesModule} from './heroes/heroes.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {LoadingModule} from 'ngx-loading';
import {ImageUploadModule} from 'angular2-image-upload';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    OwlModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    LoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(255, 255, 255, 1)',
      primaryColour: '#337ab7',
      secondaryColour: '#337ab7',
      tertiaryColour: '#337ab7'
    }),
    HttpClientModule,
    ImageUploadModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
