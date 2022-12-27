export function getProductionNameOfPath(path: string) {
  path = JSON.parse(JSON.stringify(path));
  // console.log(path);
  // console.log(path.slice(0, path.lastIndexOf('-')));
  // console.log(path.slice(path.lastIndexOf('.')));
  path =
    '/src' +
    path.slice(0, path.lastIndexOf('-')) +
    path.slice(path.lastIndexOf('.'));
  let pathArray = path.split('/');
  // console.log(pathArray);
  let newOutput = pathArray.splice(-1, 0, 'images');
  // console.log(pathArray.join('/'));
  return pathArray.join('/');
}
