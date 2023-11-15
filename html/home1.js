var currentTabz = "steps1";

function showTabz(tabNamez) {
  var stepsNumber = parseInt(currentTabz.replace("steps", ""));

  if (tabNamez === 'prevz') {
    if (stepsNumber === 1) {
      currentTabz = 'steps9';
    } else {
      currentTabz = 'steps' + (stepsNumber - 1);
    }
  } else if (tabNamez === 'nextz') {
    if (stepsNumber === 9) {
      currentTabz = 'steps1';
    } else {
      currentTabz = 'steps' + (stepsNumber + 1);
    }
  }

  // Hide all tabs
  var tabzs = document.getElementsByClassName("tabcontentz");
  for (var i = 0; i < tabzs.length; i++) {
    tabzs[i].style.display = "none";
  }

  // Display the current tab
  document.getElementById(currentTabz).style.display = "block";
}

// Show the first tab initially
showTabz(currentTabz);
