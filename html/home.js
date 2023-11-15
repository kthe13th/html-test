var currentTab = "step1";

function showTab(tabName) {
  // Update the current tab
  currentTab = tabName;

  // Hide all tabs
  var tabs = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Display the current tab
  document.getElementById(currentTab).style.display = "block";

  // Update tab button colors
  updateTabButtonColors();
}

function updateTabButtonColors() {
  var tabButtons = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tabButtons.length; i++) {
    var button = tabButtons[i];
    var buttonTab = button.getAttribute("data-tab");
    button.classList.remove("active");
    if (buttonTab === currentTab) {
      button.classList.add("active", buttonTab);
    }
  }
}

// Show the first tab initially
showTab(currentTab);
