function normalizeDefense(raw, ids) {
  const order = (Array.isArray(raw?.order) ? raw.order : [])
    .filter(id => ids.has(id))
  const none = Boolean(raw?.none) && !order.length
  return {
    order,
    none,
    index: Math.max(0, Math.min(order.length - 1, Number(raw?.index) || 0)),
  }
}
