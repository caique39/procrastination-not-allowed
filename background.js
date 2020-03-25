const storage = {
  set: function (data) {
    return new Promise((resolve) => {
      chrome.storage.local.set(data, function () {
        resolve()
      })
    })
  },
  get: function (key) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], function (response) {
        resolve(response)
      })
    })
  }
}

chrome.browserAction.onClicked.addListener(async function () {
  const value = await storage.get('active')

  await storage.set({ active: !value.active })
})

chrome.storage.onChanged.addListener(function (changes, namespace) {

})

