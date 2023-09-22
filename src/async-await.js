// async function fetchUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// fetchUser();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode1.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

async function getData() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    );
    console.log(users[0]);
    console.log(posts[1]);
    console.log(albums[2]);
  } catch {
    console.log("error");
  }
}

console.log(getData());
