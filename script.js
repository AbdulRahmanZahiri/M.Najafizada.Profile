// Force-hide transition overlay immediately in case a stale bfcache snapshot restores it.
(() => {
  const overlay = document.getElementById("pg-overlay");
  if (overlay) {
    overlay.classList.add("off");
    overlay.style.opacity = "0";
  }
})();

// ── DATA ─────────────────────────────────────────────────────────────────────

const projects = [
  { title: "Evaluating team-based primary care intervention in Newfoundland and Labrador", details: "CIHR implementation science work to improve interdisciplinary collaboration and service delivery in rural and remote settings.", status: "Active", horizon: "2024–2027" },
  { title: "Refugee health care access through FRAM analysis", details: "System-level mapping of barriers and adaptive pathways for culturally safe care in NL.", status: "Active", horizon: "2024–2025" },
  { title: "Patient-centeredness of Family Care Teams (Picker Principles lens)", details: "Evaluation of patient-centered care implementation in Family Care Teams in Newfoundland and Labrador.", status: "Active", horizon: "2026–2027" },
  { title: "IYS Choices for Youth Project", details: "Enhancing Integrated Youth Services in Newfoundland and Labrador through a mixed-methods, wholistic approach toward improving youth mental health outcomes.", status: "Active", horizon: "2025–2029" },
  { title: "The perception of the public on primary care through social media", details: "Examining how the public discusses and perceives primary care access, quality, and reform through large-scale social media data analysis.", status: "Active", horizon: "2024–2026" },
  { title: "Social accountability in medical education project", details: "Investigating how medical schools can embed social accountability principles to better align education with the needs of underserved communities.", status: "Active", horizon: "2024–2026" }
];

const allGrants = [
  { period: "2026–2027", title: "Principles into Practice: Evaluating the Patient-Centeredness of Family Care Teams in NL Through the Picker Principles", role: "NPA", funder: "MRF Cox Award and Research Grant", amount: "$20,000", amountNum: 20000 },
  { period: "2026–2027", title: "Where Are the Gaps? Mapping Health and Social Services for Pregnant and Parenting People with Substance-Use Disorder in NL", role: "Co-PA", funder: "NLHRF Innovation Grant", amount: "$100,000", amountNum: 100000 },
  { period: "2025–2029", title: "Enhancing Integrated Youth Services in Newfoundland and Labrador: A Mixed-Methods, Wholistic Approach Toward Improving Youth Mental Health", role: "PI", funder: "IYS-Net Phase 2", amount: "$1,607,524", amountNum: 1607524 },
  { period: "2025–2026", title: "The impact of tobacco smoking during pregnancy on the long-term risk of cardiovascular disease in women", role: "Co-Investigator", funder: "CIHR Project Grant", amount: "$100,000", amountNum: 100000 },
  { period: "2024–2029", title: "CREATE: Community-engaged Research in Education, Advocacy, & System Transformation for advancing health Equity", role: "PI / Sub-grantee", funder: "SSHRC Partnership Grant", amount: "$82,500", amountNum: 82500 },
  { period: "2024–2027", title: "Evaluating a complex, team-based primary care intervention in NL: Advancing implementation science", role: "Co-Applicant", funder: "CIHR Team Grant", amount: "$750,000", amountNum: 750000 },
  { period: "2024–2025", title: "Unraveling the complexities of health care for new refugees in NL: A FRAM analysis", role: "PI", funder: "NL SUPPORT – SPOR", amount: "$10,000", amountNum: 10000 },
  { period: "2023–2025", title: "Directed Education on Cannabis for Youth Decision Empowerment (DECYDE) – A Pilot Study", role: "Co-Applicant", funder: "Health Canada – SUAP", amount: "$282,840", amountNum: 282840 },
  { period: "2023–2024", title: "Enhancing Public Health System Governance through Leadership Competencies", role: "Co-Applicant", funder: "CIHR Catalyst Grant", amount: "$100,000", amountNum: 100000 },
  { period: "2023–2024", title: "DECYDE: Planning a strategy with youth to enhance cannabis decision making", role: "Co-Applicant", funder: "CIHR Planning and Dissemination Grant", amount: "$10,000", amountNum: 10000 },
  { period: "2022–2024", title: "Directed Education on Cannabis for Youth Decision Empowerment (DECYDE)", role: "Co-Applicant", funder: "Janeway Foundation Research Award", amount: "$15,000", amountNum: 15000 },
  { period: "2021–2023", title: "Enhancing the lives of older Canadians in Long-term Care in NL", role: "Co-PA", funder: "Canadian Foundation for Healthcare Improvement (CFHI)", amount: "$100,000", amountNum: 100000 },
  { period: "2020–2022", title: "Exploring patient-centered care models in the Canadian context", role: "NPA", funder: "MRF Research Development Fund, Memorial University", amount: "$20,000", amountNum: 20000 },
  { period: "2020–2022", title: "A choice modelling study to explore Canadian consumer preferences for cannabis products", role: "PA", funder: "CCSA – Closing the Gap in Cannabis Research", amount: "$100,000", amountNum: 100000 },
  { period: "2020–2023", title: "An integrated process and outcomes evaluation of cannabis legalisation policies in NL", role: "PA", funder: "CIHR / CCSA", amount: "$496,497", amountNum: 496497 },
  { period: "2020–2021", title: "Canada's Covid-19 Pandemic Response in Low-Income and Homeless or at-risk Populations in Ottawa", role: "Collaborator", funder: "Ontario Ministry of Colleges and Universities", amount: "$198,000", amountNum: 198000 },
  { period: "2020–2021", title: "Education on Racism, Stereotypes and Stigma through Community Engagement: Bridge Inclusivity Training (BIT)", role: "Collaborator", funder: "Department of Medicine", amount: "$16,430", amountNum: 16430 },
  { period: "2019", title: "Prevalence and patterns of use of point-of-care ultrasound (POCUS) in Newfoundland and Labrador", role: "Collaborator", funder: "NL Support", amount: "$25,000", amountNum: 25000 },
  { period: "2018", title: "Planning to explore the social determinants of multidrug-resistant tuberculosis in Sikkim, India", role: "NPA", funder: "Canadian Institute for Health Research", amount: "$20,000", amountNum: 20000 },
  { period: "2017", title: "Country implementation of health-related SDGs: Building Momentum in South Asia", role: "Co-PA", funder: "International Development Research Centre (IDRC)", amount: "$100,000", amountNum: 100000 },
  { period: "2016", title: "Helping community health workers address social causes of poor maternal and child health", role: "NPA", funder: "Faculty of Medicine Start-up Grant, Memorial University", amount: "$6,000", amountNum: 6000 },
  { period: "2014–2016", title: "Social entrepreneurship to improve community health in central Afghanistan", role: "NPA", funder: "Central Asia and Afghanistan Research Fellowship, University of Central Asia", amount: "$20,000", amountNum: 20000 },
  { period: "2015–2016", title: "Evaluation of Community Health Workers Program to improve maternal health in Afghanistan", role: "NPA", funder: "School of Management Research Fund, University of Ottawa", amount: "$6,000", amountNum: 6000 }
];

const allPublications = [
  { year: 2026, authors: "Jacques, Q., Gao, Z., Najafizada, M., et al.", title: "The Cannabis Health Literacy Questionnaire – Assessing Reliability and Known-Groups Validity in a Canadian Adult Sample", journal: "Journal of Drug Education", doi: "https://doi.org/10.1177/00472379261439959", tags: ["cannabis-policy"] },
  { year: 2026, authors: "Wassif, A. R., Najafizada, M., & Mulay, S.", title: "Influence of cultural beliefs and practices on unassisted homebirths in Afghanistan: A qualitative exploration", journal: "PLOS Global Public Health", doi: "https://doi.org/10.1371/journal.pgph.0005870", tags: ["global-health", "equity"] },
  { year: 2025, authors: "Najafizada, M.", title: "Beyond headcount: Four dimensions of Canada's primary care access crisis and a three-level agenda for action", journal: "Frontiers in Medicine", doi: "https://doi.org/10.3389/fmed.2025.1695409", tags: ["primary-care", "equity"] },
  { year: 2025, authors: "Jacques, Q., Donnan, J., Bishop, L., Howells, R., Gao, Z., & Najafizada, M.", title: "Development of a cannabis health literacy questionnaire: Preliminary validation using the Rasch model", journal: "BMC Public Health", doi: "https://doi.org/10.1186/s12889-025-23770-5", tags: ["cannabis-policy"] },
  { year: 2025, authors: "Wright-Brown, T., Gaid, D., Najafizada, M., et al.", title: "Insights from the ground: A qualitative investigation of retailer perspectives in the legal cannabis market in Newfoundland and Labrador, Canada", journal: "PLOS ONE", doi: "https://doi.org/10.1371/journal.pone.0333706", tags: ["cannabis-policy"] },
  { year: 2025, authors: "Lei, N., Cao, Y. H., Vo, A. T. T., Najafizada, M., et al.", title: "Personal discrimination, group discrimination, and associated factors among Chinese Canadians during the COVID-19 pandemic", journal: "Journal of Racial and Ethnic Health Disparities", doi: "https://doi.org/10.1007/s40615-025-02537-z", tags: ["equity"] },
  { year: 2025, authors: "Wassif, A. R., Najafizada, M., & Mulay, S.", title: "Influence of gender norms on unassisted homebirths in Afghanistan: A qualitative study", journal: "SSM – Qualitative Research in Health", doi: "https://doi.org/10.1016/j.ssmqr.2025.100601", tags: ["global-health", "equity"] },
  { year: 2025, authors: "Majumdar, T., Keats, E. C., Tasic, H., Najafizada, M., et al.", title: "Setting research priorities for maternal, newborn and child health, sexual and reproductive health and nutrition in Afghanistan", journal: "BMJ Global Health", doi: "https://doi.org/10.1136/bmjgh-2024-018579", tags: ["global-health"] },
  { year: 2025, authors: "El Baz, S., Keats, E. C., Tasic, H., Najafizada, M., et al.", title: "Setting health systems research priorities for Afghanistan: An application of the CHNRI methodology – a roadmap to 2030", journal: "BMJ Global Health", doi: "https://doi.org/10.1136/bmjgh-2024-018578", tags: ["global-health"] },
  { year: 2025, authors: "Wright-Brown, T., Williams, R., Najafizada, M., et al.", title: "From storefronts to headlines: Framing news media content to understand barriers to cannabis retail operations in Canada", journal: "Contemporary Drug Problems", doi: "https://doi.org/10.1177/00914509251352403", tags: ["cannabis-policy"] },
  { year: 2024, authors: "Wright-Brown, T., Blackwood, M., Bishop, L., Najafizada, M., et al.", title: "Examining the barriers to licensed private cannabis retailers in Canada: A quantitative content analysis of Canadian news media coverage", journal: "Contemporary Drug Problems", doi: "https://doi.org/10.1177/00914509241271654", tags: ["cannabis-policy"] },
  { year: 2024, authors: "Donnan, J. R., Downey, M., Johnston, K., Najafizada, M., & Bishop, L. D.", title: "Examining attributes of retailers that influence where cannabis is purchased: A discrete choice experiment", journal: "Journal of Cannabis Research", doi: "https://doi.org/10.1186/s42238-023-00204-w", tags: ["cannabis-policy"] },
  { year: 2024, authors: "Donnan, J., Johnston, K., Coombs, M., Najafizada, M., & Bishop, L.", title: "Exploring consumer preferences for cannabis edible products to support public health policy: A discrete choice experiment", journal: "PLOS ONE", doi: "https://doi.org/10.1371/journal.pone.0292336", tags: ["cannabis-policy"] },
  { year: 2023, authors: "Newport, K., Bishop, L., Donnan, J., Pal, S., & Najafizada, M.", title: "The COVID-19 pandemic and cannabis use in Canada – a scoping review", journal: "Journal of Cannabis Research", doi: "https://doi.org/10.1186/s42238-023-00196-7", tags: ["cannabis-policy"] },
  { year: 2023, authors: "Donnan, J. R., Johnston, K., Najafizada, M., & Bishop, L. D.", title: "Drivers of Purchase Decisions Among Consumers of Dried Flower Cannabis Products – A Discrete Choice Experiment", journal: "Journal of Studies on Alcohol and Drugs", doi: "https://doi.org/10.15288/jsad.22-00269", tags: ["cannabis-policy"] },
  { year: 2023, authors: "Josey, M., Gaid, D., Bishop, L. D., Najafizada, M., & Donnan, J. R.", title: "The Quality, Readability, and Accuracy of Information on Google About Cannabis and Driving: Quantitative Content Analysis", journal: "JMIR Infodemiology", doi: "https://doi.org/10.2196/43001", tags: ["cannabis-policy"] },
  { year: 2023, authors: "Donnan, J. R., Johnston, K., Coombs, M., Najafizada, M., & Bishop, L. D.", title: "Exploring consumer preferences for cannabis vaping products to support public health policy: A discrete choice experiment", journal: "Applied Health Economics and Health Policy", doi: "https://doi.org/10.1007/s40258-023-00804-w", tags: ["cannabis-policy"] },
  { year: 2022, authors: "Najafizada, M., Rahman, A., Donnan, J., Dong, Z., & Bishop, L.", title: "Analyzing sentiments and themes on cannabis in Canada using 2018 to 2020 Twitter data", journal: "Journal of Cannabis Research", doi: "https://doi.org/10.1186/s42238-022-00132-1", tags: ["cannabis-policy"] },
  { year: 2022, authors: "Donnan, J., Shogan, O., Bishop, L., & Najafizada, M.", title: "Drivers of purchase decisions for cannabis products among consumers in a legalized market: A qualitative study", journal: "BMC Public Health", doi: "https://doi.org/10.1186/s12889-021-12399-9", tags: ["cannabis-policy"] },
  { year: 2022, authors: "Bishop, L. D., Drakes, D. H., Donnan, J. R., Rowe, E. C., & Najafizada, M.", title: "Exploring youths' cannabis health literacy post legalization: A qualitative study", journal: "Journal of Adolescent Research", doi: "https://doi.org/10.1177/07435584221118380", tags: ["cannabis-policy", "equity"] },
  { year: 2022, authors: "Donnan, J., Shogan, O., Bishop, L., Swab, M., & Najafizada, M.", title: "Characteristics that Influence Purchase Choice for Cannabis Products: A Systematic Review", journal: "Journal of Cannabis Research", doi: "https://doi.org/10.1186/s42238-022-00117-0", tags: ["cannabis-policy"] },
  { year: 2021, authors: "Najafizada, M., Rahman, A., & Oxford, K.", title: "Analyzing models of patient-centered care in Canada through a scoping review and environmental scan", journal: "Journal of Public Health (Berlin)", doi: "https://doi.org/10.1007/s10389-021-01528-8", tags: ["primary-care", "equity"] },
  { year: 2021, authors: "Najafizada, M., et al.", title: "Social determinants of multidrug-resistant tuberculosis: A scoping review and research gaps", journal: "Indian Journal of Infectious Disease", doi: "https://doi.org/10.1016/j.ijtb.2020.09.016", tags: ["global-health", "equity"] },
  { year: 2021, authors: "Sheppard, G., et al., & Najafizada, M.", title: "The prevalence and patterns of use of point-of-care ultrasound (POCUS) in Newfoundland and Labrador", journal: "Canadian Journal of Rural Medicine", doi: "https://doi.org/10.4103/cjrm.cjrm_61_20", tags: ["primary-care"] },
  { year: 2019, authors: "Najafizada, M., Potter, B., Bourgeault, I. L., & Labonté, R.", title: "Maternal and child health performance of a national CHW program: A quantitative case study of Afghanistan", journal: "Journal of Global Health Reports", doi: "https://doi.org/10.29392/joghr.3.e2019061", tags: ["global-health", "primary-care"] },
  { year: 2019, authors: "Razzaq, S., Najafizada, M., et al.", title: "National level preparedness for implementing the health-related SDGs in Seven South Asian Countries", journal: "Global Policy", doi: "https://doi.org/10.1111/1758-5899.12753", tags: ["global-health", "equity"] },
  { year: 2019, authors: "Najafizada, M., Labonté, R., & Bourgeault, I. L.", title: "HRH dimensions of community health workers: A case study of rural Afghanistan", journal: "Human Resources for Health", doi: "https://doi.org/10.1186/s12960-019-0347-7", tags: ["global-health", "primary-care"] },
  { year: 2019, authors: "Najafizada, M., Bourgeault, I. L., & Labonté, R.", title: "A gender analysis of a national Community Health Workers program: A case study of Afghanistan", journal: "Global Public Health", doi: "https://doi.org/10.1080/17441692.2018.1471515", tags: ["global-health", "equity"] },
  { year: 2018, authors: "Cometto, G., Tulenko, K., Muula, A. S., & Najafizada, M., et al.", title: "Health policy and system support to optimise community health worker programmes: An abridged WHO guideline", journal: "The Lancet Global Health", doi: "https://doi.org/10.1016/S2214-109X(18)30482-0", tags: ["global-health", "primary-care"] },
  { year: 2017, authors: "Najafizada, M., et al.", title: "Ranked performance of Canada's health system on the international stage: A scoping review", journal: "Healthcare Policy", doi: "http://www.longwoods.com/content/25191", tags: ["equity"] },
  { year: 2017, authors: "Najafizada, S. A. M., Labonté, R., & Bourgeault, I. L.", title: "Social determinants of maternal health in Afghanistan: A review", journal: "Central Asian Journal of Global Health", doi: "http://dx.doi.org/10.5195/cajgh.2017.240", tags: ["global-health", "equity"] },
  { year: 2017, authors: "Najafizada, S. A. M., & Cohen, M.", title: "Community-entrepreneurship tackling poverty in Bamyan Province, Afghanistan", journal: "World Development Perspectives", doi: "http://dx.doi.org/10.1016/j.wdp.2017.02.003", tags: ["global-health"] },
  { year: 2017, authors: "Najafizada, S. A. M., Labonté, R., & Bourgeault, I. L.", title: "Stakeholder's perspective: Sustainability of a community health worker program in Afghanistan", journal: "Evaluation and Program Planning", doi: "http://dx.doi.org/10.1016/j.evalprogplan.2016.11.004", tags: ["global-health"] },
  { year: 2015, authors: "Najafizada, M., et al.", title: "The role of Community Health Workers in Canada and some other high-income countries: A scoping review", journal: "Canadian Journal of Public Health", doi: "https://doi.org/10.17269/CJPH.106.4747", tags: ["primary-care"] },
  { year: 2015, authors: "Azimi, M. D., Najafizada, S. A. M., Khaing, I. K., & Hamajima, N.", title: "Factors Influencing Non-institutional Deliveries in Afghanistan: Secondary Analysis of the Afghanistan Mortality Survey 2010", journal: "Nagoya Journal of Medical Science", doi: null, tags: ["global-health", "equity"] },
  { year: 2014, authors: "Najafizada, S. A. M., Labonté, R., & Bourgeault, I. L.", title: "Community health workers of Afghanistan: A qualitative study of a national program", journal: "Conflict and Health", doi: "https://doi.org/10.1186/1752-1505-8-26", tags: ["global-health", "primary-care"] }
];

const papersUnderReview = [
  { authors: "Najafizada, M., Marthyman, A., Samak, E., & Aubrey-Bassler, K.", title: "Accounting for the family physician workforce in Newfoundland and Labrador: A stock and flow analysis, 2014–2024", journal: "Canadian Family Physician", tags: ["primary-care"] },
  { authors: "Jacques, Q., Wright-Brown, T., Donnan, J., Bishop, L., Gao, Z., & Najafizada, M.", title: "Assessing policy support for cannabis health literacy in Canada: A document analysis", journal: "Contemporary Drug Problems", tags: ["cannabis-policy"] },
  { authors: "Jama, S., Ambade, P., Kitty, D., Najafizada, M., et al.", title: "Equity as the New Normal: A Mixed Method Study on the Economic Consequences of the Pandemic within the Covid Impact Project on Systemically Oppressed Populations", journal: "BMJ Open", tags: ["equity"] }
];

const mediaItems = [
  { date: "May 2026", outlet: "Afghanistan International", type: "Commentary", title: "Commentary on midwifery, maternal health, and rural–urban inequities in Afghanistan", url: "https://www.afintl.com/202605052675" },
  { date: "May 2026", outlet: "Memorial University Gazette", type: "Media Coverage", title: "Holistic approach: $900K to grow N.L. multidisciplinary health research ecosystem", url: "https://gazette.mun.ca/research/holistic-approach/" },
  { date: "Sep 2025", outlet: "Memorial University Gazette", type: "Media Coverage", title: "Team effort: $1.6 million for community-university research partnership to help N.L. youth facing complex challenges", url: "https://gazette.mun.ca/research/team-effort-2/" },
  { date: "Apr 2024", outlet: "Strength in Community Podcast", type: "Podcast", title: "Do you get patient-centered cancer care? An inspirational chat with Dr. Maisam Najafizada", url: "https://strength-in-community.ca/2024/04/24/episode-7-do-you-get-patient-centered-cancer-care-a-cozy-hopeful-and-inspirational-chat-with-dr-maisam-najafizada/" },
  { date: "Feb 2024", outlet: "Memorial University Gazette", type: "Event", title: "Round Table Discussion: Canada's Progress Towards Agenda 2030 — Faculty moderator", url: "https://gazette.mun.ca/events/round-table-discussion-canadas-progress-towards-agenda-2030/" },
  { date: "Apr 2023", outlet: "Memorial University Gazette", type: "Media Coverage", title: "Legal cannabis: Making space for safe use in Newfoundland and Labrador", url: "https://gazette.mun.ca/public-engagement/legal-cannabis/" },
  { date: "Jan 2022", outlet: "Global News Radio 770 CHQR", type: "Broadcast", title: "Driving and cannabis — The Drive with Ted Henley", url: "https://www.mun.ca/pharmacy/research/cherp/sharing-our-knowledge/" },
  { date: "Jan 2022", outlet: "The Conversation", type: "Commentary", title: "Cannabis-impaired driving: Here's what we know about the risks of weed behind the wheel", url: "https://theconversation.com/cannabis-impaired-driving-heres-what-we-know-about-the-risks-of-weed-behind-the-wheel-173823" },
  { date: "Mar 2021", outlet: "The Conversation", type: "Commentary", title: "Cannabis education should aim to normalize — not prevent — safe and legal use", url: "https://theconversation.com/cannabis-education-should-aim-to-normalize-not-prevent-safe-and-legal-use-153966" },
  { date: "Sep 2019", outlet: "The Conversation", type: "Commentary", title: "Universal health coverage alone won't radically improve global health", url: "https://theconversation.com/universal-health-coverage-alone-wont-radically-improve-global-health-122692" },
  { date: "Aug 2019", outlet: "The Conversation", type: "Commentary", title: "#HelloMyNameIs: A simple act to improve patients' experiences of care", url: "https://theconversation.com/hellomynameis-a-simple-act-to-improve-patients-experiences-of-care-121082" },
  { date: "Dec 2018", outlet: "The Conversation", type: "Commentary", title: "Leaving-no-one-behind conveys a paternalistic approach to development", url: "https://theconversation.com/leaving-no-one-behind-conveys-a-paternalistic-approach-to-development-107322" },
  { date: "Sep 2018", outlet: "The Conversation", type: "Commentary", title: "Women health-care volunteers have no upward mobility", url: "https://theconversation.com/women-health-care-volunteers-have-no-upward-mobility-101781" },
  { date: "Nov 2020", outlet: "Tolonews", type: "Commentary", title: "Afghanistan's Need to Prepare for the COVID-19 Vaccine", url: "https://tolonews.com/opinion-167888" }
];

const futureResearch = [
  { title: "Primary care access and continuity modeling in Atlantic Canada", status: "In Development", focus: "System-level modeling of access gaps and workforce distribution.", horizon: "2027+" },
  { title: "Health equity indicators for socially accountable medical education", status: "Planned", focus: "Measurement framework linking educational accountability to population outcomes.", horizon: "2027+" },
  { title: "Cross-country comparative work on community-engaged primary care", status: "Planned", focus: "Comparative implementation evidence from Canada and low-resource settings.", horizon: "2028+" }
];

// ── CARD BUILDERS ─────────────────────────────────────────────────────────────

function buildPublicationCard(pub) {
  const el = document.createElement("article");
  el.className = "pub-item";
  const doi = pub.doi
    ? `<a class="doi-link" href="${pub.doi}" target="_blank" rel="noreferrer">View article →</a>`
    : `<span class="doi-link muted">Print only</span>`;
  const badges = pub.tags.map(t => `<span class="badge">${t.replace(/-/g," ")}</span>`).join("");
  el.innerHTML = `
    <div class="pub-year-tag">${pub.year}</div>
    <h4>${pub.title}</h4>
    <p class="pub-authors">${pub.authors}</p>
    <p class="pub-journal"><em>${pub.journal}</em></p>
    <div class="pub-foot">${doi}<div class="badges">${badges}</div></div>`;
  return el;
}

function buildUnderReviewCard(pub) {
  const el = document.createElement("article");
  el.className = "pub-item";
  const badges = pub.tags.map(t => `<span class="badge">${t.replace(/-/g," ")}</span>`).join("");
  el.innerHTML = `
    <div class="under-review-mark">Under Review</div>
    <h4>${pub.title}</h4>
    <p class="pub-authors">${pub.authors}</p>
    <p class="pub-journal">Submitted to: <em>${pub.journal}</em></p>
    <div class="badges">${badges}</div>`;
  return el;
}

function buildGrantCard(g) {
  const el = document.createElement("article");
  el.className = "entry";
  el.innerHTML = `
    <div class="entry-head">
      <h4>${g.title}</h4>
      <span class="grant-amount">${g.amount}</span>
    </div>
    <p class="meta">${g.period} &nbsp;·&nbsp; <strong>${g.role}</strong></p>
    <p class="grant-funder">${g.funder}</p>`;
  return el;
}

function buildProjectCard(p) {
  const el = document.createElement("article");
  el.className = "entry";
  const cls = p.status === "Active" ? "pill-active" : "pill-review";
  el.innerHTML = `
    <div class="entry-head">
      <h4>${p.title}</h4>
      <span class="pill ${cls}">${p.status}</span>
    </div>
    <p class="meta">${p.horizon}</p>
    <p>${p.details}</p>`;
  return el;
}

function buildMediaCard(item) {
  const el = document.createElement("article");
  el.className = "media-card";
  el.innerHTML = `
    <div class="media-meta">
      <span class="media-date">${item.date}</span>
      <span class="media-type">${item.type}</span>
    </div>
    <h4><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h4>
    <p class="media-outlet">${item.outlet}</p>`;
  return el;
}

function buildFutureCard(item) {
  const el = document.createElement("article");
  el.className = "card";
  const cls = item.status === "In Development" ? "pill-active" : "pill-planned";
  el.innerHTML = `
    <span class="pill ${cls}" style="margin-bottom:.65rem;display:inline-block;">${item.status}</span>
    <h3>${item.title}</h3>
    <p class="meta" style="font-size:.82rem;color:var(--ink-400)">${item.horizon}</p>
    <p style="font-size:.9rem;color:var(--ink-600)">${item.focus}</p>`;
  return el;
}

// ── RENDER HELPERS ────────────────────────────────────────────────────────────

function renderList(id, items, builder) {
  const c = document.getElementById(id);
  if (!c) return;
  c.innerHTML = "";
  items.forEach(item => c.appendChild(builder(item)));
}

// ── PUBLICATIONS FILTER ───────────────────────────────────────────────────────

function renderPublications(filter = "all") {
  const filtered = filter === "all"
    ? allPublications
    : allPublications.filter(p => p.tags.includes(filter));

  const chip = document.getElementById("pub-count");
  if (chip) chip.textContent = filter === "all"
    ? `${allPublications.length} peer-reviewed articles`
    : `${filtered.length} of ${allPublications.length} articles`;

  renderList("publication-list", filtered, buildPublicationCard);
}

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPublications(btn.dataset.filter);
    });
  });
}

// ── YEAR DISTRIBUTION CHART ───────────────────────────────────────────────────

function buildYearChart() {
  const container = document.getElementById("year-chart");
  if (!container) return;

  const counts = {};
  allPublications.forEach(p => { counts[p.year] = (counts[p.year] || 0) + 1; });
  const years = Object.keys(counts).sort((a,b) => b - a);
  const max = Math.max(...Object.values(counts));

  container.innerHTML = "";
  years.forEach(yr => {
    const pct = Math.round((counts[yr] / max) * 100);
    const row = document.createElement("div");
    row.className = "year-bar-row";
    row.innerHTML = `
      <span class="year-bar-label">${yr}</span>
      <div class="year-bar-track">
        <div class="year-bar-fill" data-pct="${pct}%" style="width:0"></div>
      </div>
      <span class="year-bar-count">${counts[yr]}</span>`;
    container.appendChild(row);
  });

  // Animate on scroll
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      container.querySelectorAll(".year-bar-fill").forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.pct; }, i * 60);
      });
      obs.disconnect();
    }
  }, { threshold: .2 });
  obs.observe(container);
}

// ── GRANT BAR CHART ───────────────────────────────────────────────────────────

function buildGrantBars() {
  const container = document.getElementById("grant-bars");
  if (!container) return;

  const colors = ["c-sky","c-gold","c-violet","c-coral","c-emerald"];
  const top = [...allGrants].sort((a,b) => b.amountNum - a.amountNum).slice(0, 8);
  const max = top[0].amountNum;

  container.innerHTML = "";
  top.forEach((g, i) => {
    const pct = Math.round((g.amountNum / max) * 100);
    const row = document.createElement("div");
    row.className = "grant-bar-item";
    row.innerHTML = `
      <div class="grant-bar-meta">
        <span class="grant-bar-title">${g.title.length > 75 ? g.title.slice(0,72)+"…" : g.title}</span>
        <span class="grant-bar-amount">${g.amount}</span>
      </div>
      <div class="grant-bar-track">
        <div class="grant-bar-fill ${colors[i % colors.length]}" data-pct="${pct}%" style="width:0"></div>
      </div>`;
    container.appendChild(row);
  });

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      container.querySelectorAll(".grant-bar-fill").forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.pct; }, i * 80);
      });
      obs.disconnect();
    }
  }, { threshold: .2 });
  obs.observe(container);
}

// ── SLIDING NAV PILL ──────────────────────────────────────────────────────────

function setupNavPill() {
  const navLinks = document.getElementById("nav-links");
  if (!navLinks) return;

  // Only run on wider screens (pill doesn't work in mobile dropdown layout)
  if (window.innerWidth <= 900) return;

  const pill = document.createElement("span");
  pill.className = "nav-pill";
  navLinks.insertBefore(pill, navLinks.firstChild);

  // All visible nav anchors (skip the hidden contact link on desktop)
  const anchors = Array.from(
    navLinks.querySelectorAll("a:not(.nav-contact-link)")
  );
  const activeLink = navLinks.querySelector("a.active-page:not(.nav-contact-link)");

  function movePill(el) {
    if (!el) { pill.style.opacity = "0"; return; }
    const wrapRect = navLinks.getBoundingClientRect();
    const elRect   = el.getBoundingClientRect();
    pill.style.opacity = "1";
    pill.style.left    = (elRect.left - wrapRect.left) + "px";
    pill.style.top     = (elRect.top  - wrapRect.top)  + "px";
    pill.style.width   = elRect.width  + "px";
    pill.style.height  = elRect.height + "px";
  }

  // Place pill instantly at active link (no transition on first paint)
  pill.style.transition = "none";
  movePill(activeLink);
  // Re-enable transitions on next frame
  requestAnimationFrame(() => { pill.style.transition = ""; });

  anchors.forEach(a => {
    a.addEventListener("mouseenter", () => movePill(a));
    a.addEventListener("mouseleave", () => movePill(activeLink));
  });

  // Reposition on window resize
  window.addEventListener("resize", () => movePill(activeLink), { passive: true });
}

// ── NAV SETUP ─────────────────────────────────────────────────────────────────

function setupNav() {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  // ── Scroll progress bar ──────────────────────────────────────────
  const progressWrap = document.createElement("div");
  progressWrap.className = "scroll-progress";
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress-bar";
  progressWrap.appendChild(progressBar);
  document.body.prepend(progressWrap);

  // ── Smart scroll behavior ────────────────────────────────────────
  let lastY = 0;
  let ticking = false;

  if (nav) {
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const docH = document.documentElement.scrollHeight - window.innerHeight;

        // Progress bar
        progressBar.style.width = docH > 0 ? ((y / docH) * 100) + "%" : "0%";

        // Scrolled state (glass intensifies)
        nav.classList.toggle("scrolled", y > 50);

        // Compact mode (height shrinks)
        nav.classList.toggle("compact", y > 100);

        // Smart hide/show — hide when scrolling down past 160px, show when scrolling up
        if (y > lastY + 6 && y > 160) {
          nav.classList.add("nav-hidden");
        } else if (y < lastY - 6 || y < 120) {
          nav.classList.remove("nav-hidden");
        }

        lastY = y;
        ticking = false;
      });
    }, { passive: true });
  }

  // ── Mobile hamburger ─────────────────────────────────────────────
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      if (open && nav) nav.classList.remove("nav-hidden");
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

// ── RIPPLE HELPER ─────────────────────────────────────────────────────────────

function createRipple(el, e) {
  const rect = el.getBoundingClientRect();
  const d = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - d / 2;
  const y = e.clientY - rect.top  - d / 2;

  const existing = el.querySelector(".nav-ripple");
  if (existing) existing.remove();

  const ripple = document.createElement("span");
  ripple.className = "nav-ripple";
  ripple.style.cssText = `width:${d}px;height:${d}px;left:${x}px;top:${y}px`;
  el.appendChild(ripple);

  // Clean up after animation
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

// ── PAGE TRANSITIONS ──────────────────────────────────────────────────────────

function setupTransitions() {
  const overlay = document.getElementById("pg-overlay");
  const hideOverlay = () => {
    if (!overlay) return;
    overlay.classList.add("off");
    overlay.style.opacity = "0";
    overlay.style.display = "none";
  };

  // Keep overlay fully disabled to avoid black-screen state on back/forward restore.
  hideOverlay();
  window.addEventListener("pageshow", hideOverlay);
  window.addEventListener("pagehide", hideOverlay);
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────

function setupReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vis");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll(".reveal").forEach(el => {
    obs.observe(el);
  });
}

// ── BACK TO TOP ───────────────────────────────────────────────────────────────

function setupBackTop() {
  const btn = document.getElementById("back-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("vis", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ── COUNTER ANIMATION ─────────────────────────────────────────────────────────

function animateCounters() {
  const els = document.querySelectorAll(".stat-num[data-target]");
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = el.dataset.target;
      const isDecimal = target.includes(".");
      const num = parseFloat(target);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      const start = performance.now();

      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = num * eased;
        el.textContent = prefix + (isDecimal ? val.toFixed(2) : Math.floor(val)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target + suffix;
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(el => obs.observe(el));
}

// ── COPY EMAIL ────────────────────────────────────────────────────────────────

function setupCopyEmail() {
  const btn = document.getElementById("copy-email");
  const status = document.getElementById("copy-status");
  if (!btn || !status) return;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("mnajafizada@mun.ca");
      status.textContent = "Email address copied!";
      setTimeout(() => { status.textContent = ""; }, 3000);
    } catch {
      status.textContent = "Please copy manually.";
    }
  });
}

// ── SECTION GHOST NUMBERS ────────────────────────────────────────────────────

function addSectionDecorations() {
  document.querySelectorAll('.section-light').forEach((section, i) => {
    const ghost = document.createElement('span');
    ghost.className = 'section-ghost-num';
    ghost.setAttribute('aria-hidden', 'true');
    ghost.textContent = String(i + 1).padStart(2, '0');
    section.appendChild(ghost);
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────

setupNav();
addSectionDecorations();
setupNavPill();
setupReveal();
setupBackTop();
setupTransitions();
animateCounters();
setupCopyEmail();
setupFilters();

// Page-specific initializations
if (document.getElementById("publication-list")) {
  renderPublications();
  buildYearChart();
  renderList("under-review-list", papersUnderReview, buildUnderReviewCard);
}
if (document.getElementById("grant-list")) {
  renderList("grant-list", allGrants, buildGrantCard);
  buildGrantBars();
}
if (document.getElementById("project-list")) {
  renderList("project-list", projects, buildProjectCard);
  renderList("future-list", futureResearch, buildFutureCard);
}
if (document.getElementById("media-list")) {
  renderList("media-list", mediaItems, buildMediaCard);
}
