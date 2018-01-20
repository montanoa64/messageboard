using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        readonly ApiContext context;
        public AuthController(ApiContext context)
        {
            this.context = context;
        }
        public class JwtPacket {
            public string Token { get; set; }
            public string FirstName { get; set; }
        }
        public class LoginData {
            public string Email { get; set; }
            public string Password { get; set; }
        }
        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginData loginData) {
            var user = context.Users.SingleOrDefault(u => u.email == loginData.Email && u.password == loginData.Password);
            if (user == null)
                return NotFound("Email or Password incorrect");
            return Ok(CreateJwtPacket(user));

        }
        [HttpPost("register")]
        public JwtPacket Register([FromBody] Models.User user) {
            
            context.Users.Add(user);
            context.SaveChanges();
            return CreateJwtPacket(user);
            
        }

        private JwtPacket CreateJwtPacket(Models.User user) {
            var claims = new Claim[] {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
            };
            var jwt = new JwtSecurityToken(claims: claims);
            var encodedJwt = new JwtSecurityTokenHandler
                ().WriteToken(jwt);
            return new JwtPacket() { Token = encodedJwt, FirstName = user.firstName };
        }
        
    }
}