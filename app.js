// Sample data mirroring the internship records seed structure
const internships = [
  { id: 1, title: "Frontend Engineering Intern", company: "Vercel", domain: "Engineering", location: "Remote", stipend: "$4,000/mo" },
  { id: 2, title: "UI/UX Design Intern", company: "Figma", domain: "Design", location: "San Francisco, CA", stipend: "$4,500/mo" },
  { id: 3, title: "Product Management Intern", company: "Stripe", domain: "Product", location: "New York, NY", stipend: "$5,000/mo" },
  { id: 4, title: "Data Science Intern", company: "OpenAI", domain: "Data", location: "San Francisco, CA", stipend: "$6,000/mo" },
  { id: 5, title: "Backend Engineering Intern", company: "Supabase", domain: "Engineering", location: "Remote", stipend: "$3,800/mo" }
];

const grid = document.getElementById("internship-grid");
const searchInput = document.getElementById("search-input");
const domainFilter = document.getElementById("domain-filter");
const emptyState = document.getElementById("empty-state");

function renderInternships(items) {
  grid.innerHTML = "";
  
  if (items.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  
  emptyState.classList.add("hidden");

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "internship-card";
    card.innerHTML = `
      <div class="card-header">
        <div>
          <h2 class="role-title">${item.title}</h2>
          <span class="company-name">${item.company}</span>
        </div>
        <span class="badge">${item.domain}</span>
      </div>
      <div class="card-details">
        <span>📍 ${item.location}</span>
        <span>💰 ${item.stipend}</span>
      </div>
      <a href="#apply" class="apply-btn" aria-label="Apply for ${item.title} at ${item.company}">Apply Now</a>
    `;
    grid.appendChild(card);
  });
}

function filterInternships() {
  const query = searchInput.value.toLowerCase();
  const selectedDomain = domainFilter.value;

  const filtered = internships.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(query) || item.company.toLowerCase().includes(query);
    const matchesDomain = selectedDomain === "" || item.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  renderInternships(filtered);
}

searchInput.addEventListener("input", filterInternships);
domainFilter.addEventListener("change", filterInternships);

// Initial render
renderInternships(internships);