// This is an import method for ECMAScript module. function are import using import statement as below in type ESmodule
import { simple, simple2 } from './moduelES1.mjs';
// If wanted to import the default function from ./moduleES1.mjs file. There one function should be marked as export default. Here simple2 is just a name which can be simple23 as well and then default function will be imported as simple23
import simple2 from './moduelES1.mjs';

//If type is module in package.json this code will run success else gives error 'Cannot use import statement outside a module'
simple();
simple2();