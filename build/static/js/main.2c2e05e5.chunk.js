(this["webpackJsonpassessment-frontend"]=this["webpackJsonpassessment-frontend"]||[]).push([[0],{45:function(e,a,t){e.exports=t.p+"static/media/logo.529e4487.svg"},68:function(e,a,t){e.exports=t(92)},75:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(64),s=t.n(l),o=(t(75),t(76),t(25)),c=t(9);var m=e=>{let{component:a,...t}=e;const r=localStorage.getItem("user");return n.a.createElement(c.b,Object.assign({},t,{render:e=>r?n.a.createElement(a,e):n.a.createElement(c.a,{to:"/login"})}))},u=t(101),i=t(95),d=t(96),g=t(97),p=t(45),E=t.n(p),h=t(20),y=t.n(h),b=t(23),f=t(16);var v=t(100).a.create({baseURL:"https://kcb-boma-yangu-backend-kcb-boma-yangu.apps.dev.aro.kcbgroup.com/api/users",headers:{Authorization:"Basic Qm9tYVBvcnRhbENsaWVudDpjYmZiZDBhYi0yODc2LTQ0MmItYTNjOC04YWVkOTYzMmJhODM=",Cookie:"fbcddb7c82b2370dbc9f2956b19e7c33=f2001438c8f7916be557203a22cc5dc0","Content-Type":"application/json"}});const C=Object(f.b)("/auth/login",async(e,a)=>{let{rejectWithValue:t}=a;try{const a=await v.post("/login",e);if(200===a.status){const{token:e,payload:t}=a.data;return localStorage.setItem("user",JSON.stringify(t)),y.a.set("token",e,{expires:1,path:"/"}),a.data}return t(a.data.message)}catch(l){var r,n;return t((null===(r=l.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"An error occurred")}}),x=Object(f.b)("/auth/logout",async(e,a)=>{let{rejectWithValue:t}=a;try{const e=y.a.get("token");if(!e)throw new Error("No token found");const a=await v.post("/logout",{},{headers:{Authorization:"Bearer "+e}});return 200===a.status?(localStorage.removeItem("user"),y.a.remove("token"),a.data):t(a.data.message)}catch(l){var r,n;return t((null===(r=l.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"An error occurred")}});var k=()=>{const e=Object(c.g)(),a=Object(c.h)(),t=Object(b.b)(),r=JSON.parse(localStorage.getItem("user")),l=y.a.get("token");return n.a.createElement(u.a,{style:{backgroundColor:"#003D4C",color:"#fff"}},n.a.createElement(i.a,null,"/"!==a.pathname&&n.a.createElement(u.a.Brand,{onClick:()=>{e.goBack()},style:{cursor:"pointer"}},n.a.createElement(d.a,{variant:"outline-light"},"Back")),n.a.createElement(u.a.Brand,{href:"/"},n.a.createElement(g.a,{src:E.a,alt:"Logo",height:"60",className:"d-inline-block align-top"})),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{className:"justify-content-end"},n.a.createElement(u.a.Text,null,r||l?n.a.createElement(d.a,{style:{color:"#fff"},variant:"outline-light",onClick:async()=>{try{await t(x()).unwrap(),e.push("/login")}catch(a){console.error("Logout failed:",a)}}},"Sign Out"):n.a.createElement(d.a,{style:{color:"#fff"},variant:"outline-light",href:"/login"},"Sign In")))))},j=t(98),w=t(67);const O={color:"#003D4C",padding:"60px",textAlign:"center",marginBottom:"30px"},S={backgroundColor:"#F9F9F9",color:"#003D4C",padding:"60px",textAlign:"center",marginBottom:"30px"},L={border:"1px solid #003D4C",color:"#A4C61C",transition:"#003D4C 0.3s, color 0.3s"},N={color:"#003D4C",textDecoration:"none"},U={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",backgroundColor:"#f2f2f2",color:"#333",textAlign:"center",fontFamily:"Arial, sans-serif"},D={maxWidth:"600px",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 0 15px rgba(0, 0, 0, 0.1)"},F={fontSize:"100px",margin:"0",color:"#003D4C"},I={fontSize:"24px",marginTop:"10px"},A={fontSize:"16px",marginTop:"20px",color:"#666"},B={display:"inline-block",marginTop:"30px",padding:"10px 20px",backgroundColor:"#003D4C",color:"#fff",textDecoration:"none",borderRadius:"5px",transition:"background-color 0.3s"};var T=()=>n.a.createElement(i.a,null,n.a.createElement(j.a,null,n.a.createElement(w.a,null,n.a.createElement("div",{className:"jumbotron",style:O},n.a.createElement("h1",null,"Welcome to User Management System!"),n.a.createElement("p",null,"Efficiently manage users with our comprehensive user management service."),n.a.createElement("p",null,n.a.createElement(d.a,{style:L,variant:"outline-dark",size:"sm",className:"mt-3"},n.a.createElement(o.b,{style:N,to:"/login"},"Get Started")))))),n.a.createElement(j.a,null,n.a.createElement(w.a,null,n.a.createElement("section",{style:S,id:"about"},n.a.createElement("h2",null,"About Our Service"),n.a.createElement("p",null,"Our user management system allows you to easily create, edit, and manage user accounts. Whether you're an administrator overseeing multiple users or a manager delegating tasks, our system provides all the tools you need to keep your user base organized and efficient.")))));var W=()=>n.a.createElement("footer",{style:{backgroundColor:"#010100"},className:"mt-auto py-3 text-light"},n.a.createElement(i.a,null,n.a.createElement(j.a,null,n.a.createElement(w.a,{md:6},n.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," KCB Bank")),n.a.createElement(w.a,{md:6,className:"text-md-right"},n.a.createElement("ul",{className:"list-inline"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"#home",className:"text-light"},"Home")),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"#about",className:"text-light"},"About")),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"#contact",className:"text-light"},"Contact")))))));var z=()=>n.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},n.a.createElement(k,null),n.a.createElement("div",{style:{flex:"1"}},n.a.createElement(T,null)),n.a.createElement(W,null));var G=()=>n.a.createElement("div",{style:U},n.a.createElement("div",{style:D},n.a.createElement("h1",{style:F},"404"),n.a.createElement("h2",{style:I},"Page Not Found"),n.a.createElement("p",{style:A},"Sorry, the page you're looking for doesn't exist. You might have mistyped the URL or the page may have moved."),n.a.createElement(o.b,{to:"/",style:B,onMouseEnter:e=>e.target.style.backgroundColor="#d93b3b",onMouseLeave:e=>e.target.style.backgroundColor="#ff4a4a"},"Go Back to Home"))),H=t(104),R=t(103),V=t(102);var Y=()=>{const e=Object(b.b)(),a=Object(c.g)(),[t,l]=Object(r.useState)(""),[s,o]=Object(r.useState)(""),{loading:m}=Object(b.c)(e=>e.auth),[u,p]=Object(r.useState)(null);return n.a.createElement(i.a,null,n.a.createElement(j.a,{className:"justify-content-md-center mt-5"},n.a.createElement(w.a,{xs:12,md:6},n.a.createElement(H.a,null,n.a.createElement(H.a.Header,{style:{backgroundColor:"#003D4C"}},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(g.a,{src:E.a,alt:"Logo",height:"50",className:"d-inline-block align-top"}))),n.a.createElement(H.a.Body,{className:"d-flex flex-column align-items-center"},n.a.createElement(H.a.Title,{className:"text-center",style:{color:"#003D4C"}},"Sign In"),u&&n.a.createElement(R.a,{variant:"danger"},u),m&&n.a.createElement(R.a,{variant:"info"},"Logging in..."),n.a.createElement(V.a,{onSubmit:async r=>{r.preventDefault();try{p(null),await e(C({username:t,password:s})).unwrap(),a.push("/")}catch(n){p(n.message||"An error occurred")}}},n.a.createElement(V.a.Group,{className:"mb-3",controlId:"username"},n.a.createElement(V.a.Label,null,"Username"),n.a.createElement(V.a.Control,{type:"text",placeholder:"Username",value:t,onChange:e=>l(e.target.value),required:!0})),n.a.createElement(V.a.Group,{className:"mb-3",controlId:"password"},n.a.createElement(V.a.Label,null,"Password"),n.a.createElement(V.a.Control,{type:"password",placeholder:"Password",value:s,onChange:e=>o(e.target.value),required:!0})),n.a.createElement(d.a,{variant:"primary",type:"submit",disabled:m},m?"Logging in...":"Login")))))))};var M=()=>n.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},n.a.createElement(k,null),n.a.createElement("div",{style:{flex:"1"}},n.a.createElement(Y,null)),n.a.createElement(W,null)),J=t(99),P=t(105);const q=Object(f.b)("allUsers/getAllUsers",async(e,a)=>{let{rejectWithValue:t}=a;try{const e=y.a.get("token"),a=JSON.stringify({token:e}),r=await v.post("/listAll",a);return 200===r.status?r.data.payload.content:t(r.data.message)}catch(l){var r,n;return t((null===(r=l.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"An error occurred")}}),Q=Object(f.b)("users/createUser",async(e,a)=>{let{rejectWithValue:t}=a;try{const a=y.a.get("token"),r=await v.post("/create",{token:a,payload:e});return 200===r.status?r.data.payload:t(r.data.message)}catch(l){var r,n;return t((null===(r=l.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"An error occurred")}}),Z=Object(f.b)("users/editUser",async(e,a)=>{let{token:t,payload:r}=e,{rejectWithValue:n}=a;try{const e=await v.post("/edit",{token:t,payload:r});return 200===e.status?e.data.payload:n(e.data.message)}catch(o){var l,s;return n((null===(l=o.response)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.message)||"An error occurred")}});var K=()=>{const e=Object(b.b)(),{users:a=[],loading:t,error:l}=Object(b.c)(e=>e.allUsers),[s,o]=Object(r.useState)(""),[c,m]=Object(r.useState)(!1),[u,g]=Object(r.useState)(!1),[p,E]=Object(r.useState)({usrFirstname:"",usrLastname:"",usrUsername:"",usrId:""}),[h,f]=Object(r.useState)({show:!1,message:"",type:""});Object(r.useEffect)(()=>{e(q())},[e]);const v=()=>{m(!1),f({show:!1,message:"",type:""})},C=a.filter(e=>e.usrFirstname.toLowerCase().includes(s.toLowerCase())||e.usrLastname.toLowerCase().includes(s.toLowerCase())||e.usrUsername.toLowerCase().includes(s.toLowerCase()));return t?n.a.createElement("p",null,"Loading..."):l?n.a.createElement("p",null,"Error: ",l):n.a.createElement(i.a,null,n.a.createElement(V.a.Group,{className:"mt-3 mb-3",controlId:"search"},n.a.createElement(V.a.Control,{type:"text",placeholder:"Search...",value:s,onChange:e=>o(e.target.value)})),n.a.createElement(d.a,{className:"mb-3",onClick:()=>{E({usrFirstname:"",usrLastname:"",usrUsername:"",usrId:""}),g(!1),m(!0)}},"Create User"),h.show&&n.a.createElement(R.a,{variant:h.type,onClose:()=>f({show:!1,message:"",type:""}),dismissible:!0},h.message),n.a.createElement(J.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Username"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Created Date"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,C.map((e,a)=>n.a.createElement("tr",{key:a},n.a.createElement("td",null,a+1),n.a.createElement("td",null,e.usrFirstname),n.a.createElement("td",null,e.usrLastname),n.a.createElement("td",null,e.usrUsername),n.a.createElement("td",null,e.usrStatus),n.a.createElement("td",null,e.usrCdate),n.a.createElement("td",null,n.a.createElement(d.a,{variant:"primary",onClick:()=>(e=>{const a=Object.fromEntries(Object.entries(e).filter(e=>{let[a,t]=e;return null!==t}));E(a),g(!0),m(!0)})(e)},"Edit")))))),n.a.createElement(P.a,{show:c,onHide:v},n.a.createElement(P.a.Header,{closeButton:!0},n.a.createElement(P.a.Title,null,u?"Edit User":"Create User")),n.a.createElement(P.a.Body,null,n.a.createElement(V.a,null,n.a.createElement(V.a.Group,{controlId:"formFirstname"},n.a.createElement(V.a.Label,null,"First Name"),n.a.createElement(V.a.Control,{type:"text",placeholder:"Enter first name",value:p.usrFirstname,onChange:e=>E({...p,usrFirstname:e.target.value})})),n.a.createElement(V.a.Group,{controlId:"formLastname"},n.a.createElement(V.a.Label,null,"Last Name"),n.a.createElement(V.a.Control,{type:"text",placeholder:"Enter last name",value:p.usrLastname,onChange:e=>E({...p,usrLastname:e.target.value})})),n.a.createElement(V.a.Group,{controlId:"formUsername"},n.a.createElement(V.a.Label,null,"Username"),n.a.createElement(V.a.Control,{type:"text",placeholder:"Enter username",value:p.usrUsername,onChange:e=>E({...p,usrUsername:e.target.value})})))),n.a.createElement(P.a.Footer,null,n.a.createElement(d.a,{variant:"secondary",onClick:v},"Close"),n.a.createElement(d.a,{variant:"primary",onClick:async()=>{try{u?(await e(Z({token:y.a.get("token"),payload:p})),f({show:!0,message:"User updated successfully!",type:"success"})):(await e(Q(p)),f({show:!0,message:"User created successfully!",type:"success"}))}catch(l){f({show:!0,message:l.message||"An error occurred",type:"danger"})}m(!1)}},u?"Save Changes":"Create User"))))};var X=()=>n.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},n.a.createElement(k,null),n.a.createElement("div",{style:{flex:"1"}},n.a.createElement(K,null)),n.a.createElement(W,null));var $=function(){return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(c.d,null,n.a.createElement(c.b,{path:"/",component:z,exact:!0}),n.a.createElement(c.b,{path:"/login",component:M}),n.a.createElement(m,{path:"/users",component:X}),n.a.createElement(c.b,{component:G}))))};var _=Object(f.c)({name:"users",initialState:{users:[],status:"idle",error:null},reducers:{},extraReducers:e=>{e.addCase(q.pending,e=>{e.status="loading"}).addCase(q.fulfilled,(e,a)=>{e.status="succeeded",e.users=a.payload}).addCase(q.rejected,(e,a)=>{e.status="failed",e.error=a.payload}).addCase(Q.pending,e=>{e.status="loading"}).addCase(Q.fulfilled,(e,a)=>{e.status="succeeded",e.newUser=a.payload,e.users.push(a.payload)}).addCase(Q.rejected,(e,a)=>{e.status="failed",e.error=a.payload}).addCase(Z.pending,e=>{e.loading=!0,e.error=null}).addCase(Z.fulfilled,(e,a)=>{e.loading=!1;const t=a.payload;e.users=e.users.map(e=>e.usrId===t.usrId?t:e)}).addCase(Z.rejected,(e,a)=>{e.loading=!1,e.error=a.payload})}}).reducer;var ee=Object(f.c)({name:"auth",initialState:{user:{},token:null,loading:!1,error:null},extraReducers:e=>{e.addCase(C.pending,e=>{e.loading=!0}).addCase(C.fulfilled,(e,a)=>{e.loading=!1,e.user=a.payload.payload,e.token=a.payload.token,e.error=null}).addCase(C.rejected,(e,a)=>{e.loading=!1,e.user={},e.token=null,e.error=a.payload||a.error.message}).addCase(x.pending,e=>{e.loading=!0}).addCase(x.fulfilled,(e,a)=>{e.loading=!1,e.user={},e.error=null}).addCase(x.rejected,(e,a)=>{e.loading=!1,e.error=a.payload||a.error.message})}}).reducer;var ae=Object(f.a)({reducer:{auth:ee,allUsers:_}});var te=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,106)).then(a=>{let{getCLS:t,getFID:r,getFCP:n,getLCP:l,getTTFB:s}=a;t(e),r(e),n(e),l(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b.a,{store:ae},n.a.createElement($,null)))),te()}},[[68,1,2]]]);
//# sourceMappingURL=main.2c2e05e5.chunk.js.map