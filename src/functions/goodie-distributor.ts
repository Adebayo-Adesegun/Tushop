import { Goodie } from "../data/goodies";

// Function to parse lines from sample_input.txt into Goodie objects
function parseGoodiesData(lines: string[]): [Goodie[], number] {
  // Extract the number of employees (assuming it's the first line)
  const employeeLine = lines.shift()!.trim(); // Remove leading/trailing whitespace
  const numEmployeesFromFile = parseInt(employeeLine.split(':')[1], 10);

  // Extract goodies and prices, building an array of Goodie objects
  const goodies: Goodie[] = [];
  for (let i = 1; i < lines.length; i++) { // Skip first two lines (employees and header)
    const line = lines[i].trim();
    const [name, priceString] = line.split(':');
    const price = parseInt(priceString.trim(), 10);
    goodies.push({ name, price });
  }

  // Return the data in the expected format (array of Goodie objects)
    return [goodies, numEmployeesFromFile];
}

/**
 * Distribute goodies to employees and calculate the price difference between the chosen goodie with highest price and the lowest price
 * @param goodies Goodie[]
 * @param numEmployees number
 * @returns string
 * */
function distributeGoodies(goodies: Goodie[], numEmployees: number): string {
    const sortedGoodies = goodies.slice().sort((a, b) => a.price - b.price);

    let minPriceDifference = Infinity // Set to infinity to ensure any difference found will be smaller;
    let selectedGoodiesWithMinDiff: string[] = [];
  
    for (let i = 0; i <= sortedGoodies.length - numEmployees; i++) {
      const currentSelection = sortedGoodies.slice(i, i + numEmployees).map((goodie) => goodie.name);
      const currentPriceDifference = sortedGoodies[i + numEmployees - 1].price - sortedGoodies[i].price;
  
      if (currentPriceDifference < minPriceDifference) {
        minPriceDifference = currentPriceDifference;
        selectedGoodiesWithMinDiff = currentSelection;
      }
    }
  
    let output = "The goodies selected for distribution are:\n";
    for (const goodie of selectedGoodiesWithMinDiff) {
      const goodiePrice = goodies.find((g) => g.name === goodie)!.price;
      output += `${goodie}: ${goodiePrice}\n`;
    }
  
    output += `And the difference between the chosen goodie with highest price and the lowest price is ${minPriceDifference}`;
  
    return output;
  }

export {
    distributeGoodies,
    parseGoodiesData
}