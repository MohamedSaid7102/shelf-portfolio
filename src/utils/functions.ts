export function getProductionNameOfPath(path: string) {
  path = JSON.parse(JSON.stringify(path));
  path =
    '/src' +
    path.slice(0, path.lastIndexOf('-')) +
    path.slice(path.lastIndexOf('.'));
  let pathArray = path.split('/');
  let newOutput = pathArray.splice(-1, 0, 'images');
  return pathArray.join('/');
}
