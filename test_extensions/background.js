let startTime = Date.now();

chrome.tabs.onActivated.addListener(async function(activeInfo) {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  console.log(`Switching to: ${tab.url}`);
  console.log(tab);

  // Calculate elapsed time in seconds
  const elapsedTimeSeconds = (Date.now() - startTime) / 1000;
  console.log(`Elapsed time: ${elapsedTimeSeconds.toFixed(2)} seconds`);

  // Update start time
  startTime = Date.now();
});
