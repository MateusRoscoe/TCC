import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  duration: '60s',
};

export default function() {
  const res = http.get(`http://${__ENV.HOST}/`);
  check (res, {
    'status is 200': (r) => r.status === 200,
  })
}

export function handleSummary(data) {
  return {
    'summary.json': JSON.stringify(data)
  };
}