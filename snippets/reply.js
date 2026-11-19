// Five independent uniform offsets measured from the principal's notice,
// not from one another.
export function replySchedule(random = Math.random) {
  return ['zhao', 'qian', 'sun', 'li', 'zhou']
    .map((id, index) => ({ id, at: 2000 + random() * 2000, index }))
    .sort((a, b) => a.at - b.at || a.index - b.index)
}
