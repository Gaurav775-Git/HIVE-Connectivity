// fake_ml_job.js
// Simulated AI/ML task — purely cosmetic, no external libs required.
// Run with: node fake_ml_job.js

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  faint: "\x1b[2m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
};

function progressBar(pct, width = 30) {
  const filled = Math.round((pct / 100) * width);
  const empty = width - filled;
  return `[${"█".repeat(filled)}${" ".repeat(empty)}] ${pct.toFixed(1)}%`;
}

async function simulateStage(name, timeMs = 800, steps = 6) {
  process.stdout.write(`${ANSI.bold}${ANSI.cyan}${name}${ANSI.reset}\n`);
  const stepMs = Math.max(40, Math.floor(timeMs / steps));
  for (let i = 1; i <= steps; i++) {
    const pct = (i / steps) * 100;
    process.stdout.write(`  ${progressBar(pct)}\r`);
    await sleep(stepMs);
  }
  process.stdout.write(`\n${ANSI.green}✔ ${name} completed.${ANSI.reset}\n\n`);
}

async function main() {
  console.log(`${ANSI.bold}${ANSI.blue}=== Hive ML Runner — Simulated Job ===${ANSI.reset}\n`);
  
  console.log(`${ANSI.faint}⏳ Starting job: simulate pre-processing, training and inference...\n${ANSI.reset}`);

  // Stage 1: Load model
  await simulateStage("Loading model weights (simulated)", 900, 7);

  // Stage 2: Preprocessing
  await simulateStage("Preprocessing dataset", 1100, 8);

  // Show sample preprocessing info
  console.log(`${ANSI.yellow}  Dataset: Hive-Images-512 (simulated)`);
  console.log(`  Samples: ${ANSI.bold}12,480${ANSI.reset}${ANSI.yellow}  |  Classes: ${ANSI.bold}12${ANSI.reset}\n`);

  // Stage 3: Warm-up / compile
  await simulateStage("Compiling model graph & warm-up", 700, 5);

  // Training simulation
  const EPOCHS = 5;
  console.log(`${ANSI.magenta}Starting training for ${EPOCHS} epochs...${ANSI.reset}\n`);

  for (let epoch = 1; epoch <= EPOCHS; epoch++) {
    // Simulate epoch run (varying time)
    const epochTime = 800 + Math.random() * 600;
    const batches = 20;
    for (let b = 1; b <= batches; b++) {
      const pct = (b / batches) * 100;
      const loss = (Math.exp(-0.15 * epoch) + Math.random() * 0.02).toFixed(4);
      const acc = (0.6 + 0.08 * epoch + Math.random() * 0.02).toFixed(4);
      process.stdout.write(`Epoch ${epoch}/${EPOCHS} ┃ ${progressBar(pct, 25)} ┃ loss:${loss} acc:${acc}\r`);
      await sleep(epochTime / batches);
    }
    process.stdout.write("\n");
    // End of epoch summary
    const valLoss = (Math.exp(-0.12 * epoch) + Math.random() * 0.03).toFixed(4);
    const valAcc = (0.62 + 0.085 * epoch + Math.random() * 0.02).toFixed(4);
    console.log(`${ANSI.green}✓ Epoch ${epoch} finished — val_loss: ${valLoss}  val_acc: ${valAcc}${ANSI.reset}\n`);
  }

  // Stage: Evaluation
  await simulateStage("Evaluating on validation set", 900, 6);
  console.log(`${ANSI.bold}Final metrics:`);
  console.log(`  ${ANSI.green}Accuracy:${ANSI.reset} ${ANSI.bold}0.8621${ANSI.reset}`);
  console.log(`  ${ANSI.green}Precision:${ANSI.reset} 0.8710`);
  console.log(`  ${ANSI.green}Recall:${ANSI.reset}    0.8542\n`);

  // Stage: Inference sample
  await simulateStage("Running inference (sample)", 700, 5);
  console.log(`${ANSI.blue}${ANSI.bold}Sample inference result:${ANSI.reset}`);
  console.log(`  Input: "sample_image_0421.png"`);
  console.log(`  Output: { label: "hive-node", score: 0.9423 }\n`);

  // Save artifact (simulated)
  await simulateStage("Saving model artifacts", 600, 4);
  console.log(`${ANSI.faint}Model artifact: /models/hive-sim-2025-11-11.tar.gz${ANSI.reset}\n`);

  console.log(`${ANSI.bold}${ANSI.green}Job completed successfully ✅${ANSI.reset}`);
  console.log(`${ANSI.faint}Total time: ~${((EPOCHS * 1.2) + 5).toFixed(1)}s (simulated)${ANSI.reset}`);
}

main().catch((err) => {
  console.error(`${ANSI.red}Job failed:${ANSI.reset}`, err);
  process.exit(1);
});
