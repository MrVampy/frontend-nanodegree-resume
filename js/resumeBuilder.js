var bio = {
    "name":"Thomas",
    "role":"Software Developer",
    "contact":"+4542720996",
    "picture":"images/thomas.jpg",
    "welcome":"Hello and welcome to my resume.",
    "skills":"You name it and I can do it!"
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contact);
var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContact);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);
$("#header").append(formattedSkills);
