/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
const yesValues = "yes" || "yup" || "yeah" || "y"
const noValues = "no" || "nope" || "n" || "nah"
const randomMovies = ["Shrek", "Ice Age", "Kung-Fu Panda", "Up", "Onward", "Big Hero 6", "Finding Nemo", "The Lion King", "Inside Out"]

let level = 1;
let path; 
let name;



  const getRandomMovie = (randomMovieArray) => {
  const randomIndex = Math.floor(Math.random() * randomMovieArray.length);
  const randomMovie = randomMovieArray[randomIndex];
  return randomMovie;
}

const getBotReply = (msg) => {
  if (msg.toLowerCase() === "random") {
    return `And your random movie is .........drum roll........ ${getRandomMovie(randomMovies)}!`
  }

  if (msg.toLowerCase() === "restart") {
    return "Hi there my name is Archie and my job is to help you find the perfect animated moie for you to watch. <br /><br />But firstly, what is your Name?"
  }
  
  if (level === 1) {
      level ++;
      name = msg;
      return `Thats a nice name ${name}, nice to meet you! Now please tell me do you enjoy watching animated films?`;
  } 

  if (level === 2) {
    level ++;
    if (msg.toLowerCase() === yesValues) {
        // path = "yes";
        return "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
      }
      
      if (msg.toLowerCase() === noValues) {
        // path = "no";
        return "Well this is a bit awkward... kinda defeats my purpose completely but you do you I guess. Sorry I cant be much help to you today. If you want to restart type 'restart' or type 'random' for a randomly selected movie";
      }
     
  } 

  if (level === 3) {
    level ++;
    if (msg.toLowerCase() === "laugh") {
        path = "laugh";
        return "Well a movie that I guarantee will make you almost pee yourself is Shrek. Happy with this choice?";
      }
      
      if (msg.toLowerCase() === "waterworks") {
        path = "waterworks";
        return `Don't worry ${name} I wont tell anyone *wink* Do you like movies with talking animals?`;
      }

  }

  if (level === 4 && path === "laugh") {
    level ++;
    if (msg.toLowerCase() === yesValues) {
        return "This is a top tier choice, enjoy watching Shrek! If you want to restart type 'restart' or type 'random' for a randomly selected movie";
      }
      
      if (msg.toLowerCase() === noValues) {
        path = "iceage";
        return "I get it, talking Donkeys are not for everybody. Another movie I recommend is IceAge. Happy with this choice?";
      }
  }
  if (level === 4 && path === "waterworks") {
    level ++;
    if (msg.toLowerCase() === yesValues) {
        path = "nemo";
        return "I recommend you watch Finding Nemo. Are you happy with this choice?";
      }
      
      if (msg.toLowerCase() === noValues) {
        path = "magic";
        return "Do you like movies with Magic?";
      }
  }

   if (level === 5 && path === "iceage") {
     level ++;
     if (msg.toLowerCase() === yesValues) {
         return `You have a great taste in films ${name}. Enjoy watching IceAge! If you want to restart type 'restart' or type 'random' for a randomly selected movie`;
       }
      
       if (msg.toLowerCase() === noValues) {
         path = "kungfupanda";
         return `You're pretty hard to please ${name}... well how about Kung fu Panda?`;
       }
   }
   if (level === 5 && path === "nemo") {
    level ++;
    if (msg.toLowerCase() === yesValues) {
        path = "nemo";
        return `I am so thrilled you are happy with this choice ${name} I love this movie! Enjoy watching Finding Nemo! If you want to restart type 'restart' or type 'random' for a randomly selected movie`;
      }
      if (msg.toLowerCase() === noValues) {
        path = "lionking"
        return "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?";
      }

  }

  if (level === 5 && path === "magic") {
    level ++;
    if (msg.toLowerCase() === yesValues) {
        path = "onward";
        return "I recommend you watch Onward. Are you happy with this choice?";
      }
      if (msg.toLowerCase() === noValues) {
        path = "up"
        return "I recommend you watch Up. Are you happy with this choice?";
      }

  }

   if (level === 6 && path === "kungfupanda") {
    level ++;
    if (msg.toLowerCase() === yesValues) {
        return "FINALLY! I'm glad we could find you something to watch. Enjoy watching Kung Fu Panda! If you want to restart type 'restart' or type 'random' for a randomly selected movie";
      } 
     
      if (msg.toLowerCase() === noValues) {
        return `I have run out of ideas ${name} sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie`;
      }
  }

  if (level === 6 && path === "lionking") {
    level ++;
      if (msg.toLowerCase() === yesValues) {
        return `This movie always gets me in the feels, make sure you have a tissue box near you ${name}. Enjoy watching The Lion King! If you want to restart type 'restart' or type 'random' for a randomly selected movie`
      }
      if (msg.toLowerCase() === noValues) {
        return `I have run out of ideas ${name} sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie`;
      }
  }

  if (level === 6 && path === "onward") {
    level ++;
      if (msg.toLowerCase() === yesValues) {
        return "You are in for an emotional rollercoaster with this film! Enjoy watching Onward! If you want to restart type 'restart' or type 'random' for a randomly selected movie"
      }
      if (msg.toLowerCase() === noValues) {
        path = "insideout"
        return "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?";
      }
  }

  if (level === 6 && path === "up") {
    level ++;
      if (msg.toLowerCase() === yesValues) {
        return "I love this movie so much. Enjoy watching Up! If you want to restart type 'restart' or type 'random' for a randomly selected movie"
      }
      if (msg.toLowerCase() === noValues) {
        path = "bighero6"
        return "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?";
      }
  }
  
  if (level === 7 && path === "insideout") {
    level ++;
      if (msg.toLowerCase() === yesValues) {
        return "I am so happy I could help you find your perfect movie choice! Enjoy watching Inside Out! If you want to restart type 'restart' or type 'random' for a randomly selected movie"
      }
      if (msg.toLowerCase() === noValues) {
        return `I have run out of ideas ${name} sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie`;
      }
  }

  if (level === 7 && path === "bighero6") {
    level ++;
      if (msg.toLowerCase() === yesValues) {
        return "I love this movie so much. Enjoy watching Big Hero 6! If you want to restart type 'restart' or type 'random' for a randomly selected movie"
      }
      if (msg.toLowerCase() === noValues) {
        return `I have run out of ideas ${name} sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie`;
      }
  }
  //  else  { return 'sorry i didnt understand your answer please try again '}

};

export { getBotReply };
