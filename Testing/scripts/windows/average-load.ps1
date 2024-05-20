param(
  [Parameter()]
  [string] $tmpHost
)

if (!$tmpHost) {
    $tmpHost = Read-Host "Enter the host"
}

if (node ./src/helpers/setup.js) {
  k6 run -e HOST=$tmpHost -c ./src/tests/average-load.json ./src/run.js
}

Exit