(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/components/BackButton.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n("./node_modules/react/index.js"),r=(a=o)&&a.__esModule?a:{default:a},l=n("./node_modules/react-router-dom/es/index.js");t.default=function(e){return r.default.createElement(l.Link,{to:e.to},r.default.createElement("div",{className:"back-arrow"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},r.default.createElement("path",{d:"M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"}))))}},"./src/components/SingleLocation.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("./node_modules/react/index.js"),r=u(o),l=u(n("./src/components/BackButton.js")),c=u(n("./src/components/Loader.js"));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://rickandmortyapi.com/api/location/"+t).then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data,t=e.name,n=e.type,a=e.dimension,o=void 0;return o=this.state.data?r.default.createElement("div",{className:"Single-Info-Container Location"},r.default.createElement(l.default,{to:"/locations"}),r.default.createElement("div",{className:"Single-Info Episode"},r.default.createElement("div",{className:"Single-Info-Text"},r.default.createElement("h2",null,t),r.default.createElement("p",null,r.default.createElement("span",{className:"title"},"Type"),n),r.default.createElement("p",null,r.default.createElement("span",{className:"title"},"Dimension"),a)))):r.default.createElement(c.default,null),r.default.createElement("div",null,o)}}]),t}();t.default=i}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYWNrQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbIl9yZWFjdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfcmVhY3RSb3V0ZXJEb20iLCJwcm9wcyIsIl9yZWFjdDIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkxpbmsiLCJ0byIsImNsYXNzTmFtZSIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZCIsIlNpbmdsZUxvY2F0aW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJzdGF0ZSIsImRhdGEiLCJfdGhpczIiLCJpZCIsIm1hdGNoIiwicGFyYW1zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJfc3RhdGUkZGF0YSIsIm5hbWUiLCJ0eXBlIiwiZGltZW5zaW9uIiwib3V0cHV0IiwiX0JhY2tCdXR0b24yIiwiX0xvYWRlcjIiXSwibWFwcGluZ3MiOiJ3S0FBQSxNQUFBQSxFQUFBQyxFQUFBLHFFQUNBQyxFQUFBRCxFQUFBLHlEQUVtQixTQUFBRSxHQUFBLE9BQ2pCQyxFQUFBQyxRQUFBQyxjQUFBSixFQUFBSyxNQUFNQyxHQUFJTCxFQUFNSyxJQUNkSixFQUFBQyxRQUFBQyxjQUFBLE9BQUtHLFVBQVUsY0FDYkwsRUFBQUMsUUFBQUMsY0FBQSxPQUFLSSxNQUFNLDZCQUE2QkMsTUFBTSxLQUFLQyxPQUFPLEtBQUtDLFFBQVEsYUFDckVULEVBQUFDLFFBQUFDLGNBQUEsUUFBTVEsRUFBRSxzYkNQaEJkLEVBQUFDLEVBQUEsNENBQ0FBLEVBQUEsdUNBQ0FBLEVBQUEsc0ZBRU1jLGNBQ0osU0FBQUEsRUFBYVosZ0dBQU9hLENBQUFDLEtBQUFGLEdBQUEsSUFBQUcsbUtBQUFDLENBQUFGLE1BQUFGLEVBQUFLLFdBQUFDLE9BQUFDLGVBQUFQLElBQUFRLEtBQUFOLEtBQ1pkLElBRFksT0FFbEJlLEVBQUtNLE9BQ0hDLFNBSGdCUCxpWUFPQyxJQUFBUSxFQUFBVCxLQUNYVSxFQUFPVixLQUFLZCxNQUFNeUIsTUFBTUMsT0FBeEJGLEdBQ1JHLGtEQUFrREgsR0FDL0NJLEtBQUssU0FBQUMsR0FBQSxPQUFZQSxFQUFTQyxTQUMxQkYsS0FBSyxTQUFBTixHQUNKQyxFQUFLUSxVQUFXVCw0Q0FJWixJQUFBVSxFQUMwQmxCLEtBQUtPLE1BQU1DLEtBQXJDVyxFQURBRCxFQUNBQyxLQUFNQyxFQURORixFQUNNRSxLQUFNQyxFQURaSCxFQUNZRyxVQUNoQkMsU0F1QkosT0FuQkVBLEVBSEd0QixLQUFLTyxNQUFNQyxLQUlackIsRUFBQUMsUUFBQUMsY0FBQSxPQUFLRyxVQUFVLGtDQUNiTCxFQUFBQyxRQUFBQyxjQUFBa0MsRUFBQW5DLFNBQVlHLEdBQUcsZUFDZkosRUFBQUMsUUFBQUMsY0FBQSxPQUFLRyxVQUFVLHVCQUNiTCxFQUFBQyxRQUFBQyxjQUFBLE9BQUtHLFVBQVUsb0JBQ2JMLEVBQUFDLFFBQUFDLGNBQUEsVUFBSzhCLEdBQ0xoQyxFQUFBQyxRQUFBQyxjQUFBLFNBQ0VGLEVBQUFDLFFBQUFDLGNBQUEsUUFBTUcsVUFBVSxTQUFoQixRQUNDNEIsR0FFSGpDLEVBQUFDLFFBQUFDLGNBQUEsU0FDRUYsRUFBQUMsUUFBQUMsY0FBQSxRQUFNRyxVQUFVLFNBQWhCLGFBQ0M2QixNQWRGbEMsRUFBQUMsUUFBQUMsY0FBQW1DLEVBQUFwQyxRQUFBLE1BcUJKRCxFQUFBQyxRQUFBQyxjQUFBLFdBQU1pQyxzQkFJRnhCIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IEJhY2tCdXR0b24gPSBwcm9wcyA9PiAoXHJcbiAgPExpbmsgdG89e3Byb3BzLnRvfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1hcnJvd1wiPlxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xNSA4LjI1SDUuODdsNC4xOS00LjE5TDkgMyAzIDlsNiA2IDEuMDYtMS4wNi00LjE5LTQuMTlIMTV2LTEuNXpcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGluaz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja0J1dHRvblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4vQmFja0J1dHRvbidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcclxuXHJcbmNsYXNzIFNpbmdsZUxvY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YToge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8ke2lkfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUsIGRpbWVuc2lvbiB9ID0gdGhpcy5zdGF0ZS5kYXRhXHJcbiAgICBsZXQgb3V0cHV0XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICBvdXRwdXQgPSA8TG9hZGVyIC8+XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXRwdXQgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGUtSW5mby1Db250YWluZXIgTG9jYXRpb25cIj5cclxuICAgICAgICAgIDxCYWNrQnV0dG9uIHRvPVwiL2xvY2F0aW9uc1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZS1JbmZvIEVwaXNvZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGUtSW5mby1UZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlR5cGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRpbWVuc2lvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtkaW1lbnNpb259XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdj57b3V0cHV0fTwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTG9jYXRpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==