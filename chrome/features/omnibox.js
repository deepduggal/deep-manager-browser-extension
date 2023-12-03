/**
 * Reminder: This runs in the background (service-worker.js)!
 * 
 * Adds "dm" keyword to omnibox.
 *  1. Start a goal from the omnibox
 *  2. Close everything else from the omnibox
 */

const appendLog = (text) => {
  chrome.runtime.sendMessage({ type: 'append-log', text });
};

chrome.omnibox.onInputStarted.addListener(function () {
  appendLog('💬 onInputStarted');

  // Set the default suggestion
  chrome.omnibox.setDefaultSuggestion({
    description:
      "Here is a default <match>suggestion</match>. <url>It's <match>url</match> here</url>"
  });

  // When the input changes
  chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
    appendLog('✏️ onInputChanged: ' + text);
    suggest([
      { content: text + ' one', description: 'the first one', deletable: true },
      {
        content: text + ' number two',
        description: 'the second entry',
        deletable: true
      }
    ]);
  });
});

// When a suggestion is accepted
chrome.omnibox.onInputEntered.addListener(function (text, disposition) {
  appendLog(
    `✔️ onInputEntered: text -> ${text} | disposition -> ${disposition}`
  );
});

// When the input is cancelled
chrome.omnibox.onInputCancelled.addListener(function () {
  appendLog('❌ onInputCancelled');
});

// When a suggestion is deleted
chrome.omnibox.onDeleteSuggestion.addListener(function (text) {
  appendLog('⛔ onDeleteSuggestion: ' + text);
});