import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NotificationService } from './service/notification.service';
import { MeetingDashboardComponent } from './meeting-dashboard/meeting-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ToastContainerModule,
    AgGridModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
