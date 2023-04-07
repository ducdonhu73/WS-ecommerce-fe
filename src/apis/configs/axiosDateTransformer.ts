import { dateReviver } from "utils/reviver";

function dateTransformer(data: string): unknown {
  if (data === "") {
    return JSON.parse("{}");
  } else {
    return JSON.parse(data, dateReviver);
  }
}

export default dateTransformer;
