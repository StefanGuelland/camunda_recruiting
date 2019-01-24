const { Client, logger } = require('camunda-external-task-client-js');

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: 'http://camunda:8080/engine-rest'};//, use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'charge-card'
client.subscribe('simple-worker', async function({ task, taskService }) {
  // Put your business logic here

  // Get a process variable
  const bezeichnung = task.variables.get('bezeichnung');
  const aufgaben = task.variables.get('aufgaben');

  console.log(`Neuer Job ${bezeichnung} mit den Aufgaben '${aufgaben}' verfuegbar`);

  // Complete the task
  await taskService.complete(task);
});
