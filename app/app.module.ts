import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { MyserviceService} from './myservice.service';
import { FilterPipe } from './filter.pipe';
import { GenderPipe } from './gender.pipe';

const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    GenderPipe,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyserviceService, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }







