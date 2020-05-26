import { matchPath } from 'react-router';

export default function(path, routeList) {
  let targetRoute, targetMatch;

  for (let item of routeList) {
    targetMatch = matchPath(path, item);
    if (targetMatch) {
      targetRoute = item;
      break;
    }
  }
  return { targetRoute, targetMatch };
}
