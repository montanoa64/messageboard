using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    //json will be produce by this controller
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        // static list so that it persist on all request
        static List<Models.Message> messages = new List<Models.Message> {
            
                new Models.Message{
                    Owner = "John",
                    Text = "hello"
                },
                new Models.Message{
                    Owner = "Tim",
                    Text = "Hi"
                }
               
    };
        //function to create IEnmerable 
        // create a list of of Messages.cs
        public IEnumerable<Models.Message> Get() {
            return messages;
        }
        // post function
        // decorate to let browser know is post function
        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message) {
            // add the message posted from body to messages array
            messages.Add(message);
            return message;
        }
    }
}