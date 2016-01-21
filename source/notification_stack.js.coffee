NotificationView = require('./notification_view')

NODE_ID = 'gaas-stack'

_createRootNode = ->
  if existingNode = document.getElementById(NODE_ID)
    throw new Error('Notification stack has already been initialized once.')
    return existingNode

  divNode = document.createElement('div')
  divNode.id = 'gaas-stack'
  document.body.appendChild(divNode)

  return divNode

class NotificationStack
  constructor: ->
    @_rootNode = _createRootNode()

  push: (definition) ->
    # 1. Render a view based on definition
    # 2. Append view node to @_rootNode
    # 3. Every view instance are responsible for removing theirselves from DOM.
    view = new NotificationView(definition)
    view.renderIntoNode(@_rootNode)

module.exports = NotificationStack
