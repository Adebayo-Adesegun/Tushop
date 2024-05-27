import { scheduleJobs } from "../functions/job-scheduler";


describe('scheduleJobs function', () => {
  it('should return the correct number of remaining jobs and earnings (Sample 1)', () => {
    const jobs = [
      { startTime: "0900", endTime: "1030", profit: 100 },
      { startTime: "1000", endTime: "1200", profit: 500 },
      { startTime: "1100", endTime: "1200", profit: 300 },
    ];

    const result = scheduleJobs(jobs);
    expect(result).toEqual([2, 400]); // 2 remaining jobs, 400 remaining earnings
  });

  it('should return the correct number of remaining jobs and earnings (Sample 2)', () => {
    const jobs = [
      { startTime: "0900", endTime: "1000", profit: 250 },
      { startTime: "0945", endTime: "1200", profit: 550 },
      { startTime: "1130", endTime: "1500", profit: 150 },
    ];

    const result = scheduleJobs(jobs);
    expect(result).toEqual([2, 400]); // 2 remaining jobs, 400 remaining earnings
  });

  it('should return the correct number of remaining jobs and earnings (Sample 3)', () => {
    const jobs = [
      { startTime: "0900", endTime: "1030", profit: 100 },
      { startTime: "1000", endTime: "1200", profit: 100 },
      { startTime: "1100", endTime: "1200", profit: 100 },
    ];

    const result = scheduleJobs(jobs);
    expect(result).toEqual([1, 100]); // 1 remaining job, 100 remaining earnings
  });
});