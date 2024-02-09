/**
 * Methods for reading browser data (e.g., tabs, windows, etc.).
 * Maybe make this a little wrapper library for easy web extension development? Plan a better abstraction than browser...
 */

const Tabs = {
  /*****************
   * Get tabs *
   ****************/

  // Active tab
  async getActive() {
    return chrome.tabs.query({ active: true, currentWindow: true });
  },

  // Get all tabs
  async getAll() {
    return chrome.tabs.query({});
  },
  // Get all tabs in a window
  async getAllInWindow(windowId) {
    return chrome.tabs.query({ windowId });
  },
  // Get all tabs in a tab group
  async getAllInGroup(groupId) {
    return chrome.tabs.query({ groupId });
  },

  /*****************
   * Count tabs *
   ****************/

  // Count all tabs
  async count() {
    return (await this.getAll()).length;
  },
  // Count all tabs in a window
  async countAllInWindow(windowId) {
    return (await this.getAllInWindow(windowId)).length;
  },
  // Count all tabs in a tab group
  async countAllInGroup(groupId) {
    return (await this.getAllInGroup(groupId)).length;
  },

  /*****************
   * Modify tabs *
   ****************/

  async remove(tabId) { return await chrome.tabs.remove(tab.id) },
};

const Windows = {
  /*****************
   * Get windows *
   ****************/

  // Get all windows
  async getAll() {
    return chrome.windows.query({});
  },
  // Get all windows in a tab group
  async getAllInGroup(groupId) {
    return chrome.windows.query({ groupId });
  },
};


export { Tabs, Windows };