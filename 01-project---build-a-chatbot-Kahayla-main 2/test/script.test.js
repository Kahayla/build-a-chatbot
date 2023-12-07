// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {

  it("should reply with correct response for: Name, no", () => {
    // Input: (Name)
    const botReply1 = getBotReply("Jack");
    // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
    const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
    
    expect(botReply1).toEqual(expectedReply1);
    // Input: "no"
    const botReply2 = getBotReply("no");
    // Output: "Well this is a bit awkward... kinda defeats my purpose completely but you do you I guess. Sorry I cant be much help to you today."
    const expectedReply2 = "Well this is a bit awkward... kinda defeats my purpose completely but you do you I guess. Sorry I cant be much help to you today. If you want to restart type 'restart' or type 'random' for a randomly selected movie";
      
    expect(botReply2).toEqual(expectedReply2);

  });
  

  // laugh path

  it("should reply with correct response for: Name, yes, laugh, yes", () => {

    // Input: (Name)
    const botReply1 = getBotReply("Jack");
    // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
    const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
    
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
    const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
  
    expect(botReply2).toEqual(expectedReply2);

    // Input: "laugh"
    const botReply3 = getBotReply("laugh");
    // Output: "Well a movie that I guarantee will make you almost pee yourself is Shrek.
    const expectedReply3 = "Well a movie that I guarantee will make you almost pee yourself is Shrek. Happy with this choice?"

    expect(botReply3).toEqual(expectedReply3);

    // Input: "yes"
    const botReply4 = getBotReply("yes");
    // Output: "This is a top tier choice, enjoy watching Shrek!"
    const expectedReply4 = "This is a top tier choice, enjoy watching Shrek! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

    expect(botReply4).toEqual(expectedReply4);
   
  });


  it("should reply with correct response for: Name, yes, laugh, no, yes ", () => {

    // Input: (Name)
    const botReply1 = getBotReply("Jack");
    // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
    const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
    
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
    const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
  
    expect(botReply2).toEqual(expectedReply2);

    // Input: "laugh"
    const botReply3 = getBotReply("laugh");
    // Output: "Well a movie that I guarantee will make you almost pee yourself is Shrek.
    const expectedReply3 = "Well a movie that I guarantee will make you almost pee yourself is Shrek. Happy with this choice?"
    
    expect(botReply3).toEqual(expectedReply3);   

    // Input: "no"
    const botReply4 = getBotReply("no");
    // Output: "I get it, talking Donkeys are not for everybody Another movie I recommend is IceAge. Happy with this choice?"
    const expectedReply4 = "I get it, talking Donkeys are not for everybody. Another movie I recommend is IceAge. Happy with this choice?"
    
    expect(botReply4).toEqual(expectedReply4);   
    
    // Input: "yes"
    const botReply5 = getBotReply("yes");
    // Output: "You have a great taste in films (name). Enjoy watching IceAge!
    const expectedReply5 = "You have a great taste in films Jack. Enjoy watching IceAge! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

    expect(botReply5).toEqual(expectedReply5);   
    
  });
  it("should reply with correct response for: Name, yes, laugh, no, no, yes ", () => {

    // Input: (Name)
    const botReply1 = getBotReply("Jack");
    // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
    const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
    
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
    const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
  
    expect(botReply2).toEqual(expectedReply2);

    // Input: "laugh"
    const botReply3 = getBotReply("laugh");
    // Output: "Well a movie that I guarantee will make you almost pee yourself is Shrek.
    const expectedReply3 = "Well a movie that I guarantee will make you almost pee yourself is Shrek. Happy with this choice?"
    
    expect(botReply3).toEqual(expectedReply3);   

    // Input: "no"
    const botReply4 = getBotReply("no");
    // Output: "I get it, talking Donkeys are not for everybody Another movie I recommend is IceAge. Happy with this choice?"
    const expectedReply4 = "I get it, talking Donkeys are not for everybody. Another movie I recommend is IceAge. Happy with this choice?"
    
    expect(botReply4).toEqual(expectedReply4);   
    
    // Input: "no"
    const botReply5 = getBotReply("no");
    // Output: "You have a great taste in films (name). Enjoy watching IceAge!
    const expectedReply5 = "You're pretty hard to please Jack... well how about Kung fu Panda?"

    expect(botReply5).toEqual(expectedReply5);   

    // Input: "yes"
    const botReply6 = getBotReply("yes");
    // Output: "FINALLY! I'm glad we could find you something to watch. Enjoy watching Kung Fu Panda!
    const expectedReply6 = "FINALLY! I'm glad we could find you something to watch. Enjoy watching Kung Fu Panda! If you want to restart type 'restart' or type 'random' for a randomly selected movie"
    
    expect(botReply6).toEqual(expectedReply6); 
  });

  it("should reply with correct response for: Name, yes, laugh, no, no, no ", () => {
    // Input: (Name)
    const botReply1 = getBotReply("Jack");
    // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
    const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
    
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
    const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
  
    expect(botReply2).toEqual(expectedReply2);

    // Input: "laugh"
    const botReply3 = getBotReply("laugh");
    // Output: "Well a movie that I guarantee will make you almost pee yourself is Shrek.
    const expectedReply3 = "Well a movie that I guarantee will make you almost pee yourself is Shrek. Happy with this choice?"
    
    expect(botReply3).toEqual(expectedReply3);   

    // Input: "no"
    const botReply4 = getBotReply("no");
    // Output: "I get it, talking Donkeys are not for everybody Another movie I recommend is IceAge. Happy with this choice?"
    const expectedReply4 = "I get it, talking Donkeys are not for everybody. Another movie I recommend is IceAge. Happy with this choice?"
    
    expect(botReply4).toEqual(expectedReply4);   
    
    // Input: "no"
    const botReply5 = getBotReply("no");
    // Output: "You have a great taste in films (name). Enjoy watching IceAge!
    const expectedReply5 = "You're pretty hard to please Jack... well how about Kung fu Panda?"

    expect(botReply5).toEqual(expectedReply5);   

    // Input: "no"
    const botReply6 = getBotReply("no");
    // Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch.
    const expectedReply6 = "I have run out of ideas Jack sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie"
    
    expect(botReply6).toEqual(expectedReply6); 
  });

  it("should reply with correct response for: Name, yes, waterworks, yes, yes", () => {
    // Input: (Name)
    const botReply1 = getBotReply("Jack");
    // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
    const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
    
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
    const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
  
    expect(botReply2).toEqual(expectedReply2);
    // Input: "waterworks"
    const botReply3 = getBotReply("waterworks");
    // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
    const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"

    expect(botReply3).toEqual(expectedReply3);

    // Input: "yes"
    const botReply4 = getBotReply("yes");
    // Output: "I recommend you watch Finding Nemo. Are you happy with this choice?"
    const expectedReply4 = "I recommend you watch Finding Nemo. Are you happy with this choice?"

    expect(botReply4).toEqual(expectedReply4);   

    // Input: "yes"
    const botReply5 = getBotReply("yes");
    // Output: "I am so thrilled you are happy with this choice (Name) I love this movie! Enjoy watching Finding Nemo!"
    const expectedReply5 = "I am so thrilled you are happy with this choice Jack I love this movie! Enjoy watching Finding Nemo! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

    expect(botReply5).toEqual(expectedReply5);  
      });

      it("should reply with correct response for: Name, yes, waterworks, yes, no, yes", () => {
        // Input: (Name)
        const botReply1 = getBotReply("Jack");
        // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
        const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
        
        expect(botReply1).toEqual(expectedReply1);
    
        const botReply2 = getBotReply("yes");
        // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
        const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
      
        expect(botReply2).toEqual(expectedReply2);
        // Input: "waterworks"
        const botReply3 = getBotReply("waterworks");
        // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
        const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
    
        expect(botReply3).toEqual(expectedReply3);
    
        // Input: "yes"
        const botReply4 = getBotReply("yes");
        // Output: "I recommend you watch Finding Nemo. Are you happy with this choice?"
        const expectedReply4 = "I recommend you watch Finding Nemo. Are you happy with this choice?"
    
        expect(botReply4).toEqual(expectedReply4);   
    
        // Input: "no"
        const botReply5 = getBotReply("no");
        // Output: "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?"
        const expectedReply5 = "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?"
    
        expect(botReply5).toEqual(expectedReply5);  

         // Input: "yes"
        const botReply6 = getBotReply("yes");
        // Output: "This movie always gets me in the feels, make sure you have a tissue box near you (Name). Enjoy watching The Lion King!"
        const expectedReply6 = "This movie always gets me in the feels, make sure you have a tissue box near you Jack. Enjoy watching The Lion King! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

        expect(botReply6).toEqual(expectedReply6);
          });

          it("should reply with correct response for: Name, yes, waterworks, yes, no, no", () => {
            // Input: (Name)
            const botReply1 = getBotReply("Jack");
            // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
            const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
            
            expect(botReply1).toEqual(expectedReply1);
        
            const botReply2 = getBotReply("yes");
            // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
            const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
          
            expect(botReply2).toEqual(expectedReply2);
            // Input: "waterworks"
            const botReply3 = getBotReply("waterworks");
            // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
            const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
        
            expect(botReply3).toEqual(expectedReply3);
        
            // Input: "yes"
            const botReply4 = getBotReply("yes");
            // Output: "I recommend you watch Finding Nemo. Are you happy with this choice?"
            const expectedReply4 = "I recommend you watch Finding Nemo. Are you happy with this choice?"
        
            expect(botReply4).toEqual(expectedReply4);   
        
            // Input: "no"
            const botReply5 = getBotReply("no");
            // Output: "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?"
            const expectedReply5 = "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?"
        
            expect(botReply5).toEqual(expectedReply5);  
    
             // Input: "no"
            const botReply6 = getBotReply("no");
            // Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."
            const expectedReply6 = "I have run out of ideas Jack sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie"
    
            expect(botReply6).toEqual(expectedReply6);
              });
    
    it("should reply with correct response for: Name, yes, waterworks, no, yes, yes", () => {
      // Input: (Name)
      const botReply1 = getBotReply("Jack");
      // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
      const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
      
      expect(botReply1).toEqual(expectedReply1);
  
      const botReply2 = getBotReply("yes");
      // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
      const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
    
      expect(botReply2).toEqual(expectedReply2);
      // Input: "waterworks"
      const botReply3 = getBotReply("waterworks");
      // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
      const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
  
      expect(botReply3).toEqual(expectedReply3)

      // Input: "no"
      const botReply4 = getBotReply("no");
      // Output: "Do you like movies with Magic?"
      const expectedReply4 = "Do you like movies with Magic?"

      expect(botReply4).toEqual(expectedReply4);

      // Input: "yes"
      const botReply5 = getBotReply("yes");
      // Output: "I recommend you watch Onwards. Are you happy with this choice?
      const expectedReply5 ="I recommend you watch Onward. Are you happy with this choice?"

      expect(botReply5).toEqual(expectedReply5);

      // Input: "yes"
      const botReply6 = getBotReply("yes");
      // Output: "You are in for an emotional rollercoaster with this film! Enjoy watching Onwards!"
      const expectedReply6 = "You are in for an emotional rollercoaster with this film! Enjoy watching Onward! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

      expect(botReply6).toEqual(expectedReply6);
    });

    it("should reply with correct response for: Name, yes, waterworks, no, yes, no, yes", () => {
      // Input: (Name)
      const botReply1 = getBotReply("Jack");
      // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
      const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
      
      expect(botReply1).toEqual(expectedReply1);
  
      const botReply2 = getBotReply("yes");
      // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
      const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
    
      expect(botReply2).toEqual(expectedReply2);
      // Input: "waterworks"
      const botReply3 = getBotReply("waterworks");
      // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
      const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
  
      expect(botReply3).toEqual(expectedReply3)

      // Input: "no"
      const botReply4 = getBotReply("no");
      // Output: "Do you like movies with Magic?"
      const expectedReply4 = "Do you like movies with Magic?"

      expect(botReply4).toEqual(expectedReply4);

      // Input: "yes"
      const botReply5 = getBotReply("yes");
      // Output: "I recommend you watch Onwards. Are you happy with this choice?
      const expectedReply5 ="I recommend you watch Onward. Are you happy with this choice?"

      expect(botReply5).toEqual(expectedReply5);

      // Input: "no"
      const botReply6 = getBotReply("no");
      // Output: "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?"
      const expectedReply6 = "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?"

      expect(botReply6).toEqual(expectedReply6);

      // Input: "yes"
      const botReply7 = getBotReply("yes");
      // Output: "I am so happy I could help you find your perfect movie choice! Enjoy watching Inside Out!"
      const expectedReply7 = "I am so happy I could help you find your perfect movie choice! Enjoy watching Inside Out! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

      expect(botReply7).toEqual(expectedReply7);

    });

    it("should reply with correct response for: Name, yes, waterworks, no, yes, no, no", () => {
      // Input: (Name)
      const botReply1 = getBotReply("Jack");
      // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
      const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
      
      expect(botReply1).toEqual(expectedReply1);
  
      const botReply2 = getBotReply("yes");
      // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
      const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
    
      expect(botReply2).toEqual(expectedReply2);
      // Input: "waterworks"
      const botReply3 = getBotReply("waterworks");
      // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
      const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
  
      expect(botReply3).toEqual(expectedReply3)

      // Input: "no"
      const botReply4 = getBotReply("no");
      // Output: "Do you like movies with Magic?"
      const expectedReply4 = "Do you like movies with Magic?"

      expect(botReply4).toEqual(expectedReply4);

      // Input: "yes"
      const botReply5 = getBotReply("yes");
      // Output: "I recommend you watch Onwards. Are you happy with this choice?
      const expectedReply5 ="I recommend you watch Onward. Are you happy with this choice?"

      expect(botReply5).toEqual(expectedReply5);

      // Input: "no"
      const botReply6 = getBotReply("no");
      // Output: "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?"
      const expectedReply6 = "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?"

      expect(botReply6).toEqual(expectedReply6);

      // Input: "no"
      const botReply7 = getBotReply("no");
      // Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."
      const expectedReply7 = "I have run out of ideas Jack sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie"

      expect(botReply7).toEqual(expectedReply7);

    });

    it("should reply with correct response for: Name, yes, waterworks, no, no, yes", () => {
      // Input: (Name)
      const botReply1 = getBotReply("Jack");
      // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
      const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
      
      expect(botReply1).toEqual(expectedReply1);
  
      const botReply2 = getBotReply("yes");
      // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
      const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
    
      expect(botReply2).toEqual(expectedReply2);
      // Input: "waterworks"
      const botReply3 = getBotReply("waterworks");
      // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
      const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
  
      expect(botReply3).toEqual(expectedReply3)

      // Input: "no"
      const botReply4 = getBotReply("no");
      // Output: "Do you like movies with Magic?"
      const expectedReply4 = "Do you like movies with Magic?"

      expect(botReply4).toEqual(expectedReply4);

      // Input: "no"
      const botReply5 = getBotReply("no");
      // Output: "I recommend you watch Up. Are you happy with this choice?"
      const expectedReply5 = "I recommend you watch Up. Are you happy with this choice?"


      expect(botReply5).toEqual(expectedReply5);

      // Input: "yes"
      const botReply6 = getBotReply("yes");
      // Output: "I love this movie so much. Enjoy watching Up!"
      const expectedReply6 = "I love this movie so much. Enjoy watching Up! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

      expect(botReply6).toEqual(expectedReply6);
      
    });
  
    it("should reply with correct response for: Name, yes, waterworks, no, no, no, yes", () => {
      // Input: (Name)
      const botReply1 = getBotReply("Jack");
      // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
      const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
      
      expect(botReply1).toEqual(expectedReply1);
  
      const botReply2 = getBotReply("yes");
      // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
      const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
    
      expect(botReply2).toEqual(expectedReply2);
      // Input: "waterworks"
      const botReply3 = getBotReply("waterworks");
      // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
      const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
  
      expect(botReply3).toEqual(expectedReply3)

      // Input: "no"
      const botReply4 = getBotReply("no");
      // Output: "Do you like movies with Magic?"
      const expectedReply4 = "Do you like movies with Magic?"

      expect(botReply4).toEqual(expectedReply4);

      // Input: "no"
      const botReply5 = getBotReply("no");
      // Output: "I recommend you watch Up. Are you happy with this choice?"
      const expectedReply5 = "I recommend you watch Up. Are you happy with this choice?"


      expect(botReply5).toEqual(expectedReply5);

      // Input: "no"
      const botReply6 = getBotReply("no");
      // Output: "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?"
      const expectedReply6 = "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?"

      expect(botReply6).toEqual(expectedReply6);

      // Input: "yes"
      const botReply7 = getBotReply("yes");
      // Output: "I love this movie so much. Enjoy watching Big Hero 6!
      const expectedReply7 = "I love this movie so much. Enjoy watching Big Hero 6! If you want to restart type 'restart' or type 'random' for a randomly selected movie"

      expect(botReply7).toEqual(expectedReply7);
      
    });

    it("should reply with correct response for: Name, yes, waterworks, no, no, no, no", () => {
      // Input: (Name)
      const botReply1 = getBotReply("Jack");
      // Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"
      const expectedReply1 = "Thats a nice name Jack, nice to meet you! Now please tell me do you enjoy watching animated films?"
      
      expect(botReply1).toEqual(expectedReply1);
  
      const botReply2 = getBotReply("yes");
      // Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"
      const expectedReply2 = "GREAT... I mean *ahem* great. So do you like movies that will bring on the waterworks or movies that make you laugh?";
    
      expect(botReply2).toEqual(expectedReply2);
      // Input: "waterworks"
      const botReply3 = getBotReply("waterworks");
      // Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
      const expectedReply3 = "Don't worry Jack I wont tell anyone *wink* Do you like movies with talking animals?"
  
      expect(botReply3).toEqual(expectedReply3)

      // Input: "no"
      const botReply4 = getBotReply("no");
      // Output: "Do you like movies with Magic?"
      const expectedReply4 = "Do you like movies with Magic?"

      expect(botReply4).toEqual(expectedReply4);

      // Input: "no"
      const botReply5 = getBotReply("no");
      // Output: "I recommend you watch Up. Are you happy with this choice?"
      const expectedReply5 = "I recommend you watch Up. Are you happy with this choice?"


      expect(botReply5).toEqual(expectedReply5);

      // Input: "no"
      const botReply6 = getBotReply("no");
      // Output: "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?"
      const expectedReply6 = "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?"

      expect(botReply6).toEqual(expectedReply6);

      // Input: "no"
      const botReply7 = getBotReply("no");
      // Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."
      const expectedReply7 = "I have run out of ideas Jack sorry I couldn't help you find a movie for you to watch. If you want to restart type 'restart' or type 'random' for a randomly selected movie"

      expect(botReply7).toEqual(expectedReply7);
      
    });
});
