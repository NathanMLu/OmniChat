using System;
using DefaultNamespace;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SBHacks.Controllers {

	[ApiController]
	[Route("[controller]")]
	public class UserController : ControllerBase {

		private readonly ILogger<UserController> _logger;

		public UserController(ILogger<UserController> logger) {
			_logger = logger;
		}

		[HttpPost]
		public User Post() {
			return new User {
				name = "NathanGetting",
				platform = "Discord",
				messageSent = new Message {
					LatestMessage = "This is message sent from discord",
					LatestTimestamp = DateTime.Now
				}
			};
		}

		[HttpGet]
		public User Get() {
			return new User {
				name = "NathanPosting",
				platform = "Discord",
				messageRecieved = new Message {
					LatestMessage = "This is a recieved message",
					LatestTimestamp = DateTime.Now
				},
			};
		}

	}
}