import postcss from 'postcss';
import test from 'ava';

import plugin from './';

function run(t, input, output, opts = {}) {
	return postcss([plugin(opts)]).process(input)
		.then(result => {
			t.deepEqual(result.css, output);
			t.deepEqual(result.warnings().length, 0);
		});
}

test('Tipsy northwest test', t => {
	return run(t, '.test { tipsy: nw #34495e 10px 0; }', ".test { display: inline-block; position: relative; }\n.test:after { content: attr(data-tipsy); background-color: #34495e; border-radius: 0; color: white; text-shadow: 0 -1px 0 rgba(0, 0, 0, .2); padding: 5px 10px; white-space: nowrap; box-shadow: 1px 1px 3px rgba(0, 0, 0, .2); }\n.test:before { content: \"\"; border: 10px solid transparent; bottom: 0; z-index: 1000001; }\n.test:before,.test:after { position: absolute; visibility: hidden; opacity: 0; z-index: 1000000; pointer-events: none; transform: translate3d(0, 0, 0); transition: 250ms ease-in-out; }\n.test:hover:before,.test:focus:before,.test:hover:after,.test:focus:after { visibility: visible; opacity: 1; }\n.test:after { bottom: 135%; right: 50%; }\n.test:before { border-top-color: #34495e; top: -35%; right: 60%; }\n.test:hover:after,.test:hover:after { bottom: 115%; }\n.test:hover:before,.test:focus:before { top: -15%; }");
});
