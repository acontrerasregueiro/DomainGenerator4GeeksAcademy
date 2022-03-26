let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  //console.log(pronoun[i])
  for (let x = 0; x < adj.length; x++) {
    // console.log(pronoun[i] + adj[x]);
    for (let z = 0; z < noun.length; z++) {
      console.log(pronoun[i] + adj[x] + noun[z]);
    }
  }
}
