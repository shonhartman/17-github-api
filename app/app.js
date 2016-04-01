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
    this.repos = response.repos;

    this.render();

  });
  }

  render() {

    let avatar = document.querySelector("#avatar");
    document.createElement("img");
    avatar.innerHTML = this.avatar;

    let username = document.querySelector("#username");
    username.textContent = this.username;

    let joined = document.querySelector("#joined");
    joined.innerHTML = this.joined;

    let followers = document.querySelector("#followers");
    followers.innerHTML = this.followers;

    let following = document.querySelector("#following");
    following.innerHTML = this.following;








}

}

let profile = new Profile();
