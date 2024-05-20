#!/bin/sh

node ./src/helpers/setup.js && k6 run -e HOST=$HOST -c ./src/tests/breakpoint.json ./src/run.js
