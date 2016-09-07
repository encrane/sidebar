define(["jquery","scrollto"],function(o,t){function i(e,s){this.opts=o.extend({},i.DEFAULTS,s),this.$el=o(e),this.scroll=new t.ScrollTo({dest:0,speed:800}),this._checkPosition(),"move"==this.opts.mode?this.$el.on("click",o.proxy(this._move,this)):this.$el.on("click",o.proxy(this._go,this)),o(window).on("scroll",o.proxy(this._checkPosition,this))}return i.DEFAULTS={mode:"move",pos:o(window).height(),speed:800},i.prototype._move=function(){this.scroll.move()},i.prototype._go=function(){this.scroll.go()},i.prototype._checkPosition=function(){var t=this.$el;o(window).scrollTop()>this.opts.pos?t.fadeIn():t.fadeOut()},o.fn.extend({backtop:function(o){return this.each(function(){new i(this,o)})}}),{BackTop:i}});
define(["jquery"],function(o){function t(e){this.opts=o.extend({},t.DEFAULTS,e),this.$el=o("html,body")}return t.prototype.move=function(){var t=this.opts,e=t.dest;o(window).scrollTop()!=e&&(this.$el.is(":animated")||this.$el.animate({scrollTop:e},t.speed))},t.prototype.go=function(){var t=this.opts.dest;o(window).scrollTop()!=t&&this.$el.scrollTop(t)},t.DEFAULTS={dest:0,speed:800},{ScrollTo:t}});
requirejs.config({paths:{jquery:"jquery"}}),requirejs(["jquery","backtop"],function(e,o){
// new backtop.BackTop($('#backTop'), {
// 	mode: 'go',
// 	pos: 200,
// 	speed: 2000
// });
e("#backTop").backtop({mode:"move"})});