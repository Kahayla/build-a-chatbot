# Chatbot

## Problem statement

Create a Chatbot that recommends an animated movie based on the users answers.

The Chatbot needs to ask the user for their name and address them by their name throughout. The Chatbot will then ask a question to the user and the user will then answer the question. This process will continue until they reach the recommended outcome or no outcome is applicable.

## Inputs, processes and outputs

Inputs: userInput
Processes: determind correct answer based on the userInput and previous inputs.
Output: The next question or the answer to the question

## Test scenarios

Start: "Hi there my name is Archie and my job is to help you find the perfect animated movie for you to watch. But firtsly, what is your Name?"
Input: (Name)
Output: "Thats a nice name (Name), nice to meet you! Now please tell me do you enjoy watching animated films?"

Input: "no"
Output: "Well this is a bit awkward... kinda defeats my purpose completely but you do you I guess. Sorry I cant be much help to you today."
Input: "yes"
Output: "GREAT... I mean _ahem_ great. So do you like movies that will bring on the waterworks or movies that make you laugh?"

        //laugh path

Input: "laugh"
Output: "Well a movie that I guarantee will make you almost pee yourself is Shrek.
Happy with this choice?"
Input: "yes"
Output: "This is a top tier choice, enjoy watching Shrek!"

Input: "laugh"
Output: "Well a movie that I guarantee will make you almost pee yourself is Shrek.
Happy with this choice?"
Input: "no"
Output: "I get it, talking Donkeys are not for everybody Another movie I recommend is IceAge. Happy with this choice?"
Input: "yes"
Output: "You have a great taste in films (name). Enjoy watching IceAge!

Input: "no"
Output: "I get it, talking Donkeys are not for everybody Another movie I recommend is IceAge. Happy with this choice?"
Input: "no"
Output: "You're pretty hard to please (name)... well how about Kung fu Panda?"
Input: "yes"
Output: "FINALLY! I'm glad we could find you something to watch. Enjoy watching Kung Fu Panda!

Input: "no"
Output: "You're pretty hard to please (name)... well how about Kung fu Panda?"
Input: "no"
Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."

        //waterworks 'yes' path

Input: "waterworks"
Output: "Don't worry (Name) I wont tell anyone _wink_ Do you like movies with talking animals?"
Input: "yes"
Output: "I recommend you watch Finding Nemo. Are you happy with this choice?"
Input: "yes"
Output: "I am so thrilled you are happy with this choice (Name) I love this movie! Enjoy watching Finding Nemo!"

Input: "yes"
Output: "I recommend you watch Finding Nemo. Are you happy with this choice?"
Input: "no"
Output: "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?"
Input: "yes"
Output: "This movie always gets me in the feels, make sure you have a tissue box near you (Name). Enjoy watching The Lion King!"

Input: "yes"
Output: "I recommend you watch Finding Nemo. Are you happy with this choice?"
Input: "no"
Output: "Thats okay, another movie I recommend is The Lion King. Are you happy with this choice?"
Input: "no"
Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."

        //waterworks 'no' path

Input: "no"
Output: "Do you like movies with Magic?"
Input: "yes"
Output: "I recommend you watch Onwards. Are you happy with this choice?
Input: "yes"
Output: "You are in for an emotional rollercoaster with this film! Enjoy watching Onwards!"

Input: "yes"
Output: "I recommend you watch Onwards. Are you happy with this choice?
Input: "no"
Output: "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?"
Input: "yes"
Output: "I am so happy I could help you fid your perfect movie choice! Enjoy watching Inside Out!"

Input: "no"
Output: "Thats okay, another Movie I recommend is Inside Out. Are you happy with this choice?"
Input: "no"
Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."

Input: "no"
Output: "Do you like movies with Magic?"
Input: "no"
Output: "I recommend you watch Up. Are you happy with this choice?"
Input: "yes"
Output: "I love this movie so much. Enjoy watching Up!"

Input: "no"
Output: "I recommend you watch Up. Are you happy with this choice?"
Input: "no"
Output: "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?"
Input: "yes"
Output: "I love this movie so much. Enjoy watching Big Hero 6!

Input: "no"
Output: "Thats okay, another Movie I recommend is Big Hero 6. Are you happy with this choice?"
Input: "no"
Output: "I have run out of ideas (Name) sorry I couldn't help you find a movie for you to watch."
