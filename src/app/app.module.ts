


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoState } from './store/todo.state';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([TodoState]) // Ensure TodoState is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
