var J = (b, j) => () => (j || b((j = { exports: {} }).exports, j), j.exports)
var L = J((N, H) => {
  var f = function (b, j, q, P) {
      const E = (function (x, F) {
          let D = []
          return (
            F.split(',').forEach(function (I) {
              D.push(x + I)
            }),
            D.join(',')
          )
        })(b.parent.selector, j),
        C = b.parent.cloneAfter({ selector: E })
      ;(q = q || []),
        (P = P || []),
        C.walkDecls(function (x) {
          x.remove()
        }),
        q.forEach(function (x, F) {
          let D = b.clone({ prop: x, value: P[F].toString() })
          C.append(D)
        })
    },
    K = function (b, { list: j }) {
      const q = j.space(b.value),
        P = q[0],
        h = q[1],
        E = q[2],
        C = q[3]
      if (
        (b.cloneBefore({ prop: 'display', value: 'inline-block' }),
        b.cloneBefore({ prop: 'position', value: 'relative' }),
        P === 'nw')
      )
        f(b, ':hover:before,:focus:before', ['top'], ['-15%']),
          f(b, ':hover:after,:hover:after', ['bottom'], ['115%']),
          f(b, ':before', ['border-top-color', 'top', 'right'], [h, '-35%', '60%']),
          f(b, ':after', ['bottom', 'right'], ['135%', '50%'])
      if (P === 'n')
        f(b, ':hover:before,:focus:before', ['top'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['bottom'], ['115%']),
          f(b, ':before,:after', ['left', 'transform'], ['50%', 'translateX(-50%)']),
          f(b, ':before', ['border-top-color', 'top'], [h, '-35%']),
          f(b, ':after', ['bottom'], ['115%'])
      if (P === 'ne')
        f(b, ':hover:before,:focus:before', ['top'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['bottom'], ['115%']),
          f(b, ':before', ['border-top-color', 'top', 'left'], [h, '-35%', '60%']),
          f(b, ':after', ['bottom', 'left'], ['135%', '50%'])
      if (P === 'e')
        f(b, ':hover:before,:focus:before', ['right'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['left'], ['115%']),
          f(b, ':before,:after', ['top', 'transform'], ['50%', '-50%']),
          f(b, ':before', ['border-right-color', 'right'], [h, '-35%']),
          f(b, ':after', ['left'], ['135%'])
      if (P === 'se')
        f(b, ':hover:before,:focus:before', ['bottom'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['top'], ['115%']),
          f(b, ':before', ['bordeer-bottom-color', 'left', 'bottom'], [h, '60%', '-35%']),
          f(b, ':after', ['left', 'top'], ['50%', '135%'])
      if (P === 's')
        f(b, ':hover:before,:focus:before', ['bottom'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['top'], ['115%']),
          f(b, ':before,:after', ['left', 'transform'], ['50%', 'translate(-50%)']),
          f(b, ':before', ['border-bottom-color', 'bottom'], [h, '-35%']),
          f(b, ':after', ['top'], ['135%'])
      if (P === 'sw')
        f(b, ':hover:before,:focus:before', ['bottom'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['top'], ['115%']),
          f(b, ':before', ['border-bottom-color', 'right', 'bottom'], [h, '60%', '-35%']),
          f(b, ':after', ['right', 'top'], ['50%', '135%'])
      if (P === 'w')
        f(b, ':hover:before,:focus:before', ['left'], ['-15%']),
          f(b, ':hover:after,:focus:after', ['right'], ['115%']),
          f(b, ':before,:after', ['top', 'transform'], ['50%', 'translateY(-50%)']),
          f(b, ':before', ['border-left-color', 'left'], [h, '-35%']),
          f(b, ':after', ['right'], ['125%'])
      f(b, ':hover:before,:focus:before,:hover:after,:focus:after', ['visibility', 'opacity'], ['visible', '1']),
        f(
          b,
          ':before,:after',
          ['position', 'visibility', 'opacity', 'z-index', 'pointer-events', 'transform', 'transition'],
          ['absolute', 'hidden', '0', '1000000', 'none', 'translate3d(0, 0, 0)', '250ms ease-in-out'],
        ),
        f(b, ':before', ['content', 'border', 'bottom', 'z-index'], ['""', E + ' solid transparent', '0', '1000001']),
        f(
          b,
          ':after',
          [
            'content',
            'background-color',
            'border-radius',
            'color',
            'text-shadow',
            'padding',
            'white-space',
            'box-shadow',
          ],
          [
            'attr(data-tipsy)',
            h,
            C,
            'white',
            '0 -1px 0 rgba(0, 0, 0, .2)',
            '5px 10px',
            'nowrap',
            '1px 1px 3px rgba(0, 0, 0, .2)',
          ],
        ),
        b.remove()
    }
  H.exports = () => {
    return { postcssPlugin: 'postcss-tipsy', Declaration: { tipsy: K } }
  }
  H.exports.postcss = !0
})
export default L()
