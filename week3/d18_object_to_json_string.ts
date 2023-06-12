const jsonStringify = (object: any) => {
  if (typeof object === "string") {
    return '"' + object + '"';
  }

  if (
    typeof object === "number" ||
    typeof object === "boolean" ||
    object === null
  ) {
    return String(object);
  }

  if (Array.isArray(object)) {
    const arrayElements = object.map(jsonStringify).join(",");
    return "[" + arrayElements + "]";
  }

  if (typeof object === "object") {
    const objectProperties = Object.keys(object)
      .map((key) => `"${key}":${jsonStringify(object[key])}`)
      .join(",");
    return "{" + objectProperties + "}";
  }
};
