using System; 
using System.Collections.Generic; 
using Twilio; 
using Twilio.Rest.Api.V2010.Account; 
using Twilio.Types; 

namespace SBHacks.Services {

	public class TwilioService {
		 public static void sendMessage(String bodymessage) {
			var accountSid = Credentials.TwilioKey;
			var authToken = Credentials.TwilioToken; 
			TwilioClient.Init(accountSid, authToken); 
 
			var messageOptions = new CreateMessageOptions( 
				new PhoneNumber("whatsapp:+15622794424")); 
			messageOptions.From = new PhoneNumber("whatsapp:+14155238886");    
			messageOptions.Body = bodymessage;   
 
			var message = MessageResource.Create(messageOptions); 
			Console.WriteLine(message.Body); 
		} 
	}
}