var bio = {
    "name":"Thomas",
    "role":"Software Developer",
    "contacts": {
	"mobile":"+4542720996",
	"email":"thomas@baaschandersen.com",
	"github":"https://github.com/MrVampy",
	"location":"Borup, Denmark"
    },
    "picture":"images/thomas.jpg",
    "welcome":"Hello and welcome to my resume.",
    "skills": [
	"You name it and I can do it!","Loving the work","Making things automated"
    ]
}

var work = {
    "dates":"February 2014",
    "description":"Doing various software developer tasks with an ERP system called Microsoft Dynamics NAV",
    "employer":"Logos Consult A/S",
    "location":"Alleroed, Nordsjaelland, Denmark",
    "title":"Software developer"
}


var education = {
    "name":"Copenhagen Business School",
    "dates":"September 2007 - March 2013",
    "location":"Frederiksberg, Copenhagen",
    "major":"Business Administration and IT"
}

var project = {
    "name":"Resume",
    "type":"Website"
}


if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data",bio.skills[3]);
    $("#skills").append(formattedSkill);
}
