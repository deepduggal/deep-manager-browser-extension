# Deep Manager (browser extension)
A deep manager browser extension. Helps manage Deeps. I've wanted to make this forever.

# Features

## Mindful Internet Usage

- Infinite scroll
  - detect
  - intervene
- Search
  - Show warning and goals on search pages
  - Detect excess
  - intervene
- Save searches for later

## New Tab Page

1. View current focus
2. View goals
3. Vuew searches

<!-- ## Popup
Click the icon

## Options (settings)

- -->

<!-- ## ```deep```: Omnibox CLI

0. ```help```
  - List and explain commands
1. To Do List
  - ```tasks``` - View tasks
  - ```add``` - Add a task
2. Goals
  - ```focus``` - Select current goal

<!-- ## Other
  - `yt`: My Youtube playlists. No searching yt from here ever. -->


# Features Backlog
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

[Chrome Extension Docs](https://developer.chrome.com/docs/extensions) - See the examples.

[Convert To Safari Extension]() - The extension is packaged as a mac/ios app.

## Manifest.json quick reference
  - background: run a service-worker in the background
  - content scripts: Run code on specified web pages
  - "chrome_url_overrides" - custom new tab, and more.
  - "omnibox" - "dm" for custom cli

## Permissions quick reference
  - "storage" - allows offline stoarge
  - "tabs" - tabs, tab groups, etc.
  - "activeTab" - The active tab
  - "scripting" - chrome.scripting allowed
