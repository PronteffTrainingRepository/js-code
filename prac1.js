console.log(`person 1 :show ticket`);
console.log(`person 2 :show ticket`);

const preMovie = async () => {
  const promiseTomBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`ticket`), 1000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const addButter = new Promise((resolve, reject) => resolve(`butter`));

  let ticket = await promiseTomBringingTicks;

  console.log(`Tom : I have the ${ticket}`);
  console.log("sam : we should go in");
  console.log("Tom : I am Hungry");

  let popcorn = await getPopcorn;

  console.log(`sam : I have the ${popcorn}`);
  console.log("Tom : we should go in");
  console.log("Sam : I need Butter With popcorn");

  let butter = await addButter;

  console.log(`sam : I got some ${butter}`);
  console.log("Tom : anything else bro?");
  console.log("Sam : Let's go in bro");
  console.log("Tom : thank you for the reminder");

  return ticket;
};

preMovie().then((m) => console.log(`person3 : shows ${m}`));

console.log("person 4 : shows ticket");
console.log("person 5 : shows ticket");
