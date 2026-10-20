const FALLBACK = {
  "updated": "2026-10-20",
  "headline": "Pricing is live and legal pages are current. What's left before launch is one real transaction at a station someone confirms is working today, and a billing process that can survive it.",
  "lanes": [
    {
      "id": "now",
      "label": "Now",
      "hint": "Do these first",
      "items": [
        {
          "name": "One live transaction, end to end",
          "owner": "Wade / Adam",
          "status": "active",
          "note": "Nothing has been proven against a real station. Acknowledgment is not Stripe, and a screenshot of a button is not a completed sale. This is the single thing standing between the app and a credible launch.",
          "next": "Wade or Nyarai confirms which station works today, with a timestamp. Then run one buyer/seller pass and write down the role, exact wording, time, order, locker, and every state change."
        },
        {
          "name": "18+ confirmation at signup",
          "owner": "Flywheel / Julieta",
          "status": "active",
          "note": "Terms and Privacy now say 18+ and the leftover minor-user passages are gone (updated Oct 19). The app still does not ask the user to confirm they are 18 or older.",
          "next": "Flywheel adds an 18+ confirmation to signup, either a checkbox or a date of birth. A yes or no, plus a screenshot of the signup screen, closes it."
        },
        {
          "name": "Locker billing, before the first cycle",
          "owner": "Adam / Wade",
          "status": "active",
          "note": "Billing locker usage is manual today: pull transactions from Smiota, cross-index who did each one, build the charges in spreadsheets. It cannot be wrong and it will not scale. Stripe is signed off, but whoever processes the first charges captures the customer's payment details, so the choice is sticky.",
          "next": "Confirm three facts: what a Smiota export contains, what CSB is, and the billing unit. Talk to Alex Marshall before the first cycle. Working notes are in the nimble-billing repo.",
          "link": "https://github.com/NimbleAdam/nimble-billing"
        },
        {
          "name": "App Store submission",
          "owner": "Clayton / Wade / Adam",
          "status": "active",
          "note": "nimblestation.com/terms and /privacy are live (Oct 19 text, 18+ rule). /support still returns 404. Clayton's proposed revisions are marked not in effect.",
          "next": "Wade says which legal version is in effect. Then the Privacy Policy URL goes into the App Store and Play fields. Give /support a real page or point the app at contact instead."
        }
      ]
    },
    {
      "id": "week",
      "label": "This week",
      "hint": "In motion, not blocking launch",
      "items": [
        {
          "name": "Pricing: make the app match the site",
          "owner": "Wade / Flywheel",
          "status": "planned",
          "note": "The site is live with Small $1.99 / Medium $2.99 / Large $3.99 per use, first 2 hours included, then $0.10 / $0.15 / $0.20 per hour. Sellers pay the flat fee only. Buyers pay nothing if they pick up within 2 hours. Copy says subject to change.",
          "next": "Wade confirms this is the committed policy. Then the app and the tri-fold get updated to the same numbers, and the old $2 / 5¢ comes off the sheet.",
          "link": "https://www.nimblestation.com/pricing"
        },
        {
          "name": "Seller cancels order (Change Order 2)",
          "owner": "Flywheel",
          "status": "planned",
          "note": "Wade approved CO-2 on Oct 2: whole-order cancel, buyer confirms the refund within 3 days or opens a claim, two cancel reasons.",
          "next": "Flywheel builds it and invoices when done. Nothing is needed from Nimble until a build lands in TestFlight."
        },
        {
          "name": "Franchise / host tri-fold",
          "owner": "Adam / Wade",
          "status": "planned",
          "note": "v3 has Wade's Oct 11 wording edits. The pricing panel still shows the old $2 / 5¢.",
          "next": "Replace the pricing panel with the website tiers, print one proof, and stop there. The resident-facing version waits."
        },
        {
          "name": "Listing autopilot",
          "owner": "Adam + Hermes",
          "status": "planned",
          "note": "The bot now speaks the real listing flow: a Supabase insert as the signed-in seller, with photos and a drop-off location. It refuses to publish unless the account is a mock-environment user, because a listing goes live the instant it is created.",
          "next": "Create one mock seller account. Run a dry-run, review the payload, then one live publish against mock only. Never against production.",
          "link": "https://github.com/NimbleAdam/nimble-lister"
        },
        {
          "name": "Merch (t-shirts, polos)",
          "owner": "Wade / Adam",
          "status": "planned",
          "note": "Core Prints catalog review is still open.",
          "next": "Pick the items and quantities Nimble will actually order. No order until that list exists.",
          "link": "https://shopcoreprints.com/products?sort=PVRN"
        }
      ]
    },
    {
      "id": "blocked",
      "label": "Blocked",
      "hint": "Each one names what unblocks it",
      "items": [
        {
          "name": "Which station works today",
          "owner": "Wade / Nyarai",
          "status": "blocked",
          "note": "Old Station 2 and 3 errors are history, not status. No current readiness check is on record, and every other test waits on this.",
          "next": "Wade or Nyarai names the working station and the time they checked it. That one line unblocks the transaction proof."
        },
        {
          "name": "Notifications by transaction state",
          "owner": "Flywheel",
          "status": "blocked",
          "note": "Wade sent updated notification messages Oct 7. They have not been proven against a real transaction.",
          "next": "On the live pass, log what the buyer and seller each actually receive. Then do the same for one yellow and one orange state."
        },
        {
          "name": "Seller refund-policy screen",
          "owner": "Wade",
          "status": "blocked",
          "note": "Seller setup stops at Seller Information. The refund-policy options shown there are not settled Nimble policy, so retesting now would only re-prove the same stop.",
          "next": "Wade decides the refund-policy posture. Then retest on the current build and screenshot whatever still stops."
        },
        {
          "name": "Order, locker, and acknowledgment tied together",
          "owner": "Wade / Flywheel",
          "status": "blocked",
          "note": "The order ID, the locker event, and the payment acknowledgment are not recorded as one thing. Stripe only matters if a fee path is in scope.",
          "next": "On the authorized pass, record the order ID, the locker event, and the acknowledgment in the same note."
        },
        {
          "name": "7-day branches: abandonment and no-drop-off",
          "owner": "Wade / Adam",
          "status": "blocked",
          "note": "What happens to an unsold item, or to a sale where nothing is dropped off, has not been observed in the app or the locker.",
          "next": "Run one timed branch and log what buyer and seller actually see. Wade sets the policy from that, not before it."
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
          "name": "This board",
          "owner": "Hermes + team",
          "status": "system",
          "note": "The picture everyone can open on a phone. The Flywheel repos are private and are not this page.",
          "next": "Update workflows.json when the truth changes, and take off anything that is done."
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
