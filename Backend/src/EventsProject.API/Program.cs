using EventsProject.API.Data;
using Microsoft.EntityFrameworkCore;

namespace EventsProject.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            // Configure DbContext with SQLite
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            Console.WriteLine($"Connection String: {connectionString}");
            builder.Services.AddDbContext<DataContext>(options =>
                options.UseSqlite(connectionString)
                       .LogTo(Console.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information)
            );

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new() { Title = "My API", Version = "v1" });
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
            });

            var app = builder.Build();

            // Configure the request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                });
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            // Ensure the database is created.
            using (var scope = app.Services.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                dbContext.Database.EnsureCreated();
            }

            app.Run();
        }
    }
}
