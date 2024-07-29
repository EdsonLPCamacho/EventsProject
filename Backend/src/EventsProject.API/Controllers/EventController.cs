using EventsProject.API.Data;
using EventsProject.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


namespace EventsProject.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : ControllerBase
    {
        public IEnumerable<Event> _event = new List<Event>
            {
                new Event
                {
                    EventId = 1,
                    Theme = ".NET",
                    Local = "Mississipi",
                    Lot = "First Lot",
                    People = 500,
                    EventTime = DateTime.Now.AddDays(5).ToString(),
                    ImageURL = "/images/photo.png"
                }
            };

        private readonly DataContext _context;    
        public EventController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return _context.Events;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var eventItem =  _context.Events.FirstOrDefault(e => e.EventId == id );
            if(eventItem==null){
                return NotFound();
            }
            return Ok(eventItem);
        
        }


        [HttpPost]
        public IActionResult Post()
        {
            return Ok("I'm in the Post method!");
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id)
        {
            return Ok($"I'm in the Put method with id {id}!");
        }
    }
}
