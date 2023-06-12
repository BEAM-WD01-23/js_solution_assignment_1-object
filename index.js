//Assignemtn I
//question number:
//i
const userOneProfile = {
    name: "Abdu",
    age: 30,
    gender: "male",
    location: "Berlin",
    interest: ["reading", "clubing", "traveling"],
  };
  let showGender = userOneProfile.gender;
  let secondValueOfInterest = userOneProfile.interest[1];
  //console.log(showGender);
  //console.log(secondValueOfInterest);
  //
  //ii shallow 
  //let newUserOneProfile = Object.assign({}, userOneProfile);
  
//   newUserOneProfile.name = 'Patricia'; 
//   newUserOneProfile.gender = 'Female'; 
//   newUserOneProfile.location = 'Munich'; 

  //console.log(newUserOneProfile);//
  //console.log(userOneProfile)//
  //
  //iii deep
  let newUserOneProfile = JSON.parse(JSON.stringify(userOneProfile));
  newUserOneProfile.name = 'Patricia'; 
  newUserOneProfile.age = 40;
  newUserOneProfile.gender = 'Female'; 
  newUserOneProfile.location = 'Munich'; 
  newUserOneProfile.interest = ['jogging', 'video-gaming'];
  console.log(newUserOneProfile);
  console.log(userOneProfile);

//
//iv
console.log(`His/her name is ${newUserOneProfile.name} he/she is ${newUserOneProfile.age} year old. he/she is 
${newUserOneProfile.gender} he/she is living in ${newUserOneProfile.location} he/she loves: ${newUserOneProfile.interest}`)
  
//
//iv
  const actor = {
    name: "Tom Hardy",
    age: 30,
    location: "London",
    relationshipStatus: "Single",
    occupation: "Actor",
    bio: "I just want a bloody steak with some chips.",
    interests: ["football", "movies", "Holidays", "Music"],
    contact: {
      email: "tom.hardy@tomhardy.com",
      phone: "030123456767",
      mobile: "1712",
    },
  };
  //print the message: `Contact me at tom.hardy@tomhardy.com`
  const showMessage = `Contact me at ${actor.contact.email}`;
  console.log(showMessage);