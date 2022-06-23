let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

nums === mystery;

nums === moreNums;

const user = {
  username: "CherryGarcia8",
  email: "garcia@gmail.com",
  notifications: ["message", "alert"],
};

if (user.notifications === []) {
  console.log("NO NEW NOTIFICATIONS!");
}

if (!user.notifications.length) {
  console.log("NO NEW NOTIFICATIONS!");
}
