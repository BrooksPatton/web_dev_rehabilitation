(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(5),l=a.n(o),r=a(1),i=a(2);a(12);var m=function(e){var t=e.task,a=e.editTaskName,o=e.toggleTaskCompletedStatus,l=e.removeTaskById,i=Object(n.useState)(!1),m=Object(r.a)(i,2),s=m[0],d=m[1],u=Object(n.useState)(t.name),k=Object(r.a)(u,2),p=k[0],f=k[1],v=function(e){return f(e.target.value)},E=function(e){e.preventDefault(),a({id:t.id,name:p}),d(!1)},T=function(){d(!1),f(t.name)};return c.a.createElement("section",{className:"Task"},c.a.createElement("div",{className:"Task-name"},c.a.createElement("label",{htmlFor:"".concat(t.id,"-task")}),c.a.createElement("input",{type:"checkbox",id:"".concat(t.id,"-task"),onChange:function(){return o(t.id)},checked:t.completed}),s?c.a.createElement("form",{onSubmit:E},c.a.createElement("label",{htmlFor:"Task-edit-".concat(t.id)}),c.a.createElement("input",{type:"text",value:p,id:"Task-edit-".concat(t.id),onChange:v})):c.a.createElement("span",{className:t.completed?"Task-completed":null},t.name)),c.a.createElement("div",null,s?c.a.createElement("button",{className:"Task-edit",onClick:E},"Save"):c.a.createElement("button",{className:"Task-edit",onClick:function(){return d(!0)}},"Edit"),s?c.a.createElement("button",{className:"Task-edit",onClick:T},"Cancel"):null,c.a.createElement("button",{className:"Task-delete",onClick:function(){return l(t.id)}},"X")))};var s=function(e){var t=e.tasks,a=e.editTaskName,n=e.toggleTaskCompletedStatus,o=e.removeTaskById;return c.a.createElement("section",{className:"Task"},c.a.createElement("ol",null,t.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(m,{task:e,editTaskName:a,toggleTaskCompletedStatus:n,removeTaskById:o}))})))};var d=function(e){var t=e.addTask,a=Object(n.useState)(""),o=Object(r.a)(a,2),l=o[0],i=o[1];return c.a.createElement("section",{className:"AddTask"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l),i("")}},c.a.createElement("label",null,c.a.createElement("h1",null,"Add Task"),c.a.createElement("input",{type:"text",value:l,onChange:function(e){i(e.target.value)}})),c.a.createElement("button",null,"Add")))};var u=function(e){var t=Object(n.useState)([{id:1,name:"Task name",completed:!1},{id:2,name:"Grocery shopping",completed:!0},{id:3,name:"Stream on Twitch",completed:!1}]),a=Object(r.a)(t,2),o=a[0],l=a[1],m=Object(n.useState)(3),u=Object(r.a)(m,2),k=u[0],p=u[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React State Todo App"),c.a.createElement(s,{tasks:o,editTaskName:function(e){var t=Object(i.cloneDeep)(o);t.find(function(t){return t.id===e.id}).name=e.name,l(t)},toggleTaskCompletedStatus:function(e){var t=Object(i.cloneDeep)(o),a=t.find(function(t){return t.id===e});a.completed=!a.completed,l(t)},removeTaskById:function(e){var t=Object(i.cloneDeep)(o),a=t.findIndex(function(t){return t.id===e});t.splice(a,1),l(t)}}),c.a.createElement(d,{addTask:function(e){var t={id:k+1,name:e,completed:!1};o.push(t),l(o),p(k+1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.190e2bab.chunk.js.map