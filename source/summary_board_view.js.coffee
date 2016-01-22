TemplateRenderer = require('./templates/summary_board')

class SummaryBoardView
  constructor: (rootNodeOrSelector, options={autoRender:true}) ->
    @_cellDefinitions = []

    if typeof rootNodeOrSelector is 'string'
      @_rootNode = document.querySelector(rootNodeOrSelector)
    else
      @_rootNode = rootNodeOrSelector

    @render() if options.autoRender

  render: ->
    @_rootNode.innerHTML = @_toHTML()

  addCellFromDefinition: (definition) ->
    if definition.percentage <= 0
      definition.icon_control = 'hide-icon'

    if 0 < definition.percentage < 100
      definition.icon_control = 'has-pie'
      definition.show_pie = true

    @_cellDefinitions.push(definition)

  _getTemplateData: ->
    return {cells: @_cellDefinitions}

  _toHTML: ->
    data = @_getTemplateData()
    return TemplateRenderer(data)

module.exports = SummaryBoardView
