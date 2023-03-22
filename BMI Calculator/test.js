// function to check if a number is prime
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // function to get the first n prime numbers
  function getPrimes(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }
  
  // function to print the distances between primes
  function printPrimeDistances(n) {
    const primes = getPrimes(n);
    let prevPrime = primes[0];
    for (let i = 1; i < primes.length; i++) {
      const distance = primes[i] - prevPrime;
      console.log(`${distance.toString().padStart(2, ' ')}\t${primes[i].toString().padStart(3, ' ')} - ${prevPrime.toString().padStart(3, ' ')}`);
      prevPrime = primes[i];
    }
  }
  
  // example usage
  printPrimeDistances(100);
  