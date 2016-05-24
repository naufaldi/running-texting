chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // for the current tab, inject the "index.js" file & execute it
        
    if (changeInfo.status == "complete") {
        chrome.tabs.executeScript(tabId, {
            file: 'index.js'
        });
    }
});
