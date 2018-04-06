export const nodeToInstance = (node = {}) => ({
  html: node.html,
  ...(node.frontmatter || {}),
  ...(node.fields || {}),
})

export const edgesToInstance = data => {
  const edges = (data || {}).edges || []
  const { node = {} } = edges[0] || {}
  return nodeToInstance(node)
}

export const edgesToInstances = data => {
  const edges = (data || {}).edges || []
  return edges.map(({ node }) => nodeToInstance(node))
}
