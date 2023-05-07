import { Octokit } from "octokit";

// formats a list of class names for CSS
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// composes components
function composeComponents(...components) {
  return <div>{components}</div>;
}
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

export { classNames, composeComponents, getLastCommit };
