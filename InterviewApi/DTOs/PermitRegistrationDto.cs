using PermitApi.Models;

namespace PermitApi.DTOs
{
    public class CreatePermitRegistrationDto
    {
        public string ApplicantName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PermitType { get; set; } = string.Empty;
        public string ProjectDescription { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public decimal EstimatedCost { get; set; }
    }
    
    public class PermitRegistrationResponseDto
    {
        public int Id { get; set; }
        public string ApplicantName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PermitType { get; set; } = string.Empty;
        public string ProjectDescription { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public decimal EstimatedCost { get; set; }
        public DateTime SubmissionDate { get; set; }
        public PermitStatus Status { get; set; }
        public string? ReviewNotes { get; set; }
    }
}