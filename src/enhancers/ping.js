/*eslint-disable */

export const ping = store => next => action => {
  console.log(`Тип события: ${action.type}, данные: ${action.payload}`);
  return next(action);
}
/*eslint-enable */
