chrome.app.runtime.onLaunched.addListener( () => {
    chrome.app.window.create('main.html', {
        state: "fullscreen"
    });
});

chrome.runtime.onSuspend.addListener( () => {
    // Do some simple clean-up tasks.
});