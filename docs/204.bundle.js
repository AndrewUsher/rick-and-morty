"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[204],{6433:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5697),r=n.n(a),c=n(7294),s=n.n(c),l=n(6174),i=function(e){return s().createElement(l.rU,{to:e.to},s().createElement("div",{className:"back-arrow"},s().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},s().createElement("path",{d:"M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"}))))};i.propTypes={to:r().string.isRequired};const o=i},2204:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(5697),r=n.n(a),c=n(7294),s=n.n(c),l=n(6433),i=n(1863);function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={data:{}},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var r=a.prototype;return r.componentDidMount=function(){var e=this,t=this.props.match.params.id;fetch("https://rickandmortyapi.com/api/character/"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))},r.render=function(){var e,t=this.state.data,n=t.gender,a=t.image,r=t.name,c=t.species,o=t.status;return e=this.state.data?s().createElement("div",{className:"Single-Info-Container"},s().createElement(l.Z,{to:"/characters"}),s().createElement("div",{className:"Single-Info"},s().createElement("img",{src:a}),s().createElement("div",{className:"Single-Info-Text"},s().createElement("h2",null,r),s().createElement("p",null,s().createElement("span",{className:"title"},"Gender"),n),s().createElement("p",null,s().createElement("span",{className:"title"},"Species"),c),s().createElement("p",null,s().createElement("span",{className:"title"},"Status"),o)))):s().createElement(i.Z,null),s().createElement("div",null,e)},a}(c.Component);p.propTypes={match:r().shape({params:r().shape({id:r().string.isRequired})})};const m=p}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoib0xBSU1BLEVBQWEsU0FBQUMsR0FBSyxPQUN0QixrQkFBQyxLQUFELENBQU1DLEdBQUlELEVBQU1DLElBQ2QseUJBQUtDLFVBQVUsY0FDYix5QkFBS0MsTUFBTSw2QkFBNkJDLE1BQU0sS0FBS0MsT0FBTyxLQUFLQyxRQUFRLGFBQ3JFLDBCQUFNQyxFQUFFLHlFQU1oQlIsRUFBV1MsVUFBWSxDQUNyQlAsR0FBSVEsSUFBQUEsT0FBQUEsWUFHTixXLDJNQ2JNQyxFQUFBQSxTQUFBQSxHLFFBQ0osV0FBYVYsR0FBTyxhQUNsQixjQUFNQSxJQUFOLE1BQ0tXLE1BQVEsQ0FDWEMsS0FBTSxJQUhVLEUsMkdBT3BCQyxrQkFBQSxXQUFxQixXQUNYQyxFQUFPQyxLQUFLZixNQUFNZ0IsTUFBTUMsT0FBeEJILEdBQ1JJLE1BQU0sNkNBQTZDSixHQUNoREssTUFBSyxTQUFBQyxHQUFRLE9BQUlBLEVBQVNDLFVBQzFCRixNQUFLLFNBQUFQLEdBQ0osRUFBS1UsU0FBUyxDQUFFVixLQUFBQSxRLEVBSXRCVyxPQUFBLFdBQ0UsSUFDSUMsRUFESixFQUFpRFQsS0FBS0osTUFBTUMsS0FBcERhLEVBQVIsRUFBUUEsT0FBUUMsRUFBaEIsRUFBZ0JBLE1BQU9DLEVBQXZCLEVBQXVCQSxLQUFNQyxFQUE3QixFQUE2QkEsUUFBU0MsRUFBdEMsRUFBc0NBLE9BNkJ0QyxPQXhCRUwsRUFIR1QsS0FBS0osTUFBTUMsS0FJWix5QkFBS1YsVUFBVSx5QkFDYixrQkFBQyxJQUFELENBQVlELEdBQUcsZ0JBQ2YseUJBQUtDLFVBQVUsZUFDYix5QkFBSzRCLElBQUtKLElBQ1YseUJBQUt4QixVQUFVLG9CQUNiLDRCQUFLeUIsR0FDTCwyQkFDRSwwQkFBTXpCLFVBQVUsU0FBaEIsVUFDQ3VCLEdBRUgsMkJBQ0UsMEJBQU12QixVQUFVLFNBQWhCLFdBQ0MwQixHQUVILDJCQUNFLDBCQUFNMUIsVUFBVSxTQUFoQixVQUNDMkIsTUFuQkYsa0JBQUMsSUFBRCxNQTBCSiw2QkFBTUwsSSxFQS9DWGQsQ0FBd0JxQixFQUFBQSxXQW1EOUJyQixFQUFnQkYsVUFBWSxDQUMxQlEsTUFBT1AsSUFBQUEsTUFBZ0IsQ0FDckJRLE9BQVFSLElBQUFBLE1BQWdCLENBQ3RCSyxHQUFJTCxJQUFBQSxPQUFBQSxnQkFLViIsInNvdXJjZXMiOlsid2VicGFjazovL3JpY2stYW5kLW1vcnR5Ly4vc3JjL2NvbXBvbmVudHMvQmFja0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yaWNrLWFuZC1tb3J0eS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNoYXJhY3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgQmFja0J1dHRvbiA9IHByb3BzID0+IChcbiAgPExpbmsgdG89e3Byb3BzLnRvfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stYXJyb3dcIj5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNSA4LjI1SDUuODdsNC4xOS00LjE5TDkgMyAzIDlsNiA2IDEuMDYtMS4wNi00LjE5LTQuMTlIMTV2LTEuNXpcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIDwvTGluaz5cbilcblxuQmFja0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja0J1dHRvblxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi9CYWNrQnV0dG9uJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuY2xhc3MgU2luZ2xlQ2hhcmFjdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zXG4gICAgZmV0Y2goYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBnZW5kZXIsIGltYWdlLCBuYW1lLCBzcGVjaWVzLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGUuZGF0YVxuICAgIGxldCBvdXRwdXRcbiAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgb3V0cHV0ID0gPExvYWRlciAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlLUluZm8tQ29udGFpbmVyXCI+XG4gICAgICAgICAgPEJhY2tCdXR0b24gdG89XCIvY2hhcmFjdGVyc1wiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGUtSW5mb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGUtSW5mby1UZXh0XCI+XG4gICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkdlbmRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7Z2VuZGVyfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U3BlY2llczwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7c3BlY2llc31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0YXR1czwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiA8ZGl2PntvdXRwdXR9PC9kaXY+XG4gIH1cbn1cblxuU2luZ2xlQ2hhcmFjdGVyLnByb3BUeXBlcyA9IHtcbiAgbWF0Y2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFyYW1zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNoYXJhY3RlclxuIl0sIm5hbWVzIjpbIkJhY2tCdXR0b24iLCJwcm9wcyIsInRvIiwiY2xhc3NOYW1lIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiU2luZ2xlQ2hhcmFjdGVyIiwic3RhdGUiLCJkYXRhIiwiY29tcG9uZW50RGlkTW91bnQiLCJpZCIsInRoaXMiLCJtYXRjaCIsInBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldFN0YXRlIiwicmVuZGVyIiwib3V0cHV0IiwiZ2VuZGVyIiwiaW1hZ2UiLCJuYW1lIiwic3BlY2llcyIsInN0YXR1cyIsInNyYyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=