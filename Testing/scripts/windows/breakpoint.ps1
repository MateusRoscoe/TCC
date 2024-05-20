param(
  [Parameter()]
  [string] $tmpHost
)

if (!$tmpHost) {
    $tmpHost = Read-Host "Enter the host"
}

if (node ./helpers/setup.js) {
  k6 run -e HOST=$tmpHost ./tests/breakpoint.js
}

Exit
