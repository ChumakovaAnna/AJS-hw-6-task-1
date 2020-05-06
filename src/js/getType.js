import allTypes from "./types";

export default function getType(type) {
  if (allTypes[type] === undefined) {
    throw new Error("Incorrect value type");
  } else {
    return type;
  }
}
