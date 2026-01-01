import streamlit as st

# =========================================================
# Page config
# =========================================================
st.set_page_config(
    page_title="Ranabir Bhakat",
    page_icon="🧭",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# =========================================================
# Content model (edit this text)
# =========================================================
PROFILE = {
    "name": "Ranabir Bhakat",
    "subtitle": "Executive Technology & Transformation Leader",
    "headline": "Partner | Pharma & Life Sciences | Data, AI & Platform Modernization",
    "location": "New York, NY",
    "links": {
        "LinkedIn": "https://www.linkedin.com/in/ranabirbhakat/",
        # Optional:
        # "Email": "mailto:you@domain.com",
        # "Resume": "https://your-resume-link",
    },
    "about": (
        "For over 25 years, I have operated at the intersection of complex technology and healthcare strategy. "
        "My career—spanning Big 4 consulting leadership and specialized partner roles at ZS Associates—has been defined by one mission:  "
        "leveraging technology to solve the pharmaceutical industry's most critical challenges. "
        "As an alumnus of IIT Kharagpur and Columbia Business School, I blend deep engineering rigor with executive business strategy."
        "I don't just oversee implementations; I build the roadmaps that allow global organizations to pivot, scale, and dominate in the digital health era. "
	"I have been a trusted advisor to C-Suite stakeholders at Top 10 Global Pharma companies, redefining commercial data strategies "
	"and architecting enterprise AI ecosystems that deliver measurable P&L impact. My focus is on 'Agentic Pharma'—creating composable technology foundations that anticipate market shifts before they occur. "
	"My leadership philosophy centers on building high-performance global teams, driving a culture of innovation, and managing multi-million dollar technology portfolios "
	"($150M+) that bridge the gap between corporate vision and field-level execution. "

    ),
    "what_i_do": [
        "Modernize data ecosystems to be AI-ready (platform + governance + quality + reusable patterns).",
        "Design next-gen engagement and CRM ecosystems that shift from siloed operations to context-driven execution.",
        "Lead complex, multi-year programs—bringing structure, transparency, and financial discipline.",
    ],
    "focus_areas": [
        "Enterprise Data Strategy & Target-State Architecture",
        "GenAI / Agentic AI Enablement for Decisioning & Operations",
        "Commercial Data Platforms, Governance & Data Quality",
        "CRM Ecosystem Modernization & Composable Capabilities",
        "Operating Model, PMO/Governance, and Large-Program Execution",
    ],
    "selected_work": [
        # Keep these crisp; add specifics as you prefer
        {"title": "AI-ready Commercial Data Ecosystem", "desc": "Architecture + roadmap + governance model to accelerate analytics and AI adoption."},
        {"title": "Next-Gen CRM Ecosystem", "desc": "Composable capability blueprint across roles with integrated context and insights."},
        {"title": "Program Governance & Execution Model", "desc": "Cross-workstream visibility, decision cadence, and delivery rigor to reduce friction."},
    ],
    "experience": [
        {
            "role": "Partner, Technology Leader",
            "org": "ZS Associates",
            "time": "Recent",
            "bullets": [
                "Lead tech-enabled growth and delivery across major life sciences accounts.",
                "Shape multi-year programs across data platforms, analytics, CRM ecosystems, and AI capabilities.",
                "Establish governance models to improve cross-workstream transparency and execution rigor.",
            ],
        },
        {
            "role": "Technology & Consulting Leadership",
            "org": "EY | IBM | Capgemini (and others)",
            "time": "Earlier",
            "bullets": [
                "Led enterprise transformations spanning strategy, architecture, and implementation.",
                "Built and scaled analytics and platform solutions across global stakeholders.",
            ],
        },
    ],
    "education": [
        {"school": "IIT Kharagpur", "degree": "B.Tech. - Electrical Engineering"},
        {"school": "Columbia Business School", "degree": "MBA - Finance & Strategy"},
    ],
 }

# =========================================================
# Editorial styling (Atul Gawande / Eric Topol-like)
#  - Minimal boxes
#  - Serif headings
#  - Narrow readable column
#  - Thin rules
#  - Tight spacing
# =========================================================
CSS = """
<style>
/* -----------------------------------------
   Editorial + Soft Crimson Gradient Theme
   ----------------------------------------- */

/* Remove Streamlit chrome */
#MainMenu, header, footer { visibility: hidden; }

/* Reading column */
.block-container{
  max-width: 980px;
  padding-top: 1.1rem;
  padding-bottom: 2.2rem;
}

/* Tight vertical rhythm */
div[data-testid="stVerticalBlock"] > div { gap: 0.55rem; }
section { scroll-margin-top: 80px; }

/* ---------- COLOR SYSTEM ---------- */
:root{
  --ink:#111827;         /* near-black */
  --muted:#4b5563;       /* gray-600 */
  --muted2:#6b7280;      /* gray-500 */
  --line:#e5e7eb;        /* gray-200 */

  /* Soft crimson spectrum (NOT maroon) */
  --red-main:#dc2626;    /* crimson-600 */
  --red-soft:#ef4444;    /* red-500 */
  --red-wash:rgba(220,38,38,0.08);
  --red-wash-2:rgba(239,68,68,0.06);
}

/* ---------- BACKGROUND ---------- */
/* Gentle editorial wash — barely noticeable but premium */
.stApp{
  background:
    radial-gradient(900px 420px at 8% -5%, var(--red-wash), transparent 55%),
    radial-gradient(700px 360px at 95% 8%, var(--red-wash-2), transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #fafafa 55%, #ffffff 100%);
  color: var(--ink);
}

/* ---------- TYPOGRAPHY ---------- */
html, body, [class*="css"]{
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  color: var(--ink);
}

h1,h2,h3{
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  letter-spacing: -0.01em;
  color: var(--ink);
}

h1{ font-size: 2.05rem !important; margin: .25rem 0 .2rem 0; }
h2{ font-size: 1.22rem !important; margin: 1.0rem 0 .2rem 0; }
h3{ font-size: 1.05rem !important; margin: .4rem 0 .15rem 0; }

p, li{
  font-size: 0.98rem;
  line-height: 1.65;
}
ul{ padding-left: 1.15rem; margin-top: .25rem; margin-bottom: .25rem; }
li{ margin-bottom: .18rem; }

/* ---------- LINKS ---------- */
a{
  color: var(--red-main);
  text-decoration: none;
  font-weight: 650;
}
a:hover{
  text-decoration: underline;
}

/* ---------- TOP NAV ---------- */
.rb-nav{
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  border-bottom: 1px solid var(--line);
  padding: .25rem 0 .65rem 0;
  margin-bottom: .75rem;
}

.rb-brand{
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.rb-links a{
  margin-left: .9rem;
  color: var(--muted);
  font-weight: 650;
}
.rb-links a:hover{
  color: var(--red-main);
  text-decoration: none;
}

/* ---------- META & KICKER ---------- */
.rb-meta{
  color: var(--muted2);
  font-size: .92rem;
  margin-top: .15rem;
}

.rb-kicker{
  color: var(--red-main);
  text-transform: uppercase;
  letter-spacing: .12em;
  font-weight: 800;
  font-size: .72rem;
}

/* ---------- DIVIDERS ---------- */
/* Subtle gradient rule instead of flat gray */
.rb-rule{
  height:1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(220,38,38,0.35),
    transparent
  );
  margin: .9rem 0;
}

/* ---------- TWO-COLUMN SECTIONS ---------- */
.rb-two{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 1.35rem;
}
@media (max-width: 900px){
  .rb-two{ grid-template-columns: 1fr; }
}

/* ---------- LIST SECTIONS (Selected Work) ---------- */
.rb-listitem{
  padding: .55rem 0;
  border-bottom: 1px solid var(--line);
}
.rb-listitem:last-child{ border-bottom:none; }

.rb-li-title{
  font-weight: 800;
  color: var(--ink);
}

.rb-li-desc{
  color: var(--muted);
  margin-top: .15rem;
}

/* ---------- FOOTER ---------- */
.rb-footer{
  border-top: 1px solid var(--line);
  margin-top: 1.2rem;
  padding-top: .8rem;
  color: var(--muted2);
  font-size: .9rem;
}
</style>
"""
st.markdown(CSS, unsafe_allow_html=True)

# =========================================================
# Top navigation (anchor-safe; NO st.page_link)
# =========================================================
st.markdown(
    """
<div class="rb-nav">
  <div class="rb-brand">Ranabir Bhakat</div>
  <div class="rb-links">
    <a href="#about">About</a>
    <a href="#focus">Focus</a>
    <a href="#work">Selected Work</a>
    <a href="#experience">Experience</a>
    <a href="#contact">Contact</a>
  </div>
</div>
""",
    unsafe_allow_html=True,
)

# =========================================================
# HERO (editorial)
# =========================================================
st.markdown('<section id="top"></section>', unsafe_allow_html=True)
st.markdown(f"<div class='rb-kicker'>{PROFILE['subtitle']}</div>", unsafe_allow_html=True)
st.markdown(f"# {PROFILE['name']}")
st.markdown(f"**{PROFILE['headline']}**")
st.markdown(f"<div class='rb-meta'>{PROFILE['location']} • <a href='{PROFILE['links']['LinkedIn']}' target='_blank'>LinkedIn</a></div>", unsafe_allow_html=True)

st.markdown("<div class='rb-rule'></div>", unsafe_allow_html=True)

# =========================================================
# About + What I do (two-column, no cards)
# =========================================================
st.markdown('<section id="about"></section>', unsafe_allow_html=True)
st.markdown("## About")

left = f"""
<div>
  <p style="margin-top:.2rem;">{PROFILE["about"]}</p>
</div>
"""

right = "<div><h3>What I do</h3><ul>" + "".join([f"<li>{x}</li>" for x in PROFILE["what_i_do"]]) + "</ul></div>"

st.markdown(f"<div class='rb-two'>{left}{right}</div>", unsafe_allow_html=True)

# =========================================================
# Focus
# =========================================================
st.markdown('<section id="focus"></section>', unsafe_allow_html=True)
st.markdown("## Focus")

st.markdown("<ul>" + "".join([f"<li>{x}</li>" for x in PROFILE["focus_areas"]]) + "</ul>", unsafe_allow_html=True)

# =========================================================
# Selected Work (publication-like list)
# =========================================================
st.markdown('<section id="work"></section>', unsafe_allow_html=True)
st.markdown("## Selected Work")

items_html = ""
for it in PROFILE["selected_work"]:
    items_html += f"""
    <div class="rb-listitem">
      <div class="rb-li-title">{it["title"]}</div>
      <div class="rb-li-desc">{it["desc"]}</div>
    </div>
    """
st.markdown(items_html, unsafe_allow_html=True)

# =========================================================
# Experience (minimal, no boxes)
# =========================================================
st.markdown('<section id="experience"></section>', unsafe_allow_html=True)
st.markdown("## Experience")

for exp in PROFILE["experience"]:
    st.markdown(f"### {exp['role']} — {exp['org']}")
    st.markdown(f"<div class='rb-meta'>{exp['time']}</div>", unsafe_allow_html=True)
    st.markdown("<ul>" + "".join([f"<li>{b}</li>" for b in exp["bullets"]]) + "</ul>", unsafe_allow_html=True)

# =========================================================
# Education (tight)
# =========================================================
st.markdown("## Education")
for edu in PROFILE["education"]:
    st.markdown(f"**{edu['school']}** — {edu['degree']}")

# =========================================================
# Contact
# =========================================================
st.markdown('<section id="contact"></section>', unsafe_allow_html=True)
st.markdown("## Contact")

st.markdown(
    f"""
<p style="margin-top:.2rem;">{PROFILE.get("contact_note", "")}</p>
<p><a href="{PROFILE["links"]["LinkedIn"]}" target="_blank">Message me on LinkedIn</a> • <a href="#top">Back to top</a></p>
<div class="rb-footer">© {PROFILE["name"]}</div>
""",
    unsafe_allow_html=True
)
