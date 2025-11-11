// fake_ml_job.js
// Short simulated AI/ML training task

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  magenta: "\x1b[35m",
  yellow: "\x1b[33m",
  faint: "\x1b[2m",
};

function bar(p, w = 25) {
  const f = Math.round((p / 100) * w);
  return `[${"█".repeat(f)}${" ".repeat(w - f)}] ${p.toFixed(0)}%`;
}

async function simulate(name, time = 600, steps = 5) {
  process.stdout.write(`${c.cyan}${name}${c.reset}\n`);
  for (let i = 1; i <= steps; i++) {
    process.stdout.write(`  ${bar((i / steps) * 100)}\r`);
    await sleep(time / steps);
  }
  process.stdout.write(`\n${c.green}✔ Done${c.reset}\n\n`);
}

async function run() {
  console.log(`${c.bold}${c.magenta}=== Hive ML Simulation ===${c.reset}\n`);

  await simulate("Initializing model...");
  await simulate("Preparing dataset...");
  await simulate("Training...");

  for (let epoch = 1; epoch <= 3; epoch++) {
    const loss = (Math.exp(-0.2 * epoch) + Math.random() * 0.01).toFixed(4);
    const acc = (0.7 + 0.08 * epoch).toFixed(3);
    console.log(`Epoch ${epoch}/3 — loss: ${loss}, acc: ${acc}`);
    await sleep(400);
  }

  await simulate("Evaluating...");
  console.log(`${c.green}Final accuracy: 0.875${c.reset}`);
  console.log(`${c.faint}Model saved as hive-model-sim.tar.gz${c.reset}\n`);
  console.log(`${c.bold}${c.green}Job Complete ✅${c.reset}`);
}

run();
