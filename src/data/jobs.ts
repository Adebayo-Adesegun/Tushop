export interface Job {
  startTime: string;
  endTime: string;
  profit: number;
}

export const jobs: Job[] = [
  {
    startTime: "0900",
    endTime: "1030",
    profit: 100,
  },
  {
    startTime: "1000",
    endTime: "1200",
    profit: 500,
  },
  {
    startTime: "1100",
    endTime: "1200",
    profit: 300,
  },
];
