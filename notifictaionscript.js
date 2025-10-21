document.addEventListener("DOMContentLoaded", () => {
  const notifications = [
    {
      title: "💰 Reminder",
      message: "Your electricity bill is due tomorrow. Don’t forget to pay on time!",
      date: "18 Oct 2025"
    },
    {
      title: "🏦 Alert",
      message: "Your monthly transaction limit is about to reach 90%. Review your spending habits.",
      date: "18 Oct 2025"
    },
    {
      title: "📊 Tip",
      message: "Start saving at least 10% of your income for financial security.",
      date: "18 Oct 2025"
    }
  ];

  const container = document.getElementById("popup-container");

  let index = 0;

  function showNextNotification() {
    if (index >= notifications.length) return;

    const note = notifications[index];
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <strong>${note.title}</strong><br>
      ${note.message}<br>
      <div class="date">${note.date}</div>
    `;
    container.appendChild(popup);

    setTimeout(() => popup.classList.add("show"), 100); // fade in

    index++;
    setTimeout(showNextNotification, 2500); // next popup after 2.5 seconds
  }

  showNextNotification();
});
