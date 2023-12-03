/**
 * Site blocking strategies:
 *  1. Block by given URLs
 *  2. Block by total time spent
 */

// function getNewRules() {

// }

// // Get arrays containing new and old rules
// const newRules = await getNewRules();
// const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
// const oldRuleIds = oldRules.map(rule => rule.id);

// // Use the arrays to update the dynamic rules
// await chrome.declarativeNetRequest.updateDynamicRules({
//   removeRuleIds: oldRuleIds,
//   addRules: newRules
// });


/**
 *
  chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`;
  console.log(msg);
});

console.log('Service worker started.');
 */