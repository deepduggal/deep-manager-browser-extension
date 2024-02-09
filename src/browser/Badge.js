import { Tabs } from "./BrowserData";

/**
 * Badge singleton.
 */
class Badge {
  constructor() {
    if (Badge.instance) {
      // Get existing instance
      return Badge.instance;
    }
    // Make new instance
    Badge.instance = this;
    this.addListener.updateOnTabClose = this.addListener.updateOnTabClose.bind(this);
  }

  set = (text) => {
    chrome.action.setBadgeText({ text });
  };

  setToTabsCount = async () => {
    this.set((await Tabs.count()) + '');
  };

  // Namespace for methods for adding a listener
  addListener = {
    // Adds a listener to update badge text when a tab is closed
    updateOnTabClose() {
      chrome.tabs.onRemoved.addListener(async () => {
        this.setToTabsCount();
      });
    },
  };
}

export default new Badge();