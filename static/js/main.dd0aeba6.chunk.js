(this["webpackJsonpstudy-app"]=this["webpackJsonpstudy-app"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(14),i=c(0),s=c.n(i),o=c(59),a=c.n(o),r=(c(72),c.p,c(73),c(60)),h=c(61),d=c(66),l=c(64),u=c(17),j=c(65),b=c(62),f=(c(98),c(99),function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleVideoLoad=function(e){console.log(e.target.files);var t=e.target.files;if(1===t.length){var c=t[0];n.setState({videoFileURL:URL.createObjectURL(c),videoFileObject:c})}},n.anotherAPI=function(){fetch("https://official-joke-api.appspot.com/random_joke",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({first:e.setup,second:e.punchline})}),(function(e){console.log("error")}))},n.sortData=function(){},n.state={link:"",youtubeLink:"",videoFileURL:"",videoFileObject:null,first:"",second:""},n}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"main-page-container",children:[Object(n.jsxs)("div",{className:"left-side",children:[Object(n.jsx)(b.Player,{playsInline:!0,poster:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAADxBAMAAAAkWSH4AAAAMFBMVEW9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzUvxSzAAAEQklEQVR42u3bO2iUQRAH8DkjCoKQycskvnKFQvCRHCnFR1AiiKBnJxYq2IrGIhAEJYWWxiu08pXCUo9rDBEhiFpYiKQwFoohhFQWh8REzT3G4r79vv0uz2ITduC/1ZfcFb9MZmdnd+9ItA6CHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghh9zhKI9c6UrWdfX0jyqTv+qkYCROjiqSl26wNeqfqJEXujk+riqRFzqJiPbc/JQX+XmnjYgSV3XIrxNRw+Nwqg63ESVuqZA/IzqVt/8HaaINWQ3yGTpdNWF7iTbmFciLhxYU90tE+3SuoYUk81Odq/80c7PSvmWI+bZOeSnF25T2ilOug75u8nKKW5T251PMn3XKS0k+qENefHiip/+N9YsxblQhf15LRESN0b6iwJz1X14eML15Q7R29jpNlzWSZ6JtRV1In+Em7+XT9o6o0bSJRafVZU3khWRsMxe2iWm+6KO8HGtSYiMbVpedPsrn2vNREYmP7eYtLuuiO/kk7wqe3lbLTXqXmPMeyjN8Jkib5AL5wTDRn3ooTxnV7AJ4mCRD5q/zSV5iXmJ+MjMHK+kvh1PUmfxfGNjkIvKjZoq2+CefNah/i8DNa/MOi4szeZgIM5Uz3I21ZI2aYPKGKeWRfIw7Kg+5SpRbvy5WF1M84Z08Z1b2s5Uob5FxO+rXKi9edtfoOpNneLDy0GbkMXpH1bs8kptoFimU2/StpmJe807eHWTwfJDYrSIiX6pblzF3S5EzuZl7f215RG8xzc1R7+TJoJmas7JFRD4EP242tbPDO7mp1LOxmIdRbzLy3f7K4zEXuU9ERJsUyFeIeYfSPPdxhq6utvhYFbuD1mSlen7RO/nlYEu0/Bqa83ANHTAdSRTzcatX9LhvGVplrziK/nzN9kQ1i+2JhOu07UNbzemXh/vQaO+fWm7v3+yfPDp503besqozrpyPZ1yKzxUnw0xYeJY7EWbUhIfy6HB8Xtn5uRXQpe8sdvgot26Bqu6J9kdd2Rkv5W/DrFjibk7ee3o3N2ct7fZ9qHUe90C8lJc5ar6jO2i+J2szXN6HZuxzfXPvnxUF8t+xcl0c6TvR80hEg7zEfEDWbTi9Pc9wfV6nfI75iE65pLl+Qqd8dh0z3fGnRNLuP3+7TvI/9mKvSi4Z5nad8gIzH1Ipl3dE1Z/5L+uQSy9R4nzsexbdeR3y0jEiqrkZBny4jQZ1yM33ifrf/Ch/f92Xii6gvZdLIU3xcViLXEo3bHfigqiRi3w8F8L3vhRNcpFvd4/XEnedfKGmnivtciGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsi1jP/nvj+DoPVC/QAAAABJRU5ErkJggg==",src:this.state.videoFileURL,fluid:!1,width:700,height:457}),Object(n.jsx)(u.a,{children:Object(n.jsx)(u.a.Group,{children:Object(n.jsx)(u.a.File,{id:"exampleFormControlFile1",onChange:function(t){e.handleVideoLoad(t)}})})})]}),Object(n.jsx)("div",{className:"right-side",children:Object(n.jsxs)("div",{className:"timestamp-container",children:[Object(n.jsx)(u.a.Group,{className:"keyword-input",children:Object(n.jsx)(u.a.Control,{className:"grey-border",type:"text",placeholder:"Enter a keyword"})}),Object(n.jsx)(j.a,{className:"grey-btn",onClick:function(){return e.anotherAPI()},children:"Search"}),Object(n.jsx)("div",{children:this.state.first}),Object(n.jsx)("div",{children:this.state.second})]})})]})}}]),c}(i.Component));c(101);var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(f,{})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),s(e),o(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),p()},72:function(e,t,c){},73:function(e,t,c){},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.dd0aeba6.chunk.js.map