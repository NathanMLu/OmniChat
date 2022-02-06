using System;
using System.Collections.Generic;
using System.Linq;
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
		public User PostData() {
			return new User {
				name = "NathanGetting",
				platform = "Discord",
				messageSent = new Message {
					latestMessage = "This is a post request (a message from the user)",
					latestTimestamp = DateTime.Now.ToString("HH:mm")
				}
			};
		}

		[HttpGet]
		public IEnumerable<User> GetData() {
			// return new User {
			// 	name = "NathanPosting",
			// 	platform = "Discord",
			// 	messageReceived = new Message {
			// 		latestMessage = "This is a get request (a message from discord)",
			// 		latestTimestamp = DateTime.Now.ToString("HH:mm")
			// 	},
			// };
			
			return Enumerable.Range(1,5).Select(index => new User {
				name = "NathanPosting",
				platform = "Discord",
				messageReceived = new Message {
					latestMessage = "This is a get request (a message from discord)",
					latestTimestamp = DateTime.Now.ToString("HH:mm")
				},
			}).ToArray();
		}

	}
}