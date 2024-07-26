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
        public EventController() {}

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return _event;
        }

        [HttpGet("{id}")]
        public IEnumerable<Event> GetById(int id)
        {
            return _event.Where(Event => Event.EventId == id);
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
