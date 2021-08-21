function printName(myName) {
  console.log(myName);
}
printName('David Aniebo');

var printResume = document.getElementById('print');
printResume.addEventListener('click', printIt);

function printIt(e) {
  console.log(`event type: ${e.type}`);
  window.print();
}
