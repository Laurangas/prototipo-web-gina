import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogComponent
  ]

})
export class DialogModule {
  constructor(public dialog: MatDialog) {}

  openDialog(icon: string, title: string, content: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {icon, title, content}
    });
  }

}
