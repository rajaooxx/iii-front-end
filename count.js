

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  for(let i = 1; i <= 10; i++){
  	document.write(i);
 	await sleep(500);
  }
}

demo();