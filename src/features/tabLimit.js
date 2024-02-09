/**
 * Limit the number of tabs that can be opened at once.
 */
import Badge from '../browser/Badge.js';
import { Tabs } from '../browser/BrowserData.js';

// Adds event listeners to enforce the tab limit
const tabLimit = async (maxTabsTotal = 5) => {
  // Enforces the tab limit on a tab during appropriate events
  async function enforceTabLimit(tab) {

    // Ignore tabs that don't have an ID
    // if (tab.tabId === chrome.tabs.TAB_ID_NONE) {
    //   return;
    // }

    const tabCount = await Tabs.count();

    // Remove the new tab if it's over the limit
    if (tabCount > maxTabsTotal) {
      // Prevent the tab from being created
      await chrome.tabs.remove(tab.id);
      Badge.setToTabsCount(); // update after removal
      console.log(`Tabs: ${await Tabs.count()} / ${maxTabsTotal}`);
    }
  }

  // Enforce the tab limit
  chrome.tabs.onCreated.addListener(async (tab) => {
    console.log('created');
    Badge.setToTabsCount(); // update after creation
    enforceTabLimit(tab);
    console.log(`Tabs: ${await Tabs.count()} / ${maxTabsTotal}`);
  });

  // Listen for webNavigation events to catch new tab openings (e.g., via window.open)
  chrome.webNavigation.onCreatedNavigationTarget.addListener(({ tab }) => {
    console.log('webNavigation');
    // enforceTabLimit(tab);
  });

};

export default tabLimit;

