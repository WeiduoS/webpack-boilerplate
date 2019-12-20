import '@babel/polyfill';
import utils from './utils';
import $ from 'expose-loader?$!jquery';

require('../css/index.css');
import '../css/style.scss';
// import '../asset/images';


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

// var imgSrc = require('../asset/images/sort_down.png');
//
import p from '../asset/images/sort_full.png';
let img = document.getElementById('img');
img.src = p;
let parent = img.parentElement;
parent.appendChild(img);