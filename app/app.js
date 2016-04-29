import 'es6-promise';
import 'whatwg-fetch';

//constructor

class Profile {
  constructor(avatar, username, joined, followers, starred, following, organizations, repos) {
    this.avatar = avatar;
    this.username = username;
    this.joined = joined;
    this.followers = followers;
    this.starred = starred;
    this.following = following;
    this.organizations = organizations;
    this.repos = repos;

    this.getData();
  }

  getData() {
    fetch(`https://api.github.com/users/shonhartman`)
      .then((response) => {
        return response.json();
      })
  .then((response) => {
    console.log(response);
    this.avatar = response.avatar_url;
    this.username = response.login;
    this.joined = response.created_at;
    this.followers = response.followers;
    this.starred = response.starred;
    this.following = response.following;
    this.organizations = response.organizations;
    this.repo_url = response.repos_url;

    fetch(this.repo_url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.repos = response;
        this.render();
      })


  });
  }

  render() {

    let avatar = document.querySelector("#avatar");
    avatar.src = this.avatar;

    let username = document.querySelector("#username");
    username.textContent = this.username;

    let joined = document.querySelector("#joined");
    joined.innerHTML = this.joined;

    let followers = document.querySelector("#followers");
    followers.innerHTML = this.followers;

    let following = document.querySelector("#following");
    following.innerHTML = this.following;

    this.repos.forEach((repo) => {
      let li = document.createElement("li");

      let i = document.createElement("i");
      i.classList.add("fa");
      i.classList.add("fa-book");
      li.appendChild(i);

      let text = document.createTextNode(repo.name);
      li.appendChild(text);

      document.querySelector("#repos").appendChild(li);
    });

    // let repos = document.querySelector("#repos");
    // repos.innerHTML = this.repos_url;

}

}

let profile = new Profile();
