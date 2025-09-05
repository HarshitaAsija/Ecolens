// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault(); 
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Modal Handling =====
function setupModal(triggerSelector, modalId) {
  const modal = document.getElementById(modalId);
  const trigger = document.querySelector(triggerSelector);
  const closeBtn = modal.querySelector(".close");

  if (trigger && modal && closeBtn) {
    // Open modal
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    // Close modal on X click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal if user clicks outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

// Setup both modals
setupModal(".btn-outline", "signinModal"); // Sign In button
setupModal(".forgot", "forgotModal");      // Forgot Password link




