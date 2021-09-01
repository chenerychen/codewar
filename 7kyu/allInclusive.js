function containAllRots(strng, arr) {
  const all_rots = [];
  for (let i = 0; i < strng.length; i++) {
    const extract = strng.slice(0, i);
    const start = strng.slice(i);
    if (arr.indexOf(start + extract) === -1) return false;
  }
  return true;
}



// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)