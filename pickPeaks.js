function pickPeaks(arr) {
  const result = {
    pos: [],
    peaks: [],
  };

  if (arr.length > 2) {
    let pos = -1;
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      const prev = arr[i - 1];
      if (current > prev) {
        pos = i;
      } else if (current < prev && pos !== -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
