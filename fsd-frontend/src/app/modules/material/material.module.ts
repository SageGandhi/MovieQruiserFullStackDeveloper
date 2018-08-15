import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSnackBarModule,
  MatGridListModule, MatDividerModule, MatListModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, BrowserAnimationsModule, MatSnackBarModule, FormsModule,
    ReactiveFormsModule, MatGridListModule, MatDividerModule, MatListModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule,MatDialogModule
  ],
  exports: [
    MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, BrowserAnimationsModule, MatSnackBarModule, FormsModule,
    ReactiveFormsModule, MatGridListModule, MatDividerModule, MatListModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule,MatDialogModule
  ]
})
export class MaterialModule { }
