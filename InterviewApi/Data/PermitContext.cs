using Microsoft.EntityFrameworkCore;
using PermitApi.Models;

namespace PermitApi.Data
{
    public class PermitContext : DbContext
    {
        public PermitContext(DbContextOptions<PermitContext> options) : base(options)
        {
        }
        
        public DbSet<PermitRegistration> PermitRegistrations { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed some test data
            modelBuilder.Entity<PermitRegistration>().HasData(
                new PermitRegistration
                {
                    Id = 1,
                    ApplicantName = "John Smith",
                    Email = "john.smith@email.com",
                    PermitType = "Building",
                    ProjectDescription = "Kitchen renovation",
                    Address = "123 Main St, Anytown, ST 12345",
                    EstimatedCost = 15000,
                    SubmissionDate = DateTime.UtcNow.AddDays(-5),
                    Status = PermitStatus.UnderReview
                },
                new PermitRegistration
                {
                    Id = 2,
                    ApplicantName = "Jane Doe",
                    Email = "jane.doe@email.com",
                    PermitType = "Electrical",
                    ProjectDescription = "Install new electrical panel",
                    Address = "456 Oak Ave, Anytown, ST 12345",
                    EstimatedCost = 3500,
                    SubmissionDate = DateTime.UtcNow.AddDays(-2),
                    Status = PermitStatus.Pending
                }
            );
        }
    }
}