export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    console.log(`count mount ${element.id}`, count);
  }
  const loop = (num) => {
    num += 1;
    if(num > 2) {
      return 0;
    } else {
      return num;
    }
  }
  element.addEventListener('click', () => setCounter( loop(counter) ));
  setCounter(0);
}
