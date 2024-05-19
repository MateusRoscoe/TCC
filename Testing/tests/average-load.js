import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  duration: "30s",
};

export function setup() {
  try {
    const post = http.post(
      `http://${__ENV.HOST}/code`,
      JSON.stringify({ data: "setup" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const postCheck = check(post, {
      "status is 200": (r) => r.status === 200,
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

    sleep(5);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function () {
  const res = http.get(`http://${__ENV.HOST}/`);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}

export function handleSummary(data) {
  return {
    "summary.json": JSON.stringify(data),
  };
}
