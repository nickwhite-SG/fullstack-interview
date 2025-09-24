import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermitService } from '../../services/permit.service';
import { PermitTypes } from '../../models/permit-registration';

@Component({
  selector: 'app-create-permit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="create-permit">
      <h2>Submit New Permit Application</h2>

      <!-- TODO: Create reactive form with validation -->
      <!-- TODO: Handle form submission -->
      <!-- TODO: Display validation errors -->
      <!-- TODO: Show loading state during submission -->

      <p>Form implementation needed...</p>
    </div>
  `,
  styles: [
    `
      .create-permit {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
      }
    `,
  ],
})
export class CreatePermitComponent {
  permitForm: FormGroup;
  permitTypes = PermitTypes;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private permitService: PermitService,
    private router: Router
  ) {
    // TODO: Initialize form with proper validators
    this.permitForm = this.fb.group({});
  }

  onSubmit() {
    // TODO: Implement form submission
  }
}
