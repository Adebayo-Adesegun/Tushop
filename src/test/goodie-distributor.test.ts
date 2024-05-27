import { distributeGoodies } from "../functions/goodie-distributor";

describe("distributeGoodies function", () => {
  it("should distribute goodies and calculate price difference correctly", () => {
    // Sample input data from sample_input.txt
    const goodies = [
      { name: "Fitbit Plus", price: 7980 },
      { name: "IPods", price: 22349 },
      { name: "MI Band", price: 999 },
      { name: "Cult Pass", price: 2799 },
      { name: "Macbook Pro", price: 229900 },
      { name: "Digital Camera", price: 11101 },
      { name: "Alexa", price: 9999 },
      { name: "Sandwich Toaster", price: 2195 },
      { name: "Microwave Oven", price: 9800 },
      { name: "Scale", price: 4999 },
    ];
    const numEmployees = 4;

    const outputString = distributeGoodies(goodies, numEmployees);

    // Sample expected output from sample_output.txt
    const expectedOutput = `The goodies selected for distribution are:
    Fitbit Plus: 7980
    Microwave Oven: 9800
    Alexa: 9999
    Digital Camera: 11101
    And the difference between the chosen goodie with highest price and the lowest price is 3121`;

    const trimmedExpectedOutput = expectedOutput
      .trim()
      .split("\n")
      .map((line) => line.trim());

    expect(outputString).toEqual(trimmedExpectedOutput.join("\n"));
  });

  it("should distribute goodies and calculate price difference correctly (6 employees)", () => {
    const goodies = [
      { name: "Fitbit Plus", price: 7980 },
      { name: "IPods", price: 22349 },
      { name: "MI Band", price: 999 },
      { name: "Cult Pass", price: 2799 },
      { name: "Macbook Pro", price: 229900 },
      { name: "Digital Camera", price: 11101 },
      { name: "Alexa", price: 9999 },
      { name: "Sandwich Toaster", price: 2195 },
      { name: "Microwave Oven", price: 9800 },
      { name: "Scale", price: 4999 },
    ];
    const numEmployees = 6;

    const expectedOutput = `The goodies selected for distribution are:
      Sandwich Toaster: 2195
      Cult Pass: 2799
      Scale: 4999
      Fitbit Plus: 7980
      Microwave Oven: 9800
      Alexa: 9999
      And the difference between the chosen goodie with highest price and the lowest price is 7804`;

    const trimmedExpectedOutput = expectedOutput
      .trim()
      .split("\n")
      .map((line) => line.trim());

    expect(distributeGoodies(goodies, numEmployees)).toEqual(
      trimmedExpectedOutput.join("\n")
    );
  });

  it("should distribute goodies and calculate price difference correctly (2 employees)", () => {
    const goodies = [
      { name: "Fitbit Plus", price: 7980 },
      { name: "IPods", price: 22349 },
      { name: "MI Band", price: 999 },
      { name: "Cult Pass", price: 2799 },
      { name: "Macbook Pro", price: 229900 },
      { name: "Digital Camera", price: 11101 },
      { name: "Alexa", price: 9999 },
      { name: "Sandwich Toaster", price: 2195 },
      { name: "Microwave Oven", price: 9800 },
      { name: "Scale", price: 4999 },
    ];
    const numEmployees = 2;

    const expectedOutput = `The goodies selected for distribution are:
      Microwave Oven: 9800
      Alexa: 9999
      And the difference between the chosen goodie with highest price and the lowest price is 199`;

    const trimmedExpectedOutput = expectedOutput
      .trim()
      .split("\n")
      .map((line) => line.trim());

    expect(distributeGoodies(goodies, numEmployees)).toEqual(
      trimmedExpectedOutput.join("\n")
    );
  });
});
