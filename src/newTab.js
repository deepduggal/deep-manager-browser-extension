// Initial data
const goals = ['Practice Data Structures and Algorithms', 'Learn AWS', "Don't do other things"];
// const tabGroups = chrome.tabs.groups;

// DOM elements
const currentTask = "",
  goalsList = document.querySelectorAll('#goals-list');

// Add goals to UI
goalsList.innerHTML = ''; // reset
goals.forEach((goal) => {
  goalsList.innerHTML += `<li class="listItem">${goal}</li>`; // Add listItem
});