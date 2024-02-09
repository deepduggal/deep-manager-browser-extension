/**
 * Methods for making various context menu options
 */

/**
 * Add these to the default right-click menu when the extension is installed
 */
async function addToDefaultContextMenu() {
  await chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    title: "📔 Open in own tab",
    contexts: ["browser_action"],
    contexts: ["highlighted"],
    onclick: openAsOwnTab
  });
}