chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('(Browser action test) Turning ' + tab.url + ' red!');
	chrome.tabs.executeScript({
		code: 'document.body.style.backgroundColor="red"'
	});
});

