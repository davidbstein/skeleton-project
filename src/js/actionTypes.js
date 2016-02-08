const actions = [
  "NULL_OP",
  "PLACEHOLDER",
];

export default ((actions) => {
  let to_export = {};
  for (let i in actions)
    to_export[actions[i]] = i;
  return to_export;
})();
