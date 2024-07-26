using EventsProject.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsProject.API.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Event> Events { get; set; }
    }
}
