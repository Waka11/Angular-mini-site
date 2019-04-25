var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andypavliuk11@gmail.com",
    pass: "7r7v10m10s8i"
  }
});

var mailOptions = {
  from: "andypavliuk11@gmail.com",
  to: "pavliuk_ak16@nuwm.edu.ua",
  subject: "Sending Email using Node.js",
  html: `<main> 
  <ul style='width:385px; '> 
  <li style=' '>
  <h5>Premier League news conferences - Klopp faces media</h5>
  <p>Former England boss Sven-Goran Eriksson "has never even thought" about the prospect of becoming Scotland manager. The Swede had reportedly applied to the Scottish FA as they begin their hunt for a successor to Alex McLeish, who was sacked last week. Howev… [+219 chars]</p>
  <p>For more information --> https://www.bbc.com/sport/live/football/48048586</p>
  </li> 
  <li style=' '>
  <h5>BBC Women's Footballer of the Year 2019 contender Sam Kerr - BBC Sport</h5>
  <p>Australia, Chicago Red Stars and Perth Glory's Sam Kerr is hoping to win the coveted BBC Women's Footballer of the Year 2019 award.
  Kerr joins Denmark and Vfl Wolfsburg forward Pernille Harder, Olympique Lyonnais' Ada Hegerberg from Norway, USA and Portland … [+312 chars]</p>
  <p>For more information --> https://www.bbc.co.uk/sport/av/football/47966148</p>
  </li> 
  <li style=' '>
  <h5>Sam Billings: England batsman injured for Kent v Glamorgan</h5>
  <p>Sam Billings has been on the books with Kent since he was eight One-Day Cup: Glamorgan v Kent
  Venue: Sophia Gardens, Cardiff Date: Thurs 25 April Time: 11:00 BST Coverage: Live commentary on the BBC Sport  website and app, and BBC Radio Kent DAB; updates on… [+977 chars]</p>
  <p>For more information --> https://www.bbc.com/sport/cricket/48045827</p>
  </li>
  <li style=' '>
  <h5>Man Utd 0-2 Man City: City show gulf in class in one-sided derby</h5>
  <p>Man City are 25 points better off then Man Utd in the Premier League
 Manchester City made 'The Theatre Of Dreams' a house of pain for Manchester United as they brutally demonstrated the gulf between a modern, upwardly mobile club and one in a state of disrep… [+5786 chars]</p>
  <p>For more information --> https://www.bbc.com/sport/football/48042480</p>
  </li>
  <li style=' '>
  <h5>Watch: World Snooker Championship - Lisowski & Murphy in action</h5>
  <p>Full BBC TV and online listings for day six of the World Snooker Championship.
  Thursday, 25 April
  Replays
  Highlights - 04:35-05:25, 07:25-08:10 &amp; 10:10-11:00, BBC Red Button
  Extra - 02:35-04:35, 05:25-07:25, 08:10-10:10 &amp; 11:00-13:00 BBC Red Butto… [+229 chars]</ p>
  <p>For more information --> https://www.bbc.com/sport/live/snooker/47311055</p>
  </li>
  </ul>
 </main>`
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
