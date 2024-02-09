/**
 * New tabs are automatically added to a new tab group.
 * So you'll always have a focus.
 */
chrome.tabs.onCreated.addListener((tab) => {
  let tabGroupName = 'Unfocused';
  // Count tab groups with the name "Unfocused".
  chrome.tabs.query({ title: tabGroupName }, (groups) => {
    const numUnfocusedTabs = groups?.length ?? 0;
    if (numUnfocusedTabs > 0) {
      tabGroupName += ` ${numUnfocusedTabs}`;
    }

    // Add a new tab group with a name. Add the new tab.
    chrome.tabs.group({ tabIds: tab.id, createProperties: { windowId: tab.windowId, title: tabGroupName } });
  });
});

/**
 * Web search added to search tab group.
 */