const messages = [
    {message: 'Sometimes you just have to play the role of a fool to fool the fool who thinks they are fooling you.', character: 'Franziska von Karma'},
    {message: 'A lawyer is someone who smiles no matter how bad it gets.', character: 'Diego Armando / Godot'},
    {message: 'The guilty will always lie, to avoid being found out. There\'s no way to tell who is guilty and who is innocent! All that I can hope to do is get every defendant declared \"guilty\"! So I make that my policy.', character: 'Miles Edgeworth'},
    {message: 'No one can change the past. The only thing we can do is strive to make up for our mistakes. Why must we make up for our mistakes, you ask? Because in doing so... we can find the way back to our path. And once we\'ve found our path, we can move on from our past mistakes toward a brighter future.', character: 'Phoenix Wright'},
    {message: 'Our job is to find truth, no matter how painful it may be.', character: 'Miles Edgeworth'},
    {message: 'I hope you see the importance of evidence now. Also, hopefully you realize, things change depending on how you look at them. People, too. We never really know if our clients are guilty or innocent. All we can do is believe in them. And in order to believe in them, you have to believe in yourself.', character: 'Mia Fey'},
    {message: 'A defense attorney\'s job is to believe in people, and to believe until the bitter end.', character: 'Miles Edgeworth'},
    {message: 'It\'s only natural for living creatures to fight to protect their own lives. But what makes us human is that we fight for others. But who do you fight for? How hard must you fight...? That\'s the true measure of what human life is worth. We defense attorneys are warriors who are constantly challenged by that question. Even when the battle is over, and the bonds that connect us are severed... We always return... Time and time again.', character: 'Phoenix Wright'},
    {message: 'Evidence is everything. There is nothing more.', character: 'Kristoph Gavin'},
    {message: 'Achtung, baby! Today we play it my way!', character: 'Klavier Gavin'},
    {message: 'You can\'t cry yet. The only time a lawyer can cry is when it\’s all over.', character: 'Diego Armando / Godot'}
]; // Initializes an array that contains the default objects containing a quote from the ace attorney series and the character who said it

const addQuote = (message, character) => messages.push({message, character}); // A function that allows easy addition of quotes without editing the array manually
// You may add more Ace Attorney quotes using the function addQuote() under here:


const callMessage = () => {
    const randIndex = Math.floor(Math.random() * messages.length);
    console.log(`Good day! Here's a quote from Ace Attorney that you may find interesting:\n\n"${messages[randIndex].message}"\n\n ~ ${messages[randIndex].character}`)
}; // Prints to the console a random quote from a character in Ace Attorney

callMessage(); // Calls the callMessage() function