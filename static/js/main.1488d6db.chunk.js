(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),s=n(6),u=n(1),m=n(2),d=n(4),f=n(3),p=n(5),h=(n(17),n(18),function(e){var t=e.more,n=e.done;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},"ToDo List"),o.a.createElement("p",{className:"header__text"},t," more to do, ",n," done"))}),b=(n(19),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({text:t}),n.props.onSearchChange(t)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:this.onSearchChange,value:this.state.text})}}]),t}(a.Component)),g=n(11),v=(n(20),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c="todo-app__item";return e.done&&(c+=" is-done"),e.important&&(c+=" is-important"),o.a.createElement("div",{className:c},o.a.createElement("span",{className:"todo-app__label",onClick:r},t),o.a.createElement("div",{className:"todo-app__btns"},o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:n},o.a.createElement("i",{className:"fa fa fa-trash-o"}))))}),E=(n(21),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(g.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-app__list"},c)}),O=(n(22),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onFilter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,c="btn";return t===a&&(c+=" is-active"),o.a.createElement("button",{type:"button",className:c,key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group todo-app__filters"},a)}}]),t}(a.Component)),j=(n(23),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmitForm=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"todo-app__form-add",onSubmit:this.onSubmitForm},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done?",value:this.state.label}),o.a.createElement("button",{type:"submit",className:"btn btn-info todo-app__btn-add",disabled:!this.state.label},"Add item"))}}]),t}(a.Component)),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.createItem=function(e){return{label:e,important:!1,done:!1,id:n.maxId++}},n.state={todoData:[n.createItem("Drink coffee"),n.createItem("Make awesome app"),n.createItem("Have a lunch")],searchText:"",filter:"all"},n.deleteItem=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}}))},n.addItem=function(e){var t=n.createItem(e);n.setState((function(e){var n=e.todoData;return{todoData:[].concat(Object(s.a)(n),[t])}}))},n.onToggleImportant=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}}))},n.onToggleDone=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}}))},n.onSearchChange=function(e){n.setState({searchText:e})},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(s.a)(e.slice(0,a)),[r],Object(s.a)(e.slice(a+1)))}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.searchText,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter((function(e){return e.done})).length,l=t.length-c;return o.a.createElement("div",{className:"container todo-app"},o.a.createElement(h,{more:l,done:c}),o.a.createElement("main",null,o.a.createElement("div",{className:"todo-app__top"},o.a.createElement(b,{onSearchChange:this.onSearchChange}),o.a.createElement(O,{onFilter:a,onFilterChange:this.onFilterChange})),o.a.createElement(E,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement("div",{className:"todo-app__bottom"},o.a.createElement(j,{onItemAdded:this.addItem}))))}}]),t}(a.Component);c.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.1488d6db.chunk.js.map