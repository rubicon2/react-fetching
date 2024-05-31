export default function asyncTimer(delayMillis) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMillis);
  });
}
