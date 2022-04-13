function randomDate () {

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  let a = Math.floor(getRandomArbitrary(1,30))
  let b = Math.floor(getRandomArbitrary(1,12))
  let c = Math.floor(getRandomArbitrary(11,22))
  let randomDay = a.toString() + '-' + b +'-'+ '20' + c
  return randomDay 
}

console.log(randomDate())

// trying to create a random date generator