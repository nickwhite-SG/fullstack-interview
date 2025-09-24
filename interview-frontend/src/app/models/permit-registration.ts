export interface PermitRegistration {
  id: number;
  applicantName: string;
  email: string;
  permitType: string;
  projectDescription: string;
  address: string;
  estimatedCost: number;
  submissionDate: string;
  status: PermitStatus;
  reviewNotes?: string;
}

export interface CreatePermitRegistration {
  applicantName: string;
  email: string;
  permitType: string;
  projectDescription: string;
  address: string;
  estimatedCost: number;
}

export enum PermitStatus {
  Pending = 0,
  UnderReview = 1,
  Approved = 2,
  Rejected = 3,
  RequiresMoreInfo = 4,
}

export const PermitTypes = [
  'Building',
  'Electrical',
  'Plumbing',
  'Mechanical',
  'Demolition',
  'SignPermit',
];
