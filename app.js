// greeting
const name = prompt('Please Enter Your Name');
function greetUser(username) {
    return "Hello!! Welcome " + username + ". " + "We're thrilled to have you here. Explore, discover, and make yourself at home. Whether you're seeking any website designing services or simply looking to indulge your curiosity, you're in the right place. We hope your time here is both enjoyable and rewarding."
}
const greeting = greetUser(name);
console.log(greeting);

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const userNumber = parseInt(prompt("Please enter a positive integer:"));
  
  const result = isPrime(userNumber);
  
  if (result) {
    console.log(`${userNumber} is a prime number.`);
  } else {
    console.log(`${userNumber} is not a prime number.`);
  }
  