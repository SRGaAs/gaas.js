PI = 3.1415926

module.exports = (percentage, params) ->
  options = params.hash

  circumfernce = options.radius * 2 * PI
  strokeLength = (percentage / 100) * circumfernce

  if options.reversed
    strokeLength = circumfernce - strokeLength

  return "#{strokeLength} #{circumfernce}"
