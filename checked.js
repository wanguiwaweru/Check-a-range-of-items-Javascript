const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; // variable to hold last checked item

function handleCheck(e) {
  // Check if shift key is held down and item checked.
  let inBetween = false; // variable to determine
  if (e.shiftKey && this.checked) { // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
