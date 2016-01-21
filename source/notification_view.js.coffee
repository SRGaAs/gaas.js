###
# NotificationView
# ================
# 1. A notification should close ifself after displayed for 5 secs.
# 2. User should be abled to close a notification by clicking its close button.
#
###
TemplateRenderer = require('./templates/notification')

CLOSE_DELAY = 5000
ANIMATION_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

class NotificationView
  constructor: (@_definition={}) ->
    @_definition.dom_id = 'gaas-notification-' + Date.now()
    @_isDead = false

  renderIntoNode: (stackNode) ->
    @_viewNode = @_toDOM()

    closeButton = @_viewNode.querySelector('.gaas-btn-close')
    closeButton.addEventListener 'click', (event) =>
      @close()

    window.setTimeout ( => @close() unless @_isDead ), CLOSE_DELAY

    stackNode.appendChild(@_viewNode)

  close: ->
    @_viewNode.classList.remove('gaas-fade-in-down');
    @_viewNode.classList.add('gaas-fade-out-right');
    @_isDead = true

    @_viewNode.addEventListener 'animationend', (event) ->
      this.parentElement.removeChild(this)

  _toHTML: ->
    TemplateRenderer(@_definition)

  _toDOM: ->
    divNode = document.createElement('div')
    divNode.innerHTML = @_toHTML()
    resultNode = divNode.children[0]
    return resultNode

module.exports = NotificationView
