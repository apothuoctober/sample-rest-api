function getAllUseCaseRoutes(object, routes = []) {
  let routesCopy = [...routes];
  if (object.controller === undefined) {
    const objectKeys = Object.keys(object);
    for (let keyIndex = 0; keyIndex < objectKeys.length; keyIndex++) {
      const key = objectKeys[keyIndex];
      const childObject = object[key];
      routesCopy = getAllUseCaseRoutes(childObject, routesCopy);
    }
  } else {
    routesCopy.push({
      controller: object.controller,
      method: object.route.method,
      path: object.route.path,
    });
  }
  return routesCopy;
}

module.exports = getAllUseCaseRoutes;
