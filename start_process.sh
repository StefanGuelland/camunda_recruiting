#!/bin/bash

set -x

curl \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"variables":{"bezeichnung" : {"value" : "Kaffeetrinker M.Sc", "type": "String"}, "aufgaben" : {"value" : "Jede Menge Kaffee trinken!", "type": "String"}},"businessKey" : "12345"}}' \
  http://localhost:8090/engine-rest/process-definition/key/Stellenausschreibung/start