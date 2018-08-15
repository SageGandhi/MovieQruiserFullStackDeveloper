import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSnackBarModule,
  MatGridListModule, MatDividerModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, BrowserAnimationsModule, MatSnackBarModule, FormsModule,
    ReactiveFormsModule, MatGridListModule, MatDividerModule, MatListModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule
  ],
  exports: [
    MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, BrowserAnimationsModule, MatSnackBarModule, FormsModule,
    ReactiveFormsModule, MatGridListModule, MatDividerModule, MatListModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule
  ]
})
export class MaterialModule { }
