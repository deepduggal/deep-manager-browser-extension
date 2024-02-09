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

// TODO: Handle duckduckgo search

const beforeSearch = (details) => {
  console.log('URL:', details.url);
  const urlParams = new URLSearchParams(details.url);
  return { cancel: true };
};

const afterSearch = (details) => {
  console.log('URL:', details.url);
  const urlParams = new URLSearchParams(details.url);
  return { cancel: true };
};

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     console.log('URL:', details.url);
//     // const urlParams = new URLSearchParams(details.url);
//     // if (urlParams.has('q')) {
//     //   const query = urlParams.get('q');
//     //   console.log('Query:', query);
//     // Perform actions based on the query parameter
//   },
//   { urls: ["*://*duckduckgo.com/*"] },
//   // ["blocking"]
// );

// TODO: Handle search
chrome.webRequest.onCompleted.addListener(
  function (details) {
    const { url, requestHeaders, method, requestBody } = details;
    const urlParams = new URLSearchParams(url);
    if (urlParams.has('q')) {
      const query = urlParams.get('q');
      console.log('Query:', query);
      // Perform actions based on the query parameter
    }
  },
  {
    urls: [
      "*://*.google.com/*",
      "*://*duckduckgo.com/*"
      // "*://*chat.openai.com/backend-api/conversation" // POST, sends json. response is EventStream.
    ]
  },
);