// Demo JS file for testing your GPU sharing platform
// Simulates sending compute tasks and receiving results

async function simulateGpuTask(taskId, data) {
  console.log(`Sending task ${taskId} ...`);

  const start = Date.now();

  // Simulate GPU processing delay
  await new Promise(res => setTimeout(res, Math.random() * 1500 + 500));

  const result = data.map(x => x * x); // Fake GPU compute
  const time = Date.now() - start;

  console.log(`Task ${taskId} completed in ${time}ms`);
  return { taskId, result, time };
}

async function run() {
  console.log("Starting GPU sharing test...\n");

  const tasks = [
    simulateGpuTask(1, [1, 2, 3, 4]),
    simulateGpuTask(2, [5, 6, 7, 8]),
    simulateGpuTask(3, [9, 10, 11, 12])
  ];

  const results = await Promise.all(tasks);

  console.log("\nAll tasks completed. Results:\n");
  results.forEach(r => {
    console.log(`Task ${r.taskId}:`, r.result, `(${r.time}ms)`);
  });

  console.log("\nGPU sharing test finished.");
}

run();
