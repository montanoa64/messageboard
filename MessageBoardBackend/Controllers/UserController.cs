using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        readonly ApiContext context;
        public UserController(ApiContext context)
        {
            this.context = context;
        }
        //id passed thru url
        [HttpGet("{id}")]
        public ActionResult Get(string id) {
            var user = context.Users.SingleOrDefault(u => u.Id == id);
            if (user == null)
                return NotFound("Email or Password incorrect");
            return Ok(user);
        }
    }
}