'use strict';

import Badge from './browser/Badge.js';
import tabLimit from './features/tabLimit.js';
// import './features/new-tab-new-unfocused-group.js';
// import './features/search-interventions.js';
// import './features/omnibox.js';

// Initalizes the extension
const init = async () => {
  // Init
  Badge.setToTabsCount(); // update after installation

  // Add event listeners
  tabLimit(5);
  Badge.addListener.updateOnTabClose();
};

chrome.runtime.onInstalled.addListener(() => {
  init();
});

chrome.runtime.onStartup.addListener(() => {
  init();
});