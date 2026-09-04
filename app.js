const FALLBACK = {
  "updated": "2026-09-04",
  "headline": "Station 1 proof is still the main job.",
  "lanes": [
    {
      "id": "now", "label": "Now", "hint": "Do these first",
      "items": [
        {"name": "App testing + TX proof", "owner": "Wade / Adam", "status": "active", "note": "One clean Station 1 path: app state → notification → locker → order → real billing.", "next": "Run the next Station 1 live pass and write down what actually happened."},
        {"name": "Legal + contact pages", "owner": "Adam / Wade", "status": "active", "note": "Terms, Privacy, and live website links for Apple/Google.", "next": "Publish the pages and send Flywheel the live URLs."},
        {"name": "Core Prints merch catalog", "owner": "Wade", "status": "active", "due": "Sep 3", "note": "Review T-shirts and promo catalog.", "next": "Pick what Nimble should sell and reply on the GQueues task.", "link": "https://shopcoreprints.com/products?sort=PVRN"}
      ]
    },
    {
      "id": "week", "label": "This week", "hint": "By Friday",
      "items": [
        {"name": "Investor / member one-pager", "owner": "Adam + Hermes", "status": "planned", "note": "Truthful weekly update from Fireflies, GQueues, and Tom’s Planner.", "next": "Draft the one-pager, then sit with Wade."},
        {"name": "What-we’ve-done video", "owner": "Adam + Hermes", "status": "planned", "note": "Short video for team, members, and investors.", "next": "Write the script from the one-pager. Keep it under 3 minutes."},
        {"name": "This activity board", "owner": "Hermes", "status": "active", "note": "Public team picture of work in progress.", "next": "Keep this page honest. Don’t mark blocked items as done."}
      ]
    },
    {
      "id": "blocked", "label": "Blocked", "hint": "Needs a live proof pass",
      "items": [
        {"name": "Payment / billing truth", "owner": "App + Flywheel", "status": "blocked", "note": "“Confirm payment sent” is not proof that money moved.", "next": "Capture one real charge path on Station 1."},
        {"name": "Notifications by TX state", "owner": "Flywheel", "status": "blocked", "note": "Not yet proven against real transaction states.", "next": "Log buyer + seller alerts for one green-path sale."},
        {"name": "Seller setup", "owner": "Flywheel", "status": "blocked", "note": "Stuck at Seller Information / refund-policy screen.", "next": "Screenshot the blocker and send Flywheel the exact screen."},
        {"name": "Smiota ↔ order ↔ Stripe", "owner": "Wade / vendors", "status": "blocked", "note": "Locker, order, and payment IDs are not fully tied together live.", "next": "Use Station 1 only. Record locker ID, order ID, and Stripe ID on the same pass."}
      ]
    },
    {
      "id": "systems", "label": "Where work lives", "hint": "Don’t copy everything everywhere",
      "items": [
        {"name": "GQueues", "owner": "Team", "status": "system", "note": "Who owns it, what is due, what is next.", "next": "Put assignments here, not in chat."},
        {"name": "Tom’s Planner", "owner": "Team", "status": "system", "note": "Sequence, milestones, vendor timing.", "next": "Change dates only when a real dependency moved."},
        {"name": "Obsidian vault", "owner": "Hermes", "status": "system", "note": "Evidence, blockers, decisions. Not the to-do list.", "next": "File proof here after a test, not before."},
        {"name": "This GitHub board", "owner": "Hermes + team", "status": "system", "note": "The picture everyone can open on a phone.", "next": "Update workflows.json when the truth changes."}
      ]
    }
  ]
};

function countBy(data, status) {
  return data.lanes.reduce((n, lane) => n + lane.items.filter((i) => i.status === status).length, 0);
}

function render(data) {
  document.getElementById("updated").textContent = "Updated " + data.updated;
  const now = data.lanes.find((l) => l.id === "now");
  const lead = (now && now.items[0]) ? now.items[0].name : "Check the Now column";
  document.getElementById("pulse").innerHTML = `
    <article class="pulse-card lead">
      <p class="k">Start here</p>
      <p class="v">${data.headline || lead}</p>
    </article>
    <article class="pulse-card">
      <p class="k">Now</p>
      <p class="v count-now">${now ? now.items.length : 0}</p>
    </article>
    <article class="pulse-card">
      <p class="k">This week</p>
      <p class="v count-week">${countBy(data, "planned")}</p>
    </article>
    <article class="pulse-card">
      <p class="k">Blocked</p>
      <p class="v count-blocked">${countBy(data, "blocked")}</p>
    </article>
  `;

  const board = document.getElementById("board");
  board.innerHTML = "";
  data.lanes.forEach((lane) => {
    const col = document.createElement("section");
    col.className = "lane " + lane.id;
    col.innerHTML = `
      <div class="lane-head">
        <h2>${lane.label}</h2>
        <span class="lane-count">${lane.items.length}</span>
      </div>
      <p class="hint">${lane.hint}</p>
    `;
    lane.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "item";
      card.innerHTML = `
        <h3>${item.name}</h3>
        <div class="meta">
          <span class="status ${item.status}">${item.status}</span>
          <span class="owner">${item.owner}</span>
          ${item.due ? `<span class="due">Due ${item.due}</span>` : ""}
        </div>
        <p class="note">${item.note}</p>
        ${item.next ? `<p class="next"><strong>Next:</strong> ${item.next}</p>` : ""}
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener">Open link</a>` : ""}
      `;
      col.appendChild(card);
    });
    board.appendChild(col);
  });
}

async function loadBoard() {
  try {
    const res = await fetch("data/workflows.json", { cache: "no-store" });
    if (!res.ok) throw new Error("no json");
    render(await res.json());
  } catch (err) {
    render(FALLBACK);
  }
}

loadBoard();
