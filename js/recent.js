const recentList = document.getElementById("recentList");

function saveRecentPage() {
  const page = {
    title: document.title,
    url: window.location.pathname
  };
  let recent = JSON.parse(localStorage.getItem("recentPages")) || [];
  recent = recent.filter(item => item.url !== page.url);
  recent.unshift(page);
  recent = recent.slice(0, 5);
  localStorage.setItem(
    "recentPages",
    JSON.stringify(recent)
  );
}

function renderRecentPages() {
  if (!recentList) return;
  const recent =
    JSON.parse(localStorage.getItem("recentPages")) || [];
  recentList.innerHTML = "";
  recent.forEach(page => {
    const li = document.createElement("li");
    li.innerHTML = `
            <a href="${page.url}">
                ${page.title}
            </a>
        `;
    recentList.appendChild(li);
  });
}

saveRecentPage();
renderRecentPages();
