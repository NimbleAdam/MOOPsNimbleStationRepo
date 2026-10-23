const FALLBACK = {
  "updated": "2026-10-23",
  "source": "Adam–Wade session 22 Oct 2026 · Flywheel call 21 Oct · GQueues read 82→110 tasks · Drive/Gmail evidence sweep",
  "headline": "Three weeks to a live app. Three decisions are Wade's (price list and ticket system decided 10/23). Ten first drafts are in Drive waiting for Adam's read.",
  "lanes": [
    {
      "id": "decide",
      "label": "Wade decides",
      "hint": "Each blocks a workstream. One email, five answers.",
      "items": [
        {
          "id": "B1",
          "name": "Approve the per-use price list Nimble will charge at go-live",
          "kind": "decision",
          "status": "done",
          "owner": "Wade",
          "note": "DECIDED 2026-10-23 11:02 by Wade (GQueues comment): the website pricing page is the approved list. $1.99/$2.99/$3.99 per use, 2 h included, then $0.10/$0.15/$0.20 per hour. Task completed and archived by Wade.",
          "next": "Adam updates the tri-fold and the Ready-to-Charge checklist to match.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-4921618996461568",
          "doc": null
        },
        {
          "id": "F1",
          "name": "Engage Plave Koch PLC under the 2026-07-29 fee letter for the FA, FDD, and development agreement",
          "kind": "decision",
          "status": "blocked",
          "owner": "Wade",
          "note": "Plave Koch's 29 Jul fee letter: $30k for FA, FDD, development agreement. Item 19 (earnings claims) excluded. Nothing signed. The FTC rule requires an FDD in DC too.",
          "next": "Sign, defer, or decline. Every franchise document downstream waits on it.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5281880853250048",
          "doc": null
        },
        {
          "id": "L2",
          "name": "Ticket system for go-live. GQueues queue with its own email address, or something else",
          "kind": "decision",
          "status": "done",
          "owner": "Wade",
          "note": "DECIDED 2026-10-23 15:33 by Wade (GQueues comment): tickets run in admin.nimblestation.com; help@nimblestation.com (alias of admin@) is the intake address; separate help@ user only when volume warrants.",
          "next": "Adam: triage flowchart and intake instructions point to admin dashboard + help@.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6548518248448000",
          "doc": null
        },
        {
          "id": "H2",
          "name": "Compensation, budget, and recruiting authority for the Area Operations Director",
          "kind": "decision",
          "status": "blocked",
          "owner": "Wade",
          "note": "Only written comp sketch is 4 Sep ($2k + $3k/station, Texas framing), unverified. Three scenarios drafted for reaction.",
          "next": "Base, variable, budget, and who may post. The JD is ready; it has no numbers on purpose.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5631903508004864",
          "doc": null
        },
        {
          "id": "X1",
          "name": "Google Play testing gate",
          "kind": "decision",
          "status": "blocked",
          "owner": "Wade / Clayton",
          "note": "Clayton's 13 Sep note: a personal Play account needs 12 testers × 14 days before production. No written answer. The clock has not started.",
          "next": "Wade answers Clayton; if the gate applies, recruit 12 testers this week.",
          "gq": null,
          "doc": null
        }
      ]
    },
    {
      "id": "drafts",
      "label": "Drafts in Drive",
      "hint": "First passes by Hermes, 22 Oct. Adam reads, Wade approves. Each links to its Doc and its GQueues task.",
      "items": [
        {
          "id": "B2",
          "name": "Write the 'ready to charge' checklist and run it before go-live",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "Nine lines, zero VERIFIED as of 22 Oct. Flags the 2 h vs 6 h inconsistency in the pricing sheet.",
          "next": "Adam reads it, then it rides on decision 1.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5143932879044608",
          "doc": "https://docs.google.com/document/d/14RgfJ-CAGqJ70rwPQZrVMJ8xHOarM7aL0C4vSDT-S4o/edit?usp=drivesdk"
        },
        {
          "id": "B3",
          "name": "Read the Wade x Alex (poweredbyevolv.com) recap and write a one-page processor comparison",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "Stripe for launch; fix small charges with threshold or monthly billing, not a processor swap. 12 questions for Alex, incl. his 3.5% pass-through vs Visa's 3% cap and Virginia's all-in price law.",
          "next": "Adam reads, then sends the 12 questions to Alex at poweredbyevolv.com.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-4903116277350400",
          "doc": "https://docs.google.com/document/d/1G0ThDeFo8hOyuDRF0LZs7RFEPA_WMwrC00AHeh2hlPM/edit?usp=drivesdk"
        },
        {
          "id": "F2",
          "name": "Draft the Operator Manual outline (Google Doc, Shared Drive 8040 Training and Manuals)",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "12-chapter outline. Billing chapter is a placeholder until decisions land.",
          "next": "Wade approves the chapter list before any chapter is written.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-4723568927637504",
          "doc": "https://docs.google.com/document/d/1QYm_ct3qcWYQAT0gPefK8eqx0clpowD61gSRnYDTj1k/edit?usp=drivesdk"
        },
        {
          "id": "F3",
          "name": "Draft Operator Expectations and Responsibilities (one Doc; fold in the 36-hour response and abandoned-item rules)",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "Every expectation Wade has stated, numbered and marked PROPOSED, plus the gaps marked DECISION NEEDED.",
          "next": "Wade reads; this doc feeds both the manual and the agreement.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5000405876539392",
          "doc": "https://docs.google.com/document/d/1ZoDHMfuUSSDeCeKzZSj7ABewoM9T9a6HSKg6KpfbIK4/edit?usp=drivesdk"
        },
        {
          "id": "F4",
          "name": "Write the Brand Guidelines for operators from the draft brand board",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "Logo, palette, Inter, what operators may produce vs what needs approval. Wrap standards pending the Core Prints quote.",
          "next": "Wade approves; then it becomes a manual chapter.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5563355829960704",
          "doc": "https://docs.google.com/document/d/1OPFSuCITelnSWsnBOdmk7hliIz7_8MbxpsVdqKbIbcg/edit?usp=drivesdk"
        },
        {
          "id": "F5",
          "name": "Write the operator-agreement business terms sheet for counsel (not a contract draft)",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "A term sheet counsel can draft from, not a contract. Every number a WORKING ASSUMPTION. Ends with the terms Wade must decide.",
          "next": "Wade fills the decision list; hand to counsel once engaged.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6451228649259008",
          "doc": "https://docs.google.com/document/d/1hRdphs_BL_0rPVQW5mGIs4SJ3ysg1lp84i7mCMd3BNs/edit?usp=drivesdk"
        },
        {
          "id": "F6",
          "name": "Write the Franchise Legal and Economic Questions memo for counsel (DC vs Virginia, FDD, fractional model, earnings claims)",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "98 citations, opens NOT LEGAL ADVICE. Five places Wade's assumptions conflict with the FTC rule or Virginia law.",
          "next": "Adam reads it first. Then Wade. Then counsel.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6188256391659520",
          "doc": "https://docs.google.com/document/d/1i563OJt3M_r3_3yAd7M3S3Gze0-f80MaK3QpZv6clZs/edit?usp=drivesdk"
        },
        {
          "id": "F7",
          "name": "Build the Franchise Offering Assumptions sheet (working numbers only, not for external use)",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "Internal only. $19,200 package, 16/84 split, $160k nine-pack, sixth-share, each with source and what would confirm it.",
          "next": "Stays internal; update as numbers get evidence.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6169753672548352",
          "doc": "https://docs.google.com/document/d/1wYRpRpQYgDkdKikYdKr5s2HAW3kotFVhOtao0qdxydk/edit?usp=drivesdk"
        },
        {
          "id": "H1",
          "name": "Draft the Area Operations Director job description (Google Doc) for Wade's review",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "No dollar figures. Title flagged: Area Operations Director vs Deputy Director of Sales vs Fxbg Business Dev Director.",
          "next": "Wade confirms the title and edits; comp stays out until decision 4.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5009124391714816",
          "doc": "https://docs.google.com/document/d/1LV0XtepZnX1_Kvy2cKLRM-ngJWSOn55xlsFFyjA0v1M/edit?usp=drivesdk"
        },
        {
          "id": "H3",
          "name": "Build the hiring scorecard, interview questions, and candidate questionnaire",
          "kind": "doc",
          "status": "active",
          "owner": "Adam",
          "note": "Seven competencies with anchored 1–4 scales, two questions each, three scenarios, a 9-question pre-screen, three comp scenarios.",
          "next": "Wade reacts to the comp scenarios; the rest waits on the JD.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6194853461426176",
          "doc": "https://docs.google.com/document/d/1_9CPA4xvhb2m4fai87aIr813Tg5FZoyOIz8vYeG2SoE/edit?usp=drivesdk"
        }
      ]
    },
    {
      "id": "week",
      "label": "Adam this week",
      "hint": "Calls, chases, hand-offs. Short.",
      "items": [
        {
          "id": "W1",
          "name": "Smiota sync, Thu 1:00 PM",
          "kind": "action",
          "status": "planned",
          "owner": "Adam / Wade",
          "note": "One question to land: does 179 (gray out Decline while the door is open) need Smiota? Also get their outdoor-rating position in writing.",
          "next": "Ask it in the first five minutes. Write the answer into GQueues 179.",
          "gq": null,
          "doc": null
        },
        {
          "id": "L3d",
          "name": "Get a Station wrap quote from Core Prints (Brett Irby) and order on Wade's OK",
          "kind": "action",
          "status": "planned",
          "owner": "Adam",
          "note": "Voicemail Tue, email Wed asking for the apparel quote, shirt visuals for Wade, and a wrap quote for three stations.",
          "next": "If no reply by Friday, call 540-207-0188 again.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-4727649415004160",
          "doc": null
        },
        {
          "id": "W3",
          "name": "Tracker cell E181 and the polo sheet",
          "kind": "action",
          "status": "planned",
          "owner": "Adam",
          "note": "Paste Julieta's transaction-ID screenshot into E181. Polo sizes were due Wed; Nyarai still needs access and Twali needs a row.",
          "next": "Fifteen minutes total.",
          "gq": null,
          "doc": null
        },
        {
          "id": "W4",
          "name": "Neo's MacBook Pro",
          "kind": "action",
          "status": "planned",
          "owner": "Adam",
          "note": "2017 Pro, 16 GB, Intel. Home for a persistent Neo profile.",
          "next": "Create user neo, Remote Login on, office Wi-Fi, send IP and macOS version. Hermes does the rest over SSH.",
          "gq": null,
          "doc": null
        }
      ]
    },
    {
      "id": "queues",
      "label": "Not started",
      "hint": "On the queues with no owner yet.",
      "items": [
        {
          "id": "B4",
          "name": "Get one real Smiota usage export and document its fields (what 'CSB' is, what maps to an app order)",
          "kind": "action",
          "status": "planned",
          "owner": "needs owner",
          "note": "Nothing in Drive or Gmail defines CSB or holds a Smiota export. The billing design is blocked on exactly this.",
          "next": "Ask Ranabir for a sample export covering one known test transaction.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5985568295026688",
          "doc": null
        },
        {
          "id": "L1",
          "name": "Draft the minimum viable Live Operations Support SOP (Google Doc)",
          "kind": "action",
          "status": "planned",
          "owner": "Adam",
          "note": "Two lanes: end-user and operator. Two pages. References the triage flowchart and resourcing tasks already in GQueues.",
          "next": "Write after decision 3; intake section depends on it.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5343831461527552",
          "doc": null
        },
        {
          "id": "L3a",
          "name": "Outdoor Station brought inside, troubleshot with Smiota, and back in service",
          "kind": "action",
          "status": "planned",
          "owner": "needs owner",
          "note": "Smiota: indoor-rated, 'we think it broke and we're not gonna cover it.' Unit comes inside, gets troubleshot, re-sites under an overhang.",
          "next": "Someone owns the move and the Smiota call.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6591966137614336",
          "doc": null
        },
        {
          "id": "L3b",
          "name": "Confirm the Mi Rancho site: power, cover or overhang, internet, install date, who signs",
          "kind": "action",
          "status": "planned",
          "owner": "Wade",
          "note": "No location record exists for Mi Rancho. Needs power, cover, internet, host agreement, date.",
          "next": "Wade names the host contact; Adam builds the site sheet.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5888278695837696",
          "doc": null
        },
        {
          "id": "F8",
          "name": "File the Plave Koch fee letter, pricing sheet, and Roles sheet into the Shared Drive folders built for them",
          "kind": "action",
          "status": "planned",
          "owner": "Adam",
          "note": "Clayton's numbered folders exist and are empty. Fee letter is in Adam's My Drive; pricing and Roles sheets in Wade's.",
          "next": "Move or shortcut each into 8020 / 3020 / 1010 with Wade's OK.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5290599368425472",
          "doc": null
        }
      ]
    },
    {
      "id": "parked",
      "label": "Parked on purpose",
      "hint": "Visible, not active. Wade's call on each.",
      "items": [
        {
          "id": "F9a",
          "name": "Florida Smiota inventory: offer and broker negotiation (Wade)",
          "kind": "backlog",
          "status": "system",
          "owner": "Wade",
          "note": "~131 cabinets, 32 kiosks, older 12/13-door exterior units. Broker negotiation.",
          "next": "Wade records offer made / accepted / declined.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6412418787901440",
          "doc": null
        },
        {
          "id": "F9b",
          "name": "Fractional (sixth-share) participation model: concept note only, after counsel",
          "kind": "backlog",
          "status": "system",
          "owner": "Wade",
          "note": "$3,200 for a sixth of a corporate location, 14% of take. Likely a franchise and plausibly a security. Wade: 'maybe next year.'",
          "next": "Nothing until counsel answers the memo.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-5668908946227200",
          "doc": null
        },
        {
          "id": "F9c",
          "name": "Turnkey Station catalog: format for listing operating Stations a buyer can take over",
          "kind": "backlog",
          "status": "system",
          "owner": "Wade",
          "note": "Showing a priced catalog to a Virginia resident is an 'offer' under the Retail Franchising Act.",
          "next": "After go-live and counsel.",
          "gq": "https://app.gqueues.com/main/task/active/4656852516077568-6231858899648512",
          "doc": null
        }
      ]
    }
  ]
};
let BOARD = FALLBACK;
let FILTER = "all";

function count(data, pred) {
  return data.lanes.reduce((n, lane) => n + lane.items.filter(pred).length, 0);
}

function matches(item, filter) {
  if (filter === "all") return true;
  if (filter === "wade") return (item.owner || "").toLowerCase().includes("wade");
  if (filter === "adam") return (item.owner || "").toLowerCase().includes("adam");
  if (filter === "doc") return item.kind === "doc";
  if (filter === "decision") return item.kind === "decision";
  return true;
}

function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

function render(data) {
  document.getElementById("updated").textContent = "Updated " + data.updated;
  document.getElementById("source").textContent = data.source || "";
  document.getElementById("pulse").innerHTML = `
    <article class="pulse-card lead"><p class="k">Start here</p><p class="v">${esc(data.headline)}</p></article>
    <article class="pulse-card"><p class="k">Wade decides</p><p class="v count-blocked">${count(data, (i) => i.kind === "decision")}</p></article>
    <article class="pulse-card"><p class="k">Drafts to read</p><p class="v count-now">${count(data, (i) => i.kind === "doc")}</p></article>
    <article class="pulse-card"><p class="k">Not started</p><p class="v count-week">${count(data, (i) => i.status === "planned" && i.kind !== "doc")}</p></article>
  `;
  const board = document.getElementById("board");
  board.innerHTML = "";
  data.lanes.forEach((lane) => {
    const col = document.createElement("section");
    col.className = "lane " + lane.id;
    col.innerHTML = `<div class="lane-head"><h2>${esc(lane.label)}</h2><span class="lane-count">${lane.items.length}</span></div><p class="hint">${esc(lane.hint)}</p>`;
    lane.items.forEach((item) => {
      if (!matches(item, FILTER)) return;
      const card = document.createElement("article");
      card.className = "item";
      const links = [
        item.doc ? `<a href="${item.doc}" target="_blank" rel="noopener">Open the Doc</a>` : "",
        item.gq ? `<a href="${item.gq}" target="_blank" rel="noopener">GQueues task</a>` : ""
      ].join("");
      card.innerHTML = `
        <h3>${esc(item.name)}</h3>
        <div class="meta">
          <span class="kind ${item.kind}">${esc(item.kind)}</span>
          <span class="status ${item.status}">${esc(item.status)}</span>
          <span class="owner">${esc(item.owner)}</span>
        </div>
        <p class="note">${esc(item.note)}</p>
        ${item.next ? `<p class="next"><strong>Next:</strong> ${esc(item.next)}</p>` : ""}
        ${links ? `<div class="links">${links}</div>` : ""}
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

async function load() {
  try {
    const res = await fetch("data/execution.json", { cache: "no-store" });
    if (!res.ok) throw new Error("no json");
    BOARD = await res.json();
  } catch (err) { BOARD = FALLBACK; }
  render(BOARD);
}
load();
