namespace EventsProject.API.Models{
    public class Event    {
        public int EventId { get; set; }
        public string Local { get; set; }
        public string EventTime { get; set; }
        public string Theme { get; set; }
        public int People { get; set; }
        public string Lot { get; set; }
        public string ImageURL { get; set; }


    }
}