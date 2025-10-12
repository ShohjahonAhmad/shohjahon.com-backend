const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              reputation
              ranking
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
        variables: { username: "PEACEFUL7777" },
    }),
});
const data = await res.json();
console.log(data.data.matchedUser.submitStatsGlobal.acSubmissionNum);
export {};
