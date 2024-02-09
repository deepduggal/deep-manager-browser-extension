
async function focusOnTabAndWindow(tab) {
  var windowId = tab.windowId;
  var tabId;
  if (!!tab.tabId) {
    tabId = tab.tabId;
  } else {
    tabId = tab.id;
  }

  chrome.windows.update(windowId, { focused: true }).then(function (tabId, windowId) {
    chrome.tabs.update(tabId, { active: true }).then(function (tabId, windowId) {
      tabActiveChanged({ tabId: tabId, windowId: windowId });
    }.bind(this, tabId, windowId));
  }.bind(this, tabId, windowId));
}

function focusOnWindow(windowId) {
  chrome.windows.update(windowId, { focused: true });
}

async function openSidebar() {
  await chrome.sidebarAction.open();
}

async function openPopup() {
  // await chrome.action.setPopup({ popup: "popup.html?popup=true" });
  await chrome.action.openPopup();
}

async function openOptions() {
  await chrome.runtime.openOptionsPage();
}

async function openTab(url) {
  await chrome.tabs.create({ url: url });
}

async function openTabInNewWindow(url) {
  await chrome.windows.create({ url: url });
}

// Add tabs to a new tab group
async function groupTabs(tabIds) {
  await chrome.tabs.group({ tabIds: tabIds });
}

// async function openTabInNewIncognitoWindow(url) {
//   await chrome.windows.create({ url: url, incognito: true });
// }

/**
 * Methods for controlling the UI
 */
const UIControls = {
  tabs: {
    // Change active tab or active window
    focusOnTabAndWindow: focusOnTabAndWindow,
    // Open a tab
    open: openTab,
    openTabInNewWindow: openTabInNewWindow,

    // Tab groups
    group: groupTabs,
  },
  windows: {
    focusOnWindow: focusOnWindow,
  },
  sidebar: {
    open: openSidebar,
  },
  popup: {
    open: openPopup,
  },
  options: {
    open: openOptions,
  }
};

export default UIControls;