const FALLBACK = {
  "updated": "2026-10-12",
  "headline": "nimblestation.com is live with /terms and /privacy (Oct 8 versions). The app still needs one live transaction proof at a ready station.",
  "lanes": [
    {
      "id": "now",
      "label": "Now",
      "hint": "Do these first",
      "items": [
        {
          "name": "App Store submission gate: legal URLs",
          "owner": "Clayton / Wade / Adam",
          "status": "active",
          "note": "Clayton published nimblestation.com/terms and /privacy as separate pages on Oct 10 (Adam's Oct 8 text, word for word). He also sent proposed revisions marked “not in effect” (18+ only, Buyer Protection section, account deletion by email to privacy@, support = help@). /support is still 404.",
          "next": "Wade reviews Clayton's redline and says which version is in effect. Then the Privacy Policy URL can go into the App Store / Play fields.",
          "link": "https://www.nimblestation.com/privacy"
        },
        {
          "name": "App testing + TX proof",
          "owner": "Wade / Adam",
          "status": "active",
          "note": "TestFlight seller dashboard was reviewed Oct 6. No live station pass has been logged yet. Acknowledgment is not Stripe.",
          "next": "Confirm which station is ready (Station 1 is a historical preference, not a status). Run one live buyer/seller pass and record role, exact wording, time, order, locker, and state changes."
        },
        {
          "name": "Meeting notes: Nimble's own bot",
          "owner": "Adam + Hermes",
          "status": "active",
          "note": "Fireflies is retired; all 22 past transcripts are archived in the vault. The Nimble Notes bot (Workspace user neo@nimblestation.com) joins Meet, records, and names speakers. Solo join, chat disclosure, and leave are proven; full end-to-end run is not yet.",
          "next": "Tuesday dry run with Adam on the call. If names come out right, invite neo@ to the Wed 1 PM App Dev meeting."
        },
        {
          "name": "Franchise / host tri-fold",
          "owner": "Adam / Wade",
          "status": "active",
          "note": "v3 has Wade's Oct 11 edits (built on trust, good stewards, skip the shipping, no investor tiers). Pricing on the sheet still shows the old $2 / 5¢; the website now lists locker-size pricing.",
          "next": "Update the pricing panel to the website's tiers, then print a proof. A resident-facing version with the download incentive comes after."
        }
      ]
    },
    {
      "id": "week",
      "label": "This week",
      "hint": "Decisions and vendor work in motion",
      "items": [
        {
          "name": "Pricing policy",
          "owner": "Wade",
          "status": "planned",
          "note": "Website now shows Small $1.99 / Medium $2.99 / Large $3.99 per use, first 2 hours included, then $0.10 / $0.15 / $0.20 per hour. Marketing copy says “subject to change.”",
          "next": "Wade confirms this is the committed policy, not just the public claim, so the app, tri-fold, and FAQ all match.",
          "link": "https://www.nimblestation.com/pricing"
        },
        {
          "name": "Seller cancels order (Change Order 2)",
          "owner": "Flywheel",
          "status": "planned",
          "note": "Wade approved CO-2 on Oct 2 and answered Flywheel's design questions Oct 5: whole-order cancel, buyer confirms refund within 3 days or opens a claim, two cancel reasons.",
          "next": "Flywheel builds and invoices when done. Nothing needed from Nimble until a build lands in TestFlight."
        },
        {
          "name": "Roles and responsibilities sheet",
          "owner": "Wade / Adam / Clayton",
          "status": "planned",
          "note": "Wade's sheet is the temporary map. Agreed: Adam is first line and brings decisions back to Wade; billing and franchisee financial reporting move to a future office manager after stand-up; Clayton stays cybersecurity lead; helpline is shared.",
          "next": "Wade finalizes the wording in the spreadsheet. Revisit when the office manager role exists."
        },
        {
          "name": "Merch (t-shirts, polos)",
          "owner": "Wade / Adam",
          "status": "planned",
          "note": "Core Prints catalog review is still open; Adam has a vendor conversation scheduled.",
          "next": "Pick the items and quantities Nimble will actually order.",
          "link": "https://shopcoreprints.com/products?sort=PVRN"
        },
        {
          "name": "This activity board",
          "owner": "Hermes",
          "status": "active",
          "note": "Public team picture. Not the Flywheel admin. Not Vercel.",
          "next": "Keep this page honest. Don't mark blocked items as done."
        }
      ]
    },
    {
      "id": "blocked",
      "label": "Blocked",
      "hint": "Needs a live proof pass, a decision, or an invite",
      "items": [
        {
          "name": "Payment acknowledgment wording",
          "owner": "App + Flywheel",
          "status": "blocked",
          "note": "“Confirm payment sent” is not bank settlement. Billing/Stripe only if a Nimble fee path is in scope.",
          "next": "Capture one acknowledgment-only pass: role, exact CTA, time, order, state. Mark billing N/A unless a fee path is proven."
        },
        {
          "name": "Notifications by TX state",
          "owner": "Flywheel",
          "status": "blocked",
          "note": "Wade sent updated notification messages Oct 7. Still not proven against real transaction states.",
          "next": "Log buyer + seller alerts for one green-path sale, then yellow and orange."
        },
        {
          "name": "Seller setup / refund-policy screen",
          "owner": "Flywheel / Wade",
          "status": "blocked",
          "note": "Historical stop at Seller Information. Refund-policy options shown there are not settled Nimble policy.",
          "next": "Wade decides the refund-policy posture. Then retest the seller flow on the current build and screenshot anything that still stops."
        },
        {
          "name": "Order ↔ locker ↔ acknowledgment",
          "owner": "Wade / Flywheel",
          "status": "blocked",
          "note": "Live IDs are not fully tied together. Stripe only if billing is in scope.",
          "next": "On one authorized pass, record order ID, locker/PoD event, and acknowledgments together."
        },
        {
          "name": "7-day branches: abandonment and no-drop-off",
          "owner": "Wade / Adam",
          "status": "blocked",
          "note": "What happens to unsold or abandoned items, and to a sale where nothing is dropped off, is not yet observed in the app or the locker.",
          "next": "Run one timed branch and log what buyer and seller actually see, then Wade sets the policy."
        },
        {
          "name": "Station readiness",
          "owner": "Wade / Nyarai",
          "status": "blocked",
          "note": "Old Station 2/3 errors are history, not status. No current readiness check is on record.",
          "next": "Wade or Nyarai confirms which station works today, with a timestamp, before any test."
        }
      ]
    },
    {
      "id": "systems",
      "label": "Where work lives",
      "hint": "Don't copy everything everywhere",
      "items": [
        {
          "name": "GQueues",
          "owner": "Team",
          "status": "system",
          "note": "Next actions. Tags, not assignments. Wade's daily burndown is the printable master.",
          "next": "Put next actions here, not in chat."
        },
        {
          "name": "Tom's Planner",
          "owner": "Team",
          "status": "system",
          "note": "Sequence, milestones, vendor timing.",
          "next": "Change dates only when a real dependency moved."
        },
        {
          "name": "Obsidian vault",
          "owner": "Hermes",
          "status": "system",
          "note": "Evidence, blockers, decisions, meeting transcripts. Not the to-do list.",
          "next": "File proof here after a test, not before."
        },
        {
          "name": "This GitHub board",
          "owner": "Hermes + team",
          "status": "system",
          "note": "The picture everyone can open on a phone. Flywheel repos are private and are not this page.",
          "next": "Update workflows.json when the truth changes."
        }
      ]
    }
  ]
};

let BOARD = FALLBACK;
let FILTER = "all";

function countBy(data, status) {
  return data.lanes.reduce((n, lane) => n + lane.items.filter((i) => i.status === status).length, 0);
}

function matches(item, lane, filter) {
  if (filter === "all") return true;
  if (filter === "now") return lane.id === "now";
  if (filter === "blocked") return item.status === "blocked";
  if (filter === "wade") return (item.owner || "").toLowerCase().includes("wade");
  return true;
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
      if (!matches(item, lane, FILTER)) return;
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
    if (col.querySelector(".item")) board.appendChild(col);
  });
}

document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  FILTER = btn.getAttribute("data-filter");
  document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("on", b === btn));
  render(BOARD);
});

async function loadBoard() {
  try {
    const res = await fetch("data/workflows.json", { cache: "no-store" });
    if (!res.ok) throw new Error("no json");
    BOARD = await res.json();
    render(BOARD);
  } catch (err) {
    BOARD = FALLBACK;
    render(BOARD);
  }
}

loadBoard();
