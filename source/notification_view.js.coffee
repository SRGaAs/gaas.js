TemplateRenderer = require('./templates/notification')

class NotificationView
  constructor: (@_definition={}) ->
    @_definition.dom_id = 'gaas-notification' + Date.now()

  renderIntoNode: (stackNode) ->
    viewNode = @toDOM()
    stackNode.appendChild(viewNode)

  toHTML: ->
    TemplateRenderer(@_definition)

  toDOM: ->
    divNode = document.createElement('div')
    divNode.innerHTML = @toHTML()
    resultNode = divNode.children[0]
    return resultNode

module.exports = NotificationView
