(this["webpackJsonptodo-2"]=this["webpackJsonptodo-2"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(8),c=n.n(i),r=(n(13),n(3)),o=n(4),d=n(2),u=n(6),l=n(5),j=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).createTasks=a.createTasks.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return Object(j.jsxs)("div",{className:"todo-item",children:[Object(j.jsx)("input",{type:"checkbox"},e.key),Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("div",{className:"todo-item-close",onClick:function(){return t.delete(e.key)},children:Object(j.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})]})}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(j.jsxs)("div",{className:"todoList",children:[Object(j.jsx)("h4",{className:"title",children:"TO DO"}),e]})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={items:[{text:"Go to the supermarket",key:0},{text:"Mow the lawn",key:1},{text:"Finish react to do list",key:2},{text:"Bake a cheesecake",key:3}]},a.addItem=a.addItem.bind(Object(d.a)(a)),a.deleteItem=a.deleteItem.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:(new Date).getTime()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=""}e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"todo-container",children:[Object(j.jsx)("div",{className:"addItem-container",children:Object(j.jsxs)("form",{className:"addTaskForm",onSubmit:this.addItem,children:[Object(j.jsx)("input",{ref:function(t){return e._inputElement=t},placeholder:"Enter task..."}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})})]})}),Object(j.jsx)(h,{entries:this.state.items,delete:this.deleteItem})]})}}]),n}(a.Component);n(15);var b=function(){return Object(j.jsx)("div",{className:"todo-wrapper",children:Object(j.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.ed36e6ac.chunk.js.map