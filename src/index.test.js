const postcss = require('postcss')

const plugin = require('./')

function run(input, output) {
  let result = postcss([plugin]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('Tooltip in the north west', () => {
  run(
    '.test {tipsy: nw #34495e 10px 0;}',
    '.test {display: inline-block;position: relative;}.test:after {content: attr(data-tipsy);background-color: #34495e;border-radius: 0;color: white;text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);padding: 5px 10px;white-space: nowrap;box-shadow: 1px 1px 3px rgba(0, 0, 0, .2);}.test:before {content: "";border: 10px solid transparent;bottom: 0;z-index: 1000001;}.test:before,.test:after {position: absolute;visibility: hidden;opacity: 0;z-index: 1000000;pointer-events: none;transform: translate3d(0, 0, 0);transition: 250ms ease-in-out;}.test:hover:before,.test:focus:before,.test:hover:after,.test:focus:after {visibility: visible;opacity: 1;}.test:after {bottom: 135%;right: 50%;}.test:before {border-top-color: #34495e;top: -35%;right: 60%;}.test:hover:after,.test:hover:after {bottom: 115%;}.test:hover:before,.test:focus:before {top: -15%;}',
  )
})

it('Tooltip in the south', () => {
  run(
    '.test {tipsy: s #34495e 10px 0;}',
    '.test {display: inline-block;position: relative;}.test:after {content: attr(data-tipsy);background-color: #34495e;border-radius: 0;color: white;text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);padding: 5px 10px;white-space: nowrap;box-shadow: 1px 1px 3px rgba(0, 0, 0, .2);}.test:before {content: "";border: 10px solid transparent;bottom: 0;z-index: 1000001;}.test:before,.test:after {position: absolute;visibility: hidden;opacity: 0;z-index: 1000000;pointer-events: none;transform: translate3d(0, 0, 0);transition: 250ms ease-in-out;}.test:hover:before,.test:focus:before,.test:hover:after,.test:focus:after {visibility: visible;opacity: 1;}.test:after {top: 135%;}.test:before {border-bottom-color: #34495e;bottom: -35%;}.test:before,.test:after {left: 50%;transform: translate(-50%);}.test:hover:after,.test:focus:after {top: 115%;}.test:hover:before,.test:focus:before {bottom: -15%;}',
  )
})
