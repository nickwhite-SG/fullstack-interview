import { Component, OnInit } from '@angular/core';
import { PermitRegistration } from '../../models/permit-registration';
import { PermitService } from '../../services/permit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-permit-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="permit-list">
      <h2>Permit Registrations</h2>

      <!-- TODO: Add search/filter functionality -->

      <div class="permits" *ngIf="permits.length > 0; else noPermits">
        <div class="permit-card" *ngFor="let permit of permits">
          <h3>{{ permit.applicantName }}</h3>
          <p><strong>Type:</strong> {{ permit.permitType }}</p>
          <p><strong>Description:</strong> {{ permit.projectDescription }}</p>
          <p>
            <strong>Status:</strong>
            <span class="status" [class]="getStatusClass(permit.status)">
              {{ getStatusText(permit.status) }}
            </span>
          </p>
          <p><strong>Estimated Cost:</strong> {{ permit.estimatedCost | currency }}</p>

          <!-- TODO: Add button to view details or change status -->
        </div>
      </div>

      <ng-template #noPermits>
        <p>No permits found.</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .permit-list {
        padding: 20px;
      }

      .permit-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
        background: white;
      }

      .status {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
      }

      .status.pending {
        background-color: #fff3cd;
        color: #856404;
      }
      .status.under-review {
        background-color: #cce5ff;
        color: #004085;
      }
      .status.approved {
        background-color: #d4edda;
        color: #155724;
      }
      .status.rejected {
        background-color: #f8d7da;
        color: #721c24;
      }
    `,
  ],
})
export class PermitListComponent implements OnInit {
  permits: PermitRegistration[] = [];
  loading = false;
  error = '';

  constructor(private permitService: PermitService) {}

  ngOnInit() {
    this.loadPermits();
  }

  loadPermits() {
    this.loading = true;
    this.permitService.getPermits().subscribe({
      next: (permits) => {
        this.permits = permits;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load permits';
        this.loading = false;
        console.error(error);
      },
    });
  }

  getStatusText(status: number): string {
    const statusMap: { [key: number]: string } = {
      0: 'Pending',
      1: 'Under Review',
      2: 'Approved',
      3: 'Rejected',
      4: 'Requires More Info',
    };
    return statusMap[status] || 'Unknown';
  }

  getStatusClass(status: number): string {
    const classMap: { [key: number]: string } = {
      0: 'pending',
      1: 'under-review',
      2: 'approved',
      3: 'rejected',
      4: 'pending',
    };
    return classMap[status] || '';
  }
}
