export default function getName(name) {
  if ((name.length < 2) || (name.length > 10)) {
    throw new Error("Incorrect value name");
  } else {
    return name;
  }
}
