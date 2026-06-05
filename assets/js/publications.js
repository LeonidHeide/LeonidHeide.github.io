function togglePublicationPanel(button, panelType) {
  const card = button.closest(".publication-card");
  if (!card) return;

  const allButtons = card.querySelectorAll(".publication-toggle-button");
  const abstractPanel = card.querySelector(".abstract-panel");
  const tldrPanel = card.querySelector(".tldr-panel");

  const targetPanel = panelType === "abstract" ? abstractPanel : tldrPanel;
  const isOpen = targetPanel && targetPanel.classList.contains("is-open");

  if (abstractPanel) abstractPanel.classList.remove("is-open");
  if (tldrPanel) tldrPanel.classList.remove("is-open");
  allButtons.forEach((btn) => btn.classList.remove("is-active"));

  if (targetPanel && !isOpen) {
    targetPanel.classList.add("is-open");
    button.classList.add("is-active");
  }
}

function openBibtexModal(button) {
  const card = button.closest(".publication-card");
  if (!card) return;

  const template = card.querySelector(".bibtex-template");
  if (!template) return;

  const modal = document.getElementById("bibtex-modal");
  const modalText = document.getElementById("bibtex-modal-text");

  if (!modal || !modalText) return;

  modalText.textContent = template.content
    ? template.content.textContent.trim()
    : template.innerHTML.trim();

  modal.classList.add("is-open");
}

function closeBibtexModal() {
  const modal = document.getElementById("bibtex-modal");
  if (modal) modal.classList.remove("is-open");
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeBibtexModal();
  }
});
