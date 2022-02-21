import fetch from "node-fetch";

function waitFor(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export { waitFor };
