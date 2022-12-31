/**
 * Removes last part of the path name <Hashed one>
 *
 * e.g: input: lol-235h2.png => output: lol.png
 * @param path string in the form of str_name-hash.extention
 * @returns string in the form of str_name.extention
 */
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
