import { RequestHandler } from "express";

export const getResults: RequestHandler = async (req, res, next) => {
    const username = req.query.username || "PEACEFUL7777";
    const response = await fetch("https://leetcode.com/graphql", {
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
          variables: { username },
        }),
      });
      
      const data = await response.json();
      const results = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

      res.status(200).json({results})
} 