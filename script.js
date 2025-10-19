document.addEventListener("DOMContentLoaded", function () {
  // Add click functionality to all buttons
  const buttons = document.querySelectorAll(".card-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".card");
      const title = card.querySelector("h2").textContent;

      // Create a modal-like notification
      const notification = document.createElement("div");
      notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4361ee;
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                font-weight: 500;
                animation: slideIn 0.3s ease;
            `;

      // Add animation keyframes
      const style = document.createElement("style");
      style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
      document.head.appendChild(style);

      notification.textContent = `Opening details for: ${title}`;
      document.body.appendChild(notification);

      // Simulate opening a details page
      setTimeout(() => {
        alert(
          `Details page for: ${title}\n\nThis would typically open a detailed view with:\n- Full program description\n- Curriculum\n- Application process\n- Mentor information\n- Project details`
        );
      }, 500);

      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.remove();
      }, 3000);
    });
  });

  // Add hover effects programmatically
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
