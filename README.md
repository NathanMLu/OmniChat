# SB-Hacks

Won "Best Creating Change Hack" and "Most Creative Use of Twilio"

https://devpost.com/software/omnichat

## Inspiration
After downloading and signing up for different messaging apps almost every week due to classes, companies, and friends, we decided that enough was enough. We wanted something easy so that we could communicate with others without having the hassle of constantly signing up for a new service.

## What it does
OmniChat is a smart social platform that unifies all messaging apps by importing contacts and allowing you to talk to people who use different social platforms. If you have friends who use other social platforms already, all you need to do is sign in once, and all your contacts will be imported, ready for you to message! You can add as many contacts as you like, from countless different social platforms. The easy-to-use interface simplifies staying in contact with others, especially for those who have a difficult time getting used to new technologies.

## How we built it
We used ASP.Net Core and C# for server-side integrations with the various APIs we had to use in order to link multiple social platforms. ReactJS and Bootstrap were used for the front end, along with basic design in Figma. We used webhooks to receive messages from the different clients and post requests through the APIs to send out messages. Some of the APIs we used were Twilio, Discord, Meta, and Line.

## Challenges we ran into
Our team came together last minute - no, literally last minute. We submitted our applications a minute before the deadline and weren't even sure if we would be allowed to attend. Due to scheduling issues, two of our teammates weren't able to participate, and the workload was shifted onto the remaining two team members. Towards the end of the hackathon, we discovered that interacting between the backend and frontend was more difficult than we had thought, and had to use some creative strategies to get past that.

## Accomplishments that we're proud of
We're proud that we designed a full-stack application is such a short amount of time, integrating technologies that were new to us like the .NET framework and JSON Serialization.

## What we learned
We learned that even though doing something as simple as sending metadata from the backend to the front end seems simple, it can be much more challenging. We learned not to underestimate simple problems, and how to push through even when the work seemed like too much.

## What's next for OmniChat
In the future, we hope to integrate with more API's in a more streamlined manner. At the moment, API's such as the Messenger API does not allow us to send messages as the user, instead, we have to create a bot account to mimic the real user's actual identity. We hope to improve our UI and simplify the process for adding new social channels.
