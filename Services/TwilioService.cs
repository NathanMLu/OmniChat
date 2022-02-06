using System;
using javax.jws;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace SBHacks.Services {
	class TwilioService {
		[WebMethod]
		public static void SendMessage(String bodyMessage) {
			const string accountSid = Credentials.TwilioKey;
			const string authToken = Credentials.TwilioToken;
			TwilioClient.Init(accountSid, authToken);

			var messageOptions = new CreateMessageOptions(
				new PhoneNumber("whatsapp:+15622794424")) {
				From = new PhoneNumber("whatsapp:+14155238886"),
				Body = bodyMessage
			};

			var message = MessageResource.Create(messageOptions);
			Console.WriteLine(message.Body);
		}
	}
}