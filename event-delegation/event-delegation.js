//Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object

const keyupHandler = (e) => {
  e.stopPropagation();
  console.log(e);
  console.log(e.target);
  if (e.target.id === "upperCase") {
    e.target.value = e.target.value.toUpperCase();
  }
};

function keyupHandler2(e) {
  e.stopPropagation();
}
