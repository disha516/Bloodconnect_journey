/**
 * Switches the visible week section and updates the active timeline button.
 * @param {string} weekId - The id of the week-content section to show (e.g. "week1").
 * @param {Event} [event] - The click event from the timeline button, used to mark it active.
 */
function showWeek(weekId, event) {
  // Hide every week section
  document.querySelectorAll('.week-content').forEach((section) => {
    section.classList.remove('active-content');
  });

  // Show the requested week section (re-triggers the slideUpFade animation)
  const target = document.getElementById(weekId);
  if (target) {
    target.classList.add('active-content');
  }

  // Reset all timeline buttons, then activate the one that was clicked
  document.querySelectorAll('.timeline-btn').forEach((btn) => {
    btn.classList.remove('active');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else {
    // Fallback: activate the button matching this week via data attribute
    const fallbackBtn = document.querySelector(`.timeline-btn[data-week="${weekId}"]`);
    if (fallbackBtn) fallbackBtn.classList.add('active');
  }

  // Bring the timeline into view so the transition is visible on mobile
  document.querySelector('.timeline-nav')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// Function to open the pop-up modal (Used in Week 4)
function openModal() {
    document.getElementById("imageModal").style.display = "block";
}

// Function to close the pop-up modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close the pop-up if user clicks outside the white box
window.onclick = function(event) {
    let modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Offline Modal ko open karne ka code
function openOfflineModal() {
    document.getElementById("offlineModal").style.display = "block";
}

// Offline Modal ko close karne ka code
function closeOfflineModal() {
    document.getElementById("offlineModal").style.display = "none";
}