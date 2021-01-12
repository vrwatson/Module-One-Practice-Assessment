const sortPeopleByAge = require("../problems/sortPeopleByAge");

describe("sortPeopleByAge", () => {
  test("sorts from youngest to oldest", () => {
    expect(
      sortPeopleByAge([
        { name: "Corey", age: 100 },
        { name: "Sam", age: 18 },
        { name: "Sparky", age: 500 },
        { name: "Peter", age: 50 },
      ])
    ).toEqual([
      { name: "Sam", age: 18 },
      { name: "Peter", age: 50 },
      { name: "Corey", age: 100 },
      { name: "Sparky", age: 500 },
    ]);
    expect(
      sortPeopleByAge([
        { name: "Corey", age: 1000 },
        { name: "Sam", age: 18 },
        { name: "Sparky", age: 500 },
        { name: "Peter", age: 50 },
      ])
    ).toEqual([
      { name: "Sam", age: 18 },
      { name: "Peter", age: 50 },
      { name: "Sparky", age: 500 },
      { name: "Corey", age: 1000 },
    ]);
  });

});
