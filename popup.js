function changeFont() {
  let font = document.getElementById("select-font").value;
  chrome.tabs.query({}, function (tabs) {
    tabs.map(tab => {
      chrome.tabs.sendMessage(tab.id, {
        action: 'changeFont',
        font: font
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-change").addEventListener("click", changeFont);
});