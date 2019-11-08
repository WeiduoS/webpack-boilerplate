import '@babel/polyfill';
import utils from './utils';
import $ from 'expose-loader?$!jquery';

require('../css/index.css');
import '../css/style.scss';

console.log($);

let fn = () =>  {
    console.log("helloddd");
};

fn();

@decorate
class A {

}

function decorate(obj) {}

"aaa".includes('a');