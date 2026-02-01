const form = document.getElementById("adForm");
const previewTitle = document.getElementById("previewTitle");
const previewBenefit = document.getElementById("previewBenefit");
const previewCta = document.getElementById("previewCta");
const previewCard = document.getElementById("previewCard");
const previewTag = document.getElementById("previewTag");
const reachValue = document.getElementById("reachValue");
const matchValue = document.getElementById("matchValue");
const windowValue = document.getElementById("windowValue");

const themes = {
  sunrise: {
    tag: "Sponsored · Sunrise",
    reach: "12.4k",
    match: "89%",
    window: "Today, 3:00 PM",
  },
  ocean: {
    tag: "Sponsored · Ocean",
    reach: "18.1k",
    match: "92%",
    window: "Tomorrow, 9:00 AM",
  },
  midnight: {
    tag: "Sponsored · Midnight",
    reach: "9.6k",
    match: "84%",
    window: "Tonight, 7:30 PM",
  },
};

function updatePreview(data) {
  previewTitle.textContent = data.product;
  previewBenefit.textContent = data.benefit;
  previewCta.textContent = data.cta;

  const theme = themes[data.theme];
  previewTag.textContent = theme.tag;
  reachValue.textContent = theme.reach;
  matchValue.textContent = theme.match;
  windowValue.textContent = theme.window;

  previewCard.classList.remove("sunrise", "ocean", "midnight");
  previewCard.classList.add(data.theme);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  updatePreview(payload);
});

const buttons = [
  document.getElementById("previewButton"),
  document.getElementById("createButton"),
  document.getElementById("launchButton"),
  document.getElementById("footerButton"),
];

buttons.forEach((button) => {
  if (!button) return;
  button.addEventListener("click", () => {
    const msg = button.id === "createButton" ? "Drafting copy" : "Launching";
    button.textContent = `${msg}...`;
    setTimeout(() => {
      button.textContent = button.dataset.original || button.textContent;
    }, 1000);
  });
  button.dataset.original = button.textContent;
});

updatePreview({
  product: "Glow Coffee",
  benefit: "Energy in every sip.",
  cta: "Shop now",
  theme: "sunrise",
});
