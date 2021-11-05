//Calls the testMethod() function to test isValidIP()
testMethod();

//Function for students to write
function isValidIP(str) {
  let ipArr = str.split('.');
  let numValid = 0;
  let validNums = false;
  let leadingZeros = false;
  let numZeros = 0;
  if(str.includes(' ') == true || str.includes('\n')){
    return false;
  }
  ipArr.forEach(x => {
    let isnum = /^\d+$/.test(x);
    //Check for valid number
    if(x >= 0 && x <= 255 && isnum == true) {
      numValid++;
    }
    else {
      validNums = false;
    }
    
    //Ensure no leading zeros (0.0.0.0 is true 01.02.03.04 is false)
    if(x.length > 1 && x[0] != 0) {
      leadingZeros = false;
      numZeros++;
    }
    else if(x.length == 1) {
      leadingZeros = false;
      numZeros++;
    }
    else {
      leadingZeros = true;
    }
    
    if(numValid == 4 && numZeros == 4) {
      validNums = true;
    }
  });
  
  if(ipArr.length == 4 && validNums == true && leadingZeros == false){
    return true;
  }
  else{
    return false;
  }
}

//Tests function students write
function testMethod() {
  //Correct Answers
  let correct = [true, true, true, false, false, false, false];
  //Test Cases
  let tests = [
    '1.2.3.4',
    '123.45.67.89',
    '0.0.0.0',
    '1e0.2e0.3e0',
    '1.2.3.4.5',
    '123.456.78.90',
    '123.045.067.089'
  ];
  //Keeps track of score
  let numCorrect = 0;

  //Writes each test out
  for(i = 0; i < correct.length; i++)
  {
    let yourAnswer = isValidIP(tests[i]);
    if(yourAnswer == correct[i])
    {
      numCorrect++;
    }
    console.log("----------------------------------------------------------");
    console.log(`Test #${i + 1}`);
    console.log(`Test: ${tests[i]}`);
    console.log(`Your Answer: ${yourAnswer}`);
    console.log(`Correct Answer: ${correct[i]}`);
  }

  console.log(`\n\n>>>>>You got ${numCorrect}/7 correct`);
}