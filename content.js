chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "changeFont") {
      changeFont(request.font);
    }
  }
);

function changeFont(font) {
  document.body.classList.add(font);
}

document.body.classList.add('vazir');