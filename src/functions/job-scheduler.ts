import { Job } from "../data/jobs";

/**
 * Schedule jobs to maximize profit using greedy selection algorithm with lookahead 
 * @param jobs 
 * @returns 
 */
function scheduleJobs(jobs: Job[]): [number, number] {
    // Sort jobs by end time for efficient selection
    jobs.sort((a, b) => {
      const endTimeDiff = parseInt(a.endTime, 10) - parseInt(b.endTime, 10);
      if (endTimeDiff === 0) {
        // If end times are equal, sort by start time
        return parseInt(a.startTime, 10) - parseInt(b.startTime, 10); 
      }
      return endTimeDiff;
    });
  
    let selectedJobs: Job[] = [];
    let currentEndTime = 0;
    let totalEarnings = 0;
  
    for (let i = 0; i < jobs.length - 1; i++) {
      const currentJob = jobs[i];
      const nextJob = jobs[i + 1];
  
      // If the next job starts after the current job ends and has higher profit, select the current job
      if (parseInt(currentJob.startTime, 10) >= currentEndTime && currentJob.profit >= nextJob.profit) {
        selectedJobs.push(currentJob);
        currentEndTime = parseInt(currentJob.endTime, 10);
        totalEarnings += currentJob.profit;
      }
    }
  
    // Add the last job if it doesn't conflict (no lookahead needed)
    if (parseInt(jobs[jobs.length - 1].startTime, 10) >= currentEndTime) {
      selectedJobs.push(jobs[jobs.length - 1]);
      currentEndTime = parseInt(jobs[jobs.length - 1].endTime, 10);
      totalEarnings += jobs[jobs.length - 1].profit;
    }
  
    const remainingJobs = jobs.length - selectedJobs.length;
    const remainingEarnings = jobs.reduce((sum, job) => sum + job.profit, 0) - totalEarnings;
  
    return [remainingJobs, remainingEarnings];
  }
  

export {
    scheduleJobs
}