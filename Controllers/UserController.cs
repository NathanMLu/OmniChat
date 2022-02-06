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
		private int count = 0;
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
			
			//create a list of type user
			List<User> users = new List<User>();
			users.Add(new User {
				name = "Silvia",
				platform = "Discord",
				messageReceived = new Message {
					latestMessage = "hey Nate, are you free later?",
					latestTimestamp = DateTime.Now.ToString("HH:mm")
				},
				id = count++
			});

			users.Add(new User {
				name = "Bald Samurai",
				platform = "Discord",
				messageReceived = new Message {
					latestMessage = "Let's play some cod later bro",
					latestTimestamp = "5:45"
				},
				id = count++
			});
			
			users.Add(new User {
				name = "Nicholas",
				platform = "WhatsApp",
				messageReceived = new Message {
					latestMessage = "Hi, I was just following up about the meeting",
					latestTimestamp = "11:27"
				},
				id = count++
			});
			
			users.Add(new User {
				name = "William S.",
				platform = "WeChat",
				messageReceived = new Message {
					latestMessage = "Can you help me with something? I can't fix it",
					latestTimestamp = "10:00"
				},
				id = count++
			});
			
			users.Add(new User {
				name = "Ashley :)",
				platform = "SnapChat",
				messageReceived = new Message {
					latestMessage = "Hiii it's been so long how have you been?",
					latestTimestamp = "2:34"
				},
				id = count++
			});

			return users.ToArray();
		}

	}
}