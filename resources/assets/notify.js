!function(){var l,e=window.Messenger;l=window.Messenger=function(){return l._call.apply(this,arguments)},window.Messenger.noConflict=function(){return window.Messenger=e,l}}(),window.Messenger._=function(){if(window._)return window._;var l=Array.prototype,e=Object.prototype,t=Function.prototype,n=(l.push,l.slice),i=(l.concat,e.toString);e.hasOwnProperty;var o=l.forEach,a=(l.map,l.reduce,l.reduceRight,l.filter),r=(l.every,l.some,l.indexOf,l.lastIndexOf,Array.isArray,Object.keys),s=t.bind,c={},u={},d=c.each=c.forEach=function(l,e,t){if(null!=l)if(o&&l.forEach===o)l.forEach(e,t);else if(l.length===+l.length){for(var n=0,i=l.length;i>n;n++)if(e.call(t,l[n],n,l)===u)return}else for(var a in l)if(c.has(l,a)&&e.call(t,l[a],a,l)===u)return};c.result=function(l,e){if(null==l)return null;var t=l[e];return c.isFunction(t)?t.call(l):t},c.once=function(l){var e,t=!1;return function(){return t?e:(t=!0,e=l.apply(this,arguments),l=null,e)}};var h=0;return c.uniqueId=function(l){var e=++h+"";return l?l+e:e},c.filter=c.select=function(l,e,t){var n=[];return null==l?n:a&&l.filter===a?l.filter(e,t):(d(l,function(l,i,o){e.call(t,l,i,o)&&(n[n.length]=l)}),n)},d(["Arguments","Function","String","Number","Date","RegExp"],function(l){c["is"+l]=function(e){return i.call(e)=="[object "+l+"]"}}),c.defaults=function(l){return d(n.call(arguments,1),function(e){if(e)for(var t in e)null==l[t]&&(l[t]=e[t])}),l},c.extend=function(l){return d(n.call(arguments,1),function(e){if(e)for(var t in e)l[t]=e[t]}),l},c.keys=r||function(l){if(l!==Object(l))throw new TypeError("Invalid object");var e=[];for(var t in l)c.has(l,t)&&(e[e.length]=t);return e},c.bind=function(l,e){if(l.bind===s&&s)return s.apply(l,n.call(arguments,1));var t=n.call(arguments,2);return function(){return l.apply(e,t.concat(n.call(arguments)))}},c.isObject=function(l){return l===Object(l)},c}(),window.Messenger.Events=function(){if(window.Backbone&&Backbone.Events)return Backbone.Events;var l=function(){var l=/\s+/,e=function(e,t,n,i){if(!n)return!0;if("object"==typeof n)for(var o in n)e[t].apply(e,[o,n[o]].concat(i));else{if(!l.test(n))return!0;for(var a=n.split(l),r=0,s=a.length;s>r;r++)e[t].apply(e,[a[r]].concat(i))}},t=function(l,e){var t,n=-1,i=l.length;switch(e.length){case 0:for(;++n<i;)(t=l[n]).callback.call(t.ctx);return;case 1:for(;++n<i;)(t=l[n]).callback.call(t.ctx,e[0]);return;case 2:for(;++n<i;)(t=l[n]).callback.call(t.ctx,e[0],e[1]);return;case 3:for(;++n<i;)(t=l[n]).callback.call(t.ctx,e[0],e[1],e[2]);return;default:for(;++n<i;)(t=l[n]).callback.apply(t.ctx,e)}},n={on:function(l,t,n){if(!e(this,"on",l,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[l]||(this._events[l]=[]);return i.push({callback:t,context:n,ctx:n||this}),this},once:function(l,t,n){if(!e(this,"once",l,[t,n])||!t)return this;var i=this,o=_.once(function(){i.off(l,o),t.apply(this,arguments)});return o._callback=t,this.on(l,o,n),this},off:function(l,t,n){var i,o,a,r,s,c,u,d;if(!this._events||!e(this,"off",l,[t,n]))return this;if(!l&&!t&&!n)return this._events={},this;for(r=l?[l]:_.keys(this._events),s=0,c=r.length;c>s;s++)if(l=r[s],i=this._events[l]){if(a=[],t||n)for(u=0,d=i.length;d>u;u++)o=i[u],(t&&t!==o.callback&&t!==o.callback._callback||n&&n!==o.context)&&a.push(o);this._events[l]=a}return this},trigger:function(l){if(!this._events)return this;var n=Array.prototype.slice.call(arguments,1);if(!e(this,"trigger",l,n))return this;var i=this._events[l],o=this._events.all;return i&&t(i,n),o&&t(o,arguments),this},listenTo:function(l,e,t){var n=this._listeners||(this._listeners={}),i=l._listenerId||(l._listenerId=_.uniqueId("l"));return n[i]=l,l.on(e,"object"==typeof e?this:t,this),this},stopListening:function(l,e,t){var n=this._listeners;if(n){if(l)l.off(e,"object"==typeof e?this:t,this),e||t||delete n[l._listenerId];else{"object"==typeof e&&(t=this);for(var i in n)n[i].off(e,t,this);this._listeners={}}return this}}};return n.bind=n.on,n.unbind=n.off,n};return l()}(),function(){var l,e,t,n,i,o,a,r,s,c,u,d={}.hasOwnProperty,h=function(l,e){function t(){this.constructor=l}for(var n in e)d.call(e,n)&&(l[n]=e[n]);return t.prototype=e.prototype,l.prototype=new t,l.__super__=e.prototype,l},f=[].slice,p=[].indexOf||function(l){for(var e=0,t=this.length;t>e;e++)if(e in this&&this[e]===l)return e;return-1};l=jQuery,o=null!=(s=window._)?s:window.Messenger._,n=null!=(c="undefined"!=typeof Backbone&&null!==Backbone?Backbone.Events:void 0)?c:window.Messenger.Events,t=function(){function e(e){l.extend(this,n),o.isObject(e)&&(e.el&&this.setElement(e.el),this.model=e.model),this.initialize.apply(this,arguments)}return e.prototype.setElement=function(e){return this.$el=l(e),this.el=this.$el[0]},e.prototype.delegateEvents=function(l){var e,t,n,i,a,r,s;if(l||(l=o.result(this,"events"))){this.undelegateEvents(),e=/^(\S+)\s*(.*)$/,s=[];for(n in l){if(a=l[n],o.isFunction(a)||(a=this[l[n]]),!a)throw new Error('Method "'+l[n]+'" does not exist');i=n.match(e),t=i[1],r=i[2],a=o.bind(a,this),t+=".delegateEvents"+this.cid,""===r?s.push(this.jqon(t,a)):s.push(this.jqon(t,r,a))}return s}},e.prototype.jqon=function(l,e,t){var n;return null!=this.$el.on?(n=this.$el).on.apply(n,arguments):(null==t&&(t=e,e=void 0),null!=e?this.$el.delegate(e,l,t):this.$el.bind(l,t))},e.prototype.jqoff=function(l){var e;return null!=this.$el.off?(e=this.$el).off.apply(e,arguments):(this.$el.undelegate(),this.$el.unbind(l))},e.prototype.undelegateEvents=function(){return this.jqoff(".delegateEvents"+this.cid)},e.prototype.remove=function(){return this.undelegateEvents(),this.$el.remove()},e}(),a=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return h(t,e),t.prototype.defaults={hideAfter:10,scroll:!0},t.prototype.initialize=function(e){return null==e&&(e={}),this.shown=!1,this.rendered=!1,this.messenger=e.messenger,this.options=l.extend({},this.options,e,this.defaults)},t.prototype.show=function(){var l;return this.rendered||this.render(),this.$message.removeClass("messenger-hidden"),l=this.shown,this.shown=!0,l?void 0:this.trigger("show")},t.prototype.hide=function(){var l;if(this.rendered)return this.$message.addClass("messenger-hidden"),l=this.shown,this.shown=!1,l?this.trigger("hide"):void 0},t.prototype.cancel=function(){return this.hide()},t.prototype.update=function(e){var t,n=this;return o.isString(e)&&(e={message:e}),l.extend(this.options,e),this.lastUpdate=new Date,this.rendered=!1,this.events=null!=(t=this.options.events)?t:{},this.render(),this.actionsToEvents(),this.delegateEvents(),this.checkClickable(),this.options.hideAfter?(this.$message.addClass("messenger-will-hide-after"),null!=this._hideTimeout&&clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(function(){return n.hide()},1e3*this.options.hideAfter)):this.$message.removeClass("messenger-will-hide-after"),this.options.hideOnNavigate?(this.$message.addClass("messenger-will-hide-on-navigate"),null!=("undefined"!=typeof Backbone&&null!==Backbone?Backbone.history:void 0)&&Backbone.history.on("route",function(){return n.hide()})):this.$message.removeClass("messenger-will-hide-on-navigate"),this.trigger("update",this)},t.prototype.scrollTo=function(){return this.options.scroll?l.scrollTo(this.$el,{duration:400,offset:{left:0,top:-20}}):void 0},t.prototype.timeSinceUpdate=function(){return this.lastUpdate?new Date-this.lastUpdate:null},t.prototype.actionsToEvents=function(){var l,e,t,n,i=this;t=this.options.actions,n=[];for(e in t)l=t[e],n.push(this.events['click [data-action="'+e+'"] a']=function(l){return function(t){return t.preventDefault(),t.stopPropagation(),i.trigger("action:"+e,l,t),l.action.call(i,t,i)}}(l));return n},t.prototype.checkClickable=function(){var l,e,t,n;t=this.events,n=[];for(e in t)l=t[e],"click"===e?n.push(this.$message.addClass("messenger-clickable")):n.push(void 0);return n},t.prototype.undelegateEvents=function(){var l;return t.__super__.undelegateEvents.apply(this,arguments),null!=(l=this.$message)?l.removeClass("messenger-clickable"):void 0},t.prototype.parseActions=function(){var e,t,n,i,o,a;t=[],o=this.options.actions;for(i in o)e=o[i],n=l.extend({},e),n.name=i,null==(a=n.label)&&(n.label=i),t.push(n);return t},t.prototype.template=function(e){var t,n,i,o,a,r,s,c,u,d,h=this;for(a=l("<div class='messenger-message message alert "+e.type+" message-"+e.type+" alert-"+e.type+"'>"),e.showCloseButton&&(i=l('<button type="button" class="messenger-close" data-dismiss="alert">&times;</button>'),i.click(function(){return h.cancel(),!0}),a.append(i)),r=l('<div class="messenger-message-inner">'+e.message+"</div>"),a.append(r),e.actions.length&&(n=l('<div class="messenger-actions">')),d=e.actions,c=0,u=d.length;u>c;c++)s=d[c],t=l("<span>"),t.attr("data-action",""+s.name),o=l("<a>"),o.html(s.label),t.append(l('<span class="messenger-phrase">')),t.append(o),n.append(t);return a.append(n),a},t.prototype.render=function(){var e;if(!this.rendered)return this._hasSlot||(this.setElement(this.messenger._reserveMessageSlot(this)),this._hasSlot=!0),e=l.extend({},this.options,{actions:this.parseActions()}),this.$message=l(this.template(e)),this.$el.html(this.$message),this.shown=!0,this.rendered=!0,this.trigger("render")},t}(t),i=function(l){function e(){return e.__super__.constructor.apply(this,arguments)}return h(e,l),e.prototype.initialize=function(){return e.__super__.initialize.apply(this,arguments),this._timers={}},e.prototype.cancel=function(){return this.clearTimers(),this.hide(),null!=this._actionInstance&&null!=this._actionInstance.abort?this._actionInstance.abort():void 0},e.prototype.clearTimers=function(){var l,e,t,n;t=this._timers;for(l in t)e=t[l],clearTimeout(e);return this._timers={},null!=(n=this.$message)?n.removeClass("messenger-retry-soon messenger-retry-later"):void 0},e.prototype.render=function(){var l,t,n,i;e.__super__.render.apply(this,arguments),this.clearTimers(),n=this.options.actions,i=[];for(t in n)l=n[t],l.auto?i.push(this.startCountdown(t,l)):i.push(void 0);return i},e.prototype.renderPhrase=function(l,e){var t;return t=l.phrase.replace("TIME",this.formatTime(e))},e.prototype.formatTime=function(l){var e;return e=function(l,e){return l=Math.floor(l),1!==l&&(e+="s"),"in "+l+" "+e},0===Math.floor(l)?"now...":60>l?e(l,"second"):(l/=60,60>l?e(l,"minute"):(l/=60,e(l,"hour")))},e.prototype.startCountdown=function(l,e){var t,n,i,o,a=this;if(null==this._timers[l])return t=this.$message.find("[data-action='"+l+"'] .messenger-phrase"),n=null!=(o=e.delay)?o:3,10>=n?(this.$message.removeClass("messenger-retry-later"),this.$message.addClass("messenger-retry-soon")):(this.$message.removeClass("messenger-retry-soon"),this.$message.addClass("messenger-retry-later")),i=function(){var o;return t.text(a.renderPhrase(e,n)),n>0?(o=Math.min(n,1),n-=o,a._timers[l]=setTimeout(i,1e3*o)):(a.$message.removeClass("messenger-retry-soon messenger-retry-later"),delete a._timers[l],e.action())},i()},e}(a),r=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return h(t,e),t.prototype.tagName="ul",t.prototype.className="messenger",t.prototype.messageDefaults={type:"info"},t.prototype.initialize=function(e){return this.options=null!=e?e:{},this.history=[],this.messageDefaults=l.extend({},this.messageDefaults,this.options.messageDefaults)},t.prototype.render=function(){return this.updateMessageSlotClasses()},t.prototype.findById=function(l){return o.filter(this.history,function(e){return e.msg.options.id===l})},t.prototype._reserveMessageSlot=function(e){var t,n,i=this;for(t=l("<li>"),t.addClass("messenger-message-slot"),this.$el.prepend(t),this.history.push({msg:e,$slot:t}),this._enforceIdConstraint(e),e.on("update",function(){return i._enforceIdConstraint(e)});this.options.maxMessages&&this.history.length>this.options.maxMessages;)n=this.history.shift(),n.msg.remove(),n.$slot.remove();return t},t.prototype._enforceIdConstraint=function(l){var e,t,n,i,o;if(null!=l.options.id)for(o=this.history,t=0,n=o.length;n>t;t++)if(e=o[t],i=e.msg,null!=i.options.id&&i.options.id===l.options.id&&l!==i){if(l.options.singleton)return l.hide(),void 0;i.hide()}},t.prototype.newMessage=function(l){var e,t,n,o,r=this;return null==l&&(l={}),l.messenger=this,a=null!=(t=null!=(n=Messenger.themes[null!=(o=l.theme)?o:this.options.theme])?n.Message:void 0)?t:i,e=new a(l),e.on("show",function(){return l.scrollTo&&"fixed"!==r.$el.css("position")?e.scrollTo():void 0}),e.on("hide show render",this.updateMessageSlotClasses,this),e},t.prototype.updateMessageSlotClasses=function(){var l,e,t,n,i,o,a;for(n=!0,e=null,l=!1,a=this.history,i=0,o=a.length;o>i;i++)t=a[i],t.$slot.removeClass("messenger-first messenger-last messenger-shown"),t.msg.shown&&t.msg.rendered&&(t.$slot.addClass("messenger-shown"),l=!0,e=t,n&&(n=!1,t.$slot.addClass("messenger-first")));return null!=e&&e.$slot.addClass("messenger-last"),this.$el[""+(l?"remove":"add")+"Class"]("messenger-empty")},t.prototype.hideAll=function(){var l,e,t,n,i;for(n=this.history,i=[],e=0,t=n.length;t>e;e++)l=n[e],i.push(l.msg.hide());return i},t.prototype.post=function(e){var t;return o.isString(e)&&(e={message:e}),e=l.extend(!0,{},this.messageDefaults,e),t=this.newMessage(e),t.update(e),t},t}(t),e=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return h(t,e),t.prototype.doDefaults={progressMessage:null,successMessage:null,errorMessage:"Error connecting to the server.",showSuccessWithoutError:!0,retry:{auto:!0,allow:!0},action:l.ajax},t.prototype.hookBackboneAjax=function(e){var t,n=this;if(null==e&&(e={}),null==window.Backbone)throw"Expected Backbone to be defined";return e=o.defaults(e,{id:"BACKBONE_ACTION",errorMessage:!1,successMessage:"Request completed successfully.",showSuccessWithoutError:!1}),t=function(l){var t;return t=o.extend({},e,l.messenger),n["do"](t,l)},null!=Backbone.ajax?(Backbone.ajax._withoutMessenger&&(Backbone.ajax=Backbone.ajax._withoutMessenger),(null==e.action||e.action===this.doDefaults.action)&&(e.action=Backbone.ajax),t._withoutMessenger=Backbone.ajax,Backbone.ajax=t):Backbone.sync=o.wrap(Backbone.sync,function(){var e,n,i;return i=arguments[0],e=2<=arguments.length?f.call(arguments,1):[],n=l.ajax,l.ajax=t,i.call.apply(i,[this].concat(f.call(e))),l.ajax=n})},t.prototype._getHandlerResponse=function(l){return l===!1?!1:l===!0||null==l?!0:l},t.prototype._parseEvents=function(l){var e,t,n,i,o,a,r;null==l&&(l={}),o={};for(i in l)n=l[i],t=i.indexOf(" "),a=i.substring(0,t),e=i.substring(t+1),null==(r=o[a])&&(o[a]={}),o[a][e]=n;return o},t.prototype._normalizeResponse=function(){var l,e,t,n,i,a,r;for(t=1<=arguments.length?f.call(arguments,0):[],n=null,i=null,l=null,a=0,r=t.length;r>a;a++)e=t[a],"success"===e||"timeout"===e||"abort"===e?n=e:null!=(null!=e?e.readyState:void 0)&&null!=(null!=e?e.responseText:void 0)?i=e:o.isObject(e)&&(l=e);return[n,l,i]},t.prototype.run=function(){var e,t,n,i,a,r,s,c,u,d,h,m=this;if(r=arguments[0],u=arguments[1],e=3<=arguments.length?f.call(arguments,2):[],null==u&&(u={}),r=l.extend(!0,{},this.messageDefaults,this.doDefaults,null!=r?r:{}),t=this._parseEvents(r.events),n=function(l,e){var t;return t=r[l+"Message"],o.isFunction(t)?t.call(m,l,e):t},s=null!=(h=r.messageInstance)?h:this.newMessage(r),null!=r.id&&(s.options.id=r.id),null!=r.progressMessage&&s.update(l.extend({},r,{message:n("progress",null),type:"info"})),a={},o.each(["error","success"],function(i){var c;return c=u[i],a[i]=function(){var a,d,h,g,v,b,y,T,C,E,D,I,w,_,S;return b=1<=arguments.length?f.call(arguments,0):[],C=m._normalizeResponse.apply(m,b),v=C[0],a=C[1],T=C[2],"success"===i&&null==s.errorCount&&r.showSuccessWithoutError===!1&&(r.successMessage=null),"error"===i&&(null==(E=r.errorCount)&&(r.errorCount=0),r.errorCount+=1),h=r.returnsPromise?b[0]:"function"==typeof c?c.apply(null,b):void 0,y=m._getHandlerResponse(h),o.isString(y)&&(y={message:y}),"error"!==i||0!==(null!=T?T.status:void 0)&&"abort"!==v?"error"===i&&null!=r.ignoredErrorCodes&&(D=null!=T?T.status:void 0,p.call(r.ignoredErrorCodes,D)>=0)?(s.hide(),void 0):(d={message:n(i,T),type:i,events:null!=(I=t[i])?I:{},hideOnNavigate:"success"===i},g=l.extend({},r,d,y),"number"==typeof(null!=(w=g.retry)?w.allow:void 0)&&g.retry.allow--,"error"===i&&(null!=T?T.status:void 0)>=500&&(null!=(_=g.retry)?_.allow:void 0)?(null==g.retry.delay&&(g.retry.delay=g.errorCount<4?10:300),g.hideAfter&&(null==(S=g._hideAfter)&&(g._hideAfter=g.hideAfter),g.hideAfter=g._hideAfter+g.retry.delay),g._retryActions=!0,g.actions={retry:{label:"retry now",phrase:"Retrying TIME",auto:g.retry.auto,delay:g.retry.delay,action:function(){return g.messageInstance=s,setTimeout(function(){return m["do"].apply(m,[g,u].concat(f.call(e)))},0)}},cancel:{action:function(){return s.cancel()}}}):g._retryActions&&(delete g.actions.retry,delete g.actions.cancel,delete r._retryActions),s.update(g),y&&g.message?(Messenger(),s.show()):s.hide()):(s.hide(),void 0)}}),!r.returnsPromise)for(d in a)i=a[d],c=u[d],u[d]=i;return s._actionInstance=r.action.apply(r,[u].concat(f.call(e))),r.returnsPromise&&s._actionInstance.then(a.success,a.error),s},t.prototype["do"]=t.prototype.run,t.prototype.ajax=function(){var e,t;return t=arguments[0],e=2<=arguments.length?f.call(arguments,1):[],t.action=l.ajax,this.run.apply(this,[t].concat(f.call(e)))},t.prototype.expectPromise=function(l,e){return e=o.extend({},e,{action:l,returnsPromise:!0}),this.run(e)},t.prototype.error=function(l){return null==l&&(l={}),"string"==typeof l&&(l={message:l}),l.type="error",this.post(l)},t.prototype.info=function(l){return null==l&&(l={}),"string"==typeof l&&(l={message:l}),l.type="info",this.post(l)},t.prototype.success=function(l){return null==l&&(l={}),"string"==typeof l&&(l={message:l}),l.type="success",this.post(l)},t}(r),l.fn.messenger=function(){var t,n,i,a,s,c,u,d;return i=arguments[0],n=2<=arguments.length?f.call(arguments,1):[],null==i&&(i={}),t=this,null!=i&&o.isString(i)?(d=t.data("messenger"))[i].apply(d,n):(s=i,null==t.data("messenger")&&(r=null!=(c=null!=(u=Messenger.themes[s.theme])?u.Messenger:void 0)?c:e,t.data("messenger",a=new r(l.extend({el:t},s))),a.render()),t.data("messenger"))},window.Messenger._call=function(e){var t,n,i,o,a,r,s,c,u,d,h;if(r={extraClasses:"messenger-fixed messenger-on-bottom messenger-on-right",theme:"future",maxMessages:9,parentLocations:["body"]},e=l.extend(r,l._messengerDefaults,Messenger.options,e),null!=e.theme&&(e.extraClasses+=" messenger-theme-"+e.theme),s=e.instance||Messenger.instance,null==e.instance){for(u=e.parentLocations,n=null,i=null,d=0,h=u.length;h>d;d++)if(c=u[d],n=l(c),n.length){o=c;break}s?l(s._location)!==l(o)&&(s.$el.detach(),n.prepend(s.$el)):(t=l("<ul>"),n.prepend(t),s=t.messenger(e),s._location=o,Messenger.instance=s)}return null!=s._addedClasses&&s.$el.removeClass(s._addedClasses),s.$el.addClass(a=""+s.className+" "+e.extraClasses),s._addedClasses=a,s},l.extend(Messenger,{Message:i,Messenger:e,themes:null!=(u=Messenger.themes)?u:{}}),l.globalMessenger=window.Messenger=Messenger}.call(this);
(function() {
  var $, FutureMessage, spinner_template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = jQuery;

  spinner_template = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';

  FutureMessage = (function(_super) {

    __extends(FutureMessage, _super);

    function FutureMessage() {
      return FutureMessage.__super__.constructor.apply(this, arguments);
    }

    FutureMessage.prototype.template = function(opts) {
      var $message;
      $message = FutureMessage.__super__.template.apply(this, arguments);
      $message.append($(spinner_template));
      return $message;
    };

    return FutureMessage;

  })(window.Messenger.Message);

  window.Messenger.themes.future = {
    Message: FutureMessage
  };

}).call(this);