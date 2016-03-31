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
    this.joined = response.joined;
    this.followers = response.followers;
    this.starred = response.starred;
    this.following = response.following;
    this.organizations = response.organizations;
    this.repos = response.repos;

    this.render();

  });
  }

  render() {

    let username = document.querySelector("#username");
    username.textContent = this.username;

    let avatar = document.querySelector


}

}

let profile = new Profile();
