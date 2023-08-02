//Artblocks random class
class Random{constructor(){this.useA=!1;let sfc32=function(uint128Hex){let a=parseInt(uint128Hex.substr(0,8),16);let b=parseInt(uint128Hex.substr(8,8),16);let c=parseInt(uint128Hex.substr(16,8),16);let d=parseInt(uint128Hex.substr(24,8),16);return function(){a|=0;b|=0;c|=0;d|=0;let t=(((a+b)|0)+d)|0;d=(d+1)|0;a=b^(b>>>9);b=(c+(c<<3))|0;c=(c<<21)|(c>>>11);c=(c+t)|0;return(t>>>0)/4294967296}};this.prngA=new sfc32(tokenData.hash.substr(2,32));this.prngB=new sfc32(tokenData.hash.substr(34,32));for(let i=0;i<1e6;i+=2){this.prngA();this.prngB()}}
random_dec(){this.useA=!this.useA;return this.useA?this.prngA():this.prngB()}
random_num(a,b){return a+(b-a)*this.random_dec()}
random_int(a,b){return Math.floor(this.random_num(a,b+1))}
random_bool(p){return this.random_dec()<p}
random_choice(list){return list[this.random_int(0,list.length-1)]}}
let R=new Random()

//R.random_dec()      // Random decimal [0-1)
//R.random_num(0, 10) // Random decimal [0-10)
//R.random_int(0, 10) // Random integer [0-10]
//R.random_bool(0.5)  // Random boolean with probability 0.5
//R.random_choice([1, 2, 3])  // Random choice from a given integer or string.

//set query params
function setquery(p,v){
	var searchParams = new URLSearchParams(window.location.search);
    searchParams.set(p, v);
    if (v==null){searchParams.delete(p)};
    var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
};