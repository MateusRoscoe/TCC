#!/bin/sh

node ./src/helpers/setup.js && k6 run -e HOST=$HOST -c ./src/tests/average-load.json ./src/run.js
