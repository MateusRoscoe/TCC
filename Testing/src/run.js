import http from "k6/http";
import exec from "k6/execution";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
let counter = 1;

export function setup() {
  try {
    const post = http.post(
      `http://${__ENV.HOST}/code`,
      JSON.stringify({ data: "setup" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "text",
      }
    );
    const postCheck = check(post, {
      "status is 200": (r) => r.status === 200,
      "code is 1": (r) => r.json().code === 1, // This is to ensure fresh application state
    });
    if (!postCheck) {
      throw new Error(
        `Unexpected response status in POST setup: ${post.status}`
      );
    }

    const code = post.json().code;

    sleep(1);
    const get = http.get(`http://${__ENV.HOST}/code?code=${code}`);
    const getCheck = check(get, {
      "status is 200": (r) => r.status === 200,
    });

    if (!getCheck) {
      throw new Error(`Unexpected response status in GET setup: ${get.status}`);
    }

    sleep(1);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function () {
  const res = http.post(
    `http://${__ENV.HOST}/code`,
    JSON.stringify({ data: "run" + counter }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  counter += 1;
}

export function handleSummary(data) {
  const testId = __ENV.HOST.replace(":", "-");
  const configName = exec.test.options.tags.name;
  const fileName = `results/${configName}/${testId}`;
  return {
    [`${fileName}.json`]: JSON.stringify(
      {
        host: __ENV.HOST,
        timestamp: new Date().toISOString(),
        data,
      },
      null,
      2
    ),
    [`${fileName}.html`]: htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
