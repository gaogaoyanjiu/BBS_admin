!function(j,p){"use strict";var H="ht",o=j[H],e=function(B){return(/ble$/.test(B)||/ed$/.test(B)||o.IsGetter[B]?"is":"get")+B.charAt(0).toUpperCase()+B.slice(1)};o.QuickFinder=function(q,f,I,u,L){var O=this;O.$9j={},O.$1j=q,O.$2j=f,O.$3j=I,O.$4j=u||O.getValue,O.$5j=L||O.$5j,q.each(O.$7j,O),q.mm(O.$11j,O,!0),q.md(O.$12j,O,!0)},o.Default.def(o.QuickFinder,p,{$6j:"__ht__null__",getValueFunc:function(){return this.$4j},getFilterFunc:function(){return this.$5j},$11j:function(T){"add"===T.kind?this.$7j(T.data):"remove"===T.kind?this.$8j(T.data):"clear"===T.kind&&(this.$9j={})},$12j:function(q){var $=this,O=$.$3j,m=$.$2j;if($.$5j(q.data)){if(null==O&&m===q.property);else if("style"===O&&"s:"+m===q.property);else if("attr"!==O||"a:"+m!==q.property)return;var j=$.$10j(q.oldValue);j&&j.remove(q.data),$.$7j(q.data)}},$10j:function(T){return T=null==T?this.$6j:T,this.$9j[T]},find:function(i){var y=this.$10j(i);return y?y.toList():new o.List},findFirst:function(M){var Z=this.$10j(M);return!Z||Z.isEmpty()?null:Z.get(0)},$7j:function(I){var R=this;if(R.$5j(I)){var K=R.$4j(I),X=R.$10j(K);X||(X=new o.List,K=null==K?R.$6j:K,R.$9j[K]=X),X.add(I)}},$8j:function(z){var c=this;if(c.$5j(z)){var J=c.$4j(z),x=c.$10j(J);x&&(x.remove(z),x.isEmpty()&&(J=null==J?c.$6j:J,delete c.$9j[J]))}},dispose:function(){this.$1j.umm(this.$11j,this),this.$1j.umd(this.$12j,this),delete this.$1j},getDataModel:function(){return this.$1j},getAccessType:function(){return this.$3j},getPropertyName:function(){return this.$2j},$5j:function(M){return null!=this.$3j||this.$4j!==this.getValue||M[e(this.$2j)]?!0:!1},getValue:function(G){var V=this,E=V.$3j,P=V.$2j;return null==E?G[e(P)]():"style"===E?G.s(P):"attr"===E?G.a(P):void 0}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);