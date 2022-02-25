
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NotificationService } from './service/notification.service';
import { MeetingDashboardComponent } from './containers/meeting-dashboard/meeting-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right'
    }),
    ToastContainerModule,
    AgGridModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
