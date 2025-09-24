using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PermitApi.Data;
using PermitApi.DTOs;
using PermitApi.Models;

namespace PermitApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PermitRegistrationsController : ControllerBase
    {
        private readonly PermitContext _context;
        
        public PermitRegistrationsController(PermitContext context)
        {
            _context = context;
        }
        
        // GET: api/permitregistrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PermitRegistrationResponseDto>>> GetPermitRegistrations()
        {
            var permits = await _context.PermitRegistrations.ToListAsync();
            
            return permits.Select(p => new PermitRegistrationResponseDto
            {
                Id = p.Id,
                ApplicantName = p.ApplicantName,
                Email = p.Email,
                PermitType = p.PermitType,
                ProjectDescription = p.ProjectDescription,
                Address = p.Address,
                EstimatedCost = p.EstimatedCost,
                SubmissionDate = p.SubmissionDate,
                Status = p.Status,
                ReviewNotes = p.ReviewNotes
            }).ToList();
        }
        
        // GET: api/permitregistrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PermitRegistrationResponseDto>> GetPermitRegistration(int id)
        {
            // TODO: Implement this method
            // Should return 404 if not found
            throw new NotImplementedException("Candidate should implement this");
        }
        
        // POST: api/permitregistrations
        [HttpPost]
        public async Task<ActionResult<PermitRegistrationResponseDto>> CreatePermitRegistration(CreatePermitRegistrationDto dto)
        {
            // TODO: Implement this method
            // Should validate the input and create a new permit registration
            // Should return CreatedAtAction with the new permit
            throw new NotImplementedException("Candidate should implement this");
        }
        
        // PUT: api/permitregistrations/5/status
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdatePermitStatus(int id, [FromBody] PermitStatus status)
        {
            // TODO: Implement this method
            // Should update only the status of the permit
            // Should return 404 if permit not found
            throw new NotImplementedException("Candidate should implement this");
        }
    }
}