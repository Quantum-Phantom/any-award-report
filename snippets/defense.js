const fields = {
  start: new Set(['admitted', 'confirmReal']),
  next: new Set(),
  committee: new Set(),
  ask: new Set(['speech', 'targets']),
  opinion: new Set(['speech']),
  skip: new Set(),
  retry: new Set(),
  decide: new Set(['choice', 'confirmed']),
  ending: new Set(),
}

if (body.revision !== state.revision) {
  throw new APIError(409, '状态已变化，请刷新状态')
}

if (action === 'decide') {
  require(stage === 'decision')
  require(body.confirmed === true)
  require(body.choice === 'award' || body.choice === 'vacant')
  state.update(stage: 'decided', decision: body.choice)
}
