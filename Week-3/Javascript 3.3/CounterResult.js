//explaination in readme last

function createIncrement() {
    let count = 0;
  
    function increment() {
      count++;
    }
  
    function log() {
      let message = count;
      console.log(message);
    }
  
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  
  increment();
  log();