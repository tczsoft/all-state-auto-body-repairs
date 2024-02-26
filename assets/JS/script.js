document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");
  const serviceContents = document.querySelectorAll("[id$='-content']");
  serviceItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const targetId = item.getAttribute("data-target");
      serviceContents.forEach((content) => {
        content.classList.add("hidden");
      });
      document.getElementById(targetId).classList.remove("hidden");
    });
  });
});

document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.service-item').forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});