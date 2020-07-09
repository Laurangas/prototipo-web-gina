import { DialogModule } from './components/shared/dialog/dialog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component'; // importamos sidenav para el menu (es un tipo de menu)
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/app/dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // importamos la dependencia

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; // importamos el tipo de lista para el menu
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AngularFireAuthModule } from 'angularfire2/auth';//Referente a firebase
import { AngularFireDatabaseModule } from 'angularfire2/database'; //, FirebaseListObservable
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroLlantaComponent } from './components/app/registro-llanta/registro-llanta.component';
import { ModificarLlantaComponent } from './components/app/modificar-llanta/modificar-llanta.component';
import { ReporteTotalLlantasComponent } from './components/app/reporte-total-llantas/reporte-total-llantas.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './components/faq/faq.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    SignInComponent,
    ForgotPasswordComponent,
    PerfilComponent,
    SignUpComponent,
    VerifyEmailComponent,
    NotFoundComponent,
    RegistroLlantaComponent,
    ModificarLlantaComponent,
    ReporteTotalLlantasComponent,
    FaqComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    DialogModule,
    RouterModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    AngularFirestore,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
