document.addEventListener("DOMContentLoaded", function(event) {
  let checkboxes = document.getElementsByTagName('input');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', clickHandler);
  }
});

function clickHandler() {
  if(this.checked) {
    this.parentNode.className = 'checked';
  } else {
    this.parentNode.className = '';
  }
}
