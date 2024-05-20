param(
  [Parameter()]
  [string] $tmpHost
)

if (!$tmpHost) {
    $tmpHost = Read-Host "Enter the host"
}

if (node ./src/helpers/setup.js) {
  k6 run -e HOST=$tmpHost -c ./src/tests/breakpoint.json ./src/run.js
}

Exit
