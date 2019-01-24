#!/bin/bash

set -x

curl -w "\n" \
  -H "Accept: application/json" \
  -F "deployment-name=BPM test deploy" \
  -F "enable-duplicate-filtering=true" \
  -F "deploy-changed-only=true" \
  -F "RecruitingOperativ2.bpmn=@./src/RecruitingOperativ2.bpmn" \
  -F "parseHoliday.js=@./src/parseHoliday.js" \
  http://localhost:8090/engine-rest/deployment/create