import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  console.log(`Hello ${__ENV.SUPER_LOMNG_NAME}`)
  const res = http.get(`http://${__ENV.URI}/`);
  sleep(1);
}