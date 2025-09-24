using System.ComponentModel.DataAnnotations;

namespace PermitApi.Models
{
    public class PermitRegistration
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string ApplicantName { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        public string PermitType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(200)]
        public string ProjectDescription { get; set; } = string.Empty;
        
        [Required]
        [StringLength(300)]
        public string Address { get; set; } = string.Empty;
        
        [Range(1, 1000000)]
        public decimal EstimatedCost { get; set; }
        
        public DateTime SubmissionDate { get; set; } = DateTime.UtcNow;
        
        public PermitStatus Status { get; set; } = PermitStatus.Pending;
        
        public string? ReviewNotes { get; set; }
    }
    
    public enum PermitStatus
    {
        Pending,
        UnderReview,
        Approved,
        Rejected,
        RequiresMoreInfo
    }
    
    public enum PermitType
    {
        Building,
        Electrical,
        Plumbing,
        Mechanical,
        Demolition,
        SignPermit
    }
}