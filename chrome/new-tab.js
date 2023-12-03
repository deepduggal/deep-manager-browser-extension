// Initial data
const goals = ['Practice Data Structures and Algorithms', 'Learn AWS</li>', "Don't do other things"];
const tabGroups = chrome.tabs.groups;

// DOM elements
const currentTask = "",
  goalListElem = document.querySelector('#goals-list > ul'),
  tabGroupsElem = document.querySelector('#tab-groups-list > ul');

// Add goals to UI
goals.map((goal) => {
  goalListElem.innerHTML = '';
  goalListElem.innerHTML += `<li>${goal}</li>`;
});

// Add active tab groups to UI
tabGroups.map((tabGroup) => {
  tabGroupsElem.innerHTML = '';
  tabGroupsElem.innerHTML += `<li>${tabGroup}</li>`;
});