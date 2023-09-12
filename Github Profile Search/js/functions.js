import * as v from "./variables.js";

// Get Users
export async function getUser(username) {
  const res = await fetch(v.apiURL + username);
  const data = await res.json();

  //   console.log(data);
  if (!res.ok) {
    errorMessage("User not found, try another");
  } else {
    displayData(data)
    getRepoData(username)
  }
}

const displayData = (user) => {
  console.log(user)
  const html = `
        <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="img-thumbnail rounded-circle"
    />
    <h2>${user.name}</h2>
    <p>${user.login}</p>
    <div class="d-grid">
        <a href="https://github.com/${user.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
    </div>
    <p class="pt-2">
        <span>${user.followers} Followers</span>
        <span>${user.following} Following</span>
    </p>
    <p>${user.public_repos}</p>
    <p><i class="fas fa-marker-alt"></i>${user.location}</p>
    `;

  v.profile.innerHTML = html;
}

const getRepoData = async (username) => {
  const res = await fetch(v.apiURL + username + "/repos");
  const data = await res.json()

  displayRepo(data)
}

const displayRepo = (repoData) => {
  let repo_data = repoData.map((repo) => {
    return `  <span class="repo border border-rounded p-3">
  <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
  <p>
  <strong>Stars: ${repo.starazers_count} |</strong>
  <strong>Watchers: ${repo.watchers_count} |</strong>
  <strong>Forks: ${repo.forks_count}</strong>
  </p>
</span>
  `  
  })

  v.repos.innerHTML = repo_data.slice(0, 2).join("");
  document.querySelector(".hide").style.display = "none"
}

// Error message function
export const errorMessage = (msg) => {
  v.profile.innerHTML = "";
  document.querySelector(".hide").style.display = "none";
  return (v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`);
}