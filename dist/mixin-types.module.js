function e(...e){return e.reduce(((e,t)=>t(e)),Object)}function t(e,...t){return t.reduce(((e,t)=>t(e)),e)}function n(e){return class extends e{constructor(e,...t){super(...t),this.info=e}myMethod(e){return this.info}}}class r extends(n(Object)){}(new r).myMethod('test');export{e as Mixins,t as MixinsWith,r as MyMixinClass,n as addMyMixinClass};
