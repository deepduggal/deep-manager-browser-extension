# Deep Manager (browser extension)
A deep manager browser extension. Helps manage Deep. I've wanted to make this forever.

# Features
  - Omnibox
    - dm
    - To Do List
      - Add a task
    - My Dev Reference
      - mdn: https://developer.mozilla.org/en-US/search?q=
      - npm: https://www.npmjs.com/search?q=
      - docs: devdocs.io search
    - Reference
      - wiki: 
      - yt: My Youtube playlists. No searching yt from here ever.
    - 


# Features To Do List
First
  - Set current task and have it on your mind
  - Detect infinite scrolling

Next: 
  - Detect excessive googling/duckduckgo/web searching or being lost in pages that started as a web search for a long time.
  - Intervention. You've got to stay on the new tab page

Eventually
  - Detect
  - Detect excessive leaving and returning to the same tabs
  - Detect excessive youtube searching, detect too many youtube videos to watch, switching videos
  - Network requests
  - Site blocker
  - Regularly delete a bookmark

# Development Guide 

## Manifest.json guide
  - background: run a service-worker in the background
  - content scripts: Run code on specified web pages
  - "chrome_url_overrides" - custom new tab, and more.
  - "omnibox" - "dm" for custom cli

## Permissions guide
  - "storage" - allows offline stoarge
  - "tabs" - tabs, tab groups, etc.
  - "activeTab" - The active tab
  - "scripting" - chrome.scripting allowed
