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

    this.render();
  }

  render() {
    let h1 = document.querySelector = document.createElement("h1");
    h1.innerHTML = this.username;


  let img = document.querySelector = document.createElement("img");
  img.innerHTML = this.avatar;

  // let item =  document.querySelector("#textField").value;
  // let li = document.createElement("li");
  // li.innerHTML = item;
  // let ul = document.querySelector("#TodoList");
  // ul.appendChild(li);
}

}

fetch (`https://api.github.com/users/shonhartman`)
  .then((response) => {
  return response.json();
})
.then((response) => {
  console.log(response);
});
