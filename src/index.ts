import { jobs } from "./data/jobs";
import { scheduleJobs } from "./functions/job-scheduler";
import { distributeGoodies, parseGoodiesData } from "./functions/goodie-distributor";
import { appendDataToTextFile, readDataFromTextFile } from "./functions/textOperations";

const result = scheduleJobs(jobs);

console.log("Job Scheduler");
console.log(`Remaining jobs: ${result[0]}`);
console.log(`Remaining earnings: ${result[1]}`);


console.log('\n \n \n ------------ \n \n \n')

console.log("Goodie Distributor");
const goodiesInputFile = 'goodies.txt';
const readTextFromFile = readDataFromTextFile(goodiesInputFile, parseGoodiesData);
const goodies = readTextFromFile[0];
const numEmployees = readTextFromFile[1];
const output = distributeGoodies(goodies, numEmployees);

const outputFile = 'output.txt';
appendDataToTextFile(outputFile, output);

console.log(`Output written to ${outputFile}`);