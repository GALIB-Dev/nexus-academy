const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'data', 'missions');
const files = fs.readdirSync(dir).filter(f => f.startsWith('mission-'));

for (const file of files) {
  const filePath = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  if (data.id && data.id.startsWith('mission-')) {
    data.id = data.id.replace('mission-', '');
  }
  
  // also inject a step if steps is empty so it doesn't 404
  if (!data.steps || data.steps.length === 0) {
    data.steps = [{
      type: "intro",
      missionNumber: data.id,
      title: "Welcome to Mission " + parseInt(data.id, 10),
      banglaTitle: "মিশন " + parseInt(data.id, 10) + "-এ স্বাগতম",
      tagline: "Coming soon...",
      description: "This mission is currently under development. Stay tuned!",
      learningObjectives: ["Patience"],
      estimatedMinutes: 1
    }];
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${file}`);
}
