import { Octokit } from "octokit";

// formats a list of class names for CSS
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// composes components
function composeComponents(...components) {
  return <div>{components}</div>;
}

// gets the last commit of the main branch of a **public** repository
async function getLastCommit(owner, repo) {
  const octokit = new Octokit({
    auth: "",
  });

  return octokit
    .request("GET /repos/{owner}/{repo}/commits", {
      owner: owner,
      repo: repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res) => {
      const commits = res.data;
      return new Date(commits[0].commit.committer.date).toDateString();
    });
}

// cookie handlers
function setCookie(name, value, exDays) {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expiration = d.toUTCString();
  document.cookie = `${name}=${value}; expires=${expiration}`;
}
function getCookie(name) {
  // cookie1=value; cookie2=value; cookie3=value;
  let cookies = {};
  document.cookie.split(" ").forEach((pair) => {
    const name = pair.split("=")[0];
    const value = pair.split("=")[1];
    cookies[name] = value;
  });
  return cookies[name];
}
export { classNames, composeComponents, getLastCommit, setCookie, getCookie };
