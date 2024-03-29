function newBlock(decl, selector, props, values) {
  const appendToSelectors = function (selector, selectorToAppend) {
    let appendedSelectors = []

    selectorToAppend.split(',').forEach(function (item) {
      appendedSelectors.push(selector + item)
    })

    return appendedSelectors.join(',')
  }

  const completeSelector = appendToSelectors(decl.parent.selector, selector)

  const block = decl.parent.cloneAfter({
    selector: completeSelector,
  })

  props = props || []
  values = values || []

  block.walkDecls(function (decl) {
    decl.remove()
  })

  props.forEach(function (prop, i) {
    let rule = decl.clone({
      prop: prop,
      value: values[i].toString(),
    })

    block.append(rule)
  })
}

function process(decl, { list }) {
  const sizes = list.space(decl.value)
  const cssGravity = sizes[0]
  const cssBackground = sizes[1]
  const cssSize = sizes[2]
  const cssRadius = sizes[3]

  decl.cloneBefore({ prop: 'display', value: 'inline-block' })
  decl.cloneBefore({ prop: 'position', value: 'relative' })

  if (cssGravity === 'nw') {
    newBlock(decl, ':hover:before,:focus:before', ['top'], ['-15%'])

    newBlock(decl, ':hover:after,:hover:after', ['bottom'], ['115%'])

    newBlock(decl, ':before', ['border-top-color', 'top', 'right'], [cssBackground, '-35%', '60%'])

    newBlock(decl, ':after', ['bottom', 'right'], ['135%', '50%'])
  }

  if (cssGravity === 'n') {
    newBlock(decl, ':hover:before,:focus:before', ['top'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['bottom'], ['115%'])
    newBlock(decl, ':before,:after', ['left', 'transform'], ['50%', 'translateX(-50%)'])
    newBlock(decl, ':before', ['border-top-color', 'top'], [cssBackground, '-35%'])
    newBlock(decl, ':after', ['bottom'], ['115%'])
  }

  if (cssGravity === 'ne') {
    newBlock(decl, ':hover:before,:focus:before', ['top'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['bottom'], ['115%'])
    newBlock(decl, ':before', ['border-top-color', 'top', 'left'], [cssBackground, '-35%', '60%'])
    newBlock(decl, ':after', ['bottom', 'left'], ['135%', '50%'])
  }

  if (cssGravity === 'e') {
    newBlock(decl, ':hover:before,:focus:before', ['right'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['left'], ['115%'])
    newBlock(decl, ':before,:after', ['top', 'transform'], ['50%', '-50%'])
    newBlock(decl, ':before', ['border-right-color', 'right'], [cssBackground, '-35%'])
    newBlock(decl, ':after', ['left'], ['135%'])
  }

  if (cssGravity === 'se') {
    newBlock(decl, ':hover:before,:focus:before', ['bottom'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['top'], ['115%'])
    newBlock(decl, ':before', ['bordeer-bottom-color', 'left', 'bottom'], [cssBackground, '60%', '-35%'])
    newBlock(decl, ':after', ['left', 'top'], ['50%', '135%'])
  }

  if (cssGravity === 's') {
    newBlock(decl, ':hover:before,:focus:before', ['bottom'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['top'], ['115%'])
    newBlock(decl, ':before,:after', ['left', 'transform'], ['50%', 'translate(-50%)'])
    newBlock(decl, ':before', ['border-bottom-color', 'bottom'], [cssBackground, '-35%'])
    newBlock(decl, ':after', ['top'], ['135%'])
  }

  if (cssGravity === 'sw') {
    newBlock(decl, ':hover:before,:focus:before', ['bottom'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['top'], ['115%'])
    newBlock(decl, ':before', ['border-bottom-color', 'right', 'bottom'], [cssBackground, '60%', '-35%'])
    newBlock(decl, ':after', ['right', 'top'], ['50%', '135%'])
  }

  if (cssGravity === 'w') {
    newBlock(decl, ':hover:before,:focus:before', ['left'], ['-15%'])
    newBlock(decl, ':hover:after,:focus:after', ['right'], ['115%'])
    newBlock(decl, ':before,:after', ['top', 'transform'], ['50%', 'translateY(-50%)'])
    newBlock(decl, ':before', ['border-left-color', 'left'], [cssBackground, '-35%'])
    newBlock(decl, ':after', ['right'], ['125%'])
  }

  newBlock(decl, ':hover:before,:focus:before,:hover:after,:focus:after', ['visibility', 'opacity'], ['visible', '1'])

  newBlock(
    decl,
    ':before,:after',
    ['position', 'visibility', 'opacity', 'z-index', 'pointer-events', 'transform', 'transition'],
    ['absolute', 'hidden', '0', '1000000', 'none', 'translate3d(0, 0, 0)', '250ms ease-in-out'],
  )

  newBlock(
    decl,
    ':before',
    ['content', 'border', 'bottom', 'z-index'],
    ['""', cssSize + ' solid transparent', '0', '1000001'],
  )

  newBlock(
    decl,
    ':after',
    ['content', 'background-color', 'border-radius', 'color', 'text-shadow', 'padding', 'white-space', 'box-shadow'],
    [
      'attr(data-tipsy)',
      cssBackground,
      cssRadius,
      'white',
      '0 -1px 0 rgba(0, 0, 0, .2)',
      '5px 10px',
      'nowrap',
      '1px 1px 3px rgba(0, 0, 0, .2)',
    ],
  )

  decl.remove()
}

module.exports = () => {
  return {
    postcssPlugin: 'postcss-tipsy',
    Declaration: {
      tipsy: process,
    },
  }
}

module.exports.postcss = true
