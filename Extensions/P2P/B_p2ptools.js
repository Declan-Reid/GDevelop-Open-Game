var gdjs;(function(u){let S;(function(E){let y;(function(t){const C=e=>typeof e=="object"&&e!==null&&typeof e.eventName=="string"&&typeof e.data=="string";class P{constructor(n,o){this.data="";this.sender="";this.data=n,this.sender=o}}t.EventData=P;class N{constructor(){this.data=[];this.dataloss=!1}isTriggered(){return this.data.length>0}pushData(n){this.dataloss&&this.data.length>0?this.data[0]=n:this.data.push(n)}popData(){this.data.shift()}getData(){return this.data.length===0?"":this.data[0].data}getSender(){return this.data.length===0?"":this.data[0].sender}}t.Event=N;let f=null,s={debug:1},r=null;const a=new Map,g=new Map;let b=!1,v=!1,m="";const c=[],l=[],x=()=>{r===null&&(f!==null?r=new Peer(f,s):r=new Peer(s),r.on("open",()=>{b=!0}),r.on("error",e=>{v=!0,m=e.message}),r.on("connection",e=>{e.on("open",()=>{D(e),l.push(e.peer)})}),r.on("close",()=>{r=null,x()}),r.on("disconnected",r.reconnect))},D=e=>{a.set(e.peer,e),e.on("data",n=>{C(n)&&t.getEvent(n.eventName).pushData(new P(n.data,e.peer))}),e.on("error",()=>{h(e.peer)}),e.on("close",()=>{h(e.peer)}),function n(){e.peerConnection&&(e.peerConnection.connectionState==="failed"||e.peerConnection.connectionState==="disconnected"||e.peerConnection.connectionState==="closed")?h(e.peer):setTimeout(n,1e3)}()},h=e=>{!a.has(e)||(c.push(e),a.delete(e))};t.getEvent=e=>{let n=g.get(e);return n||g.set(e,n=new N),n},t.connect=e=>{if(r===null)return;const n=r.connect(e);n.on("open",()=>{D(n)})},t.disconnectFromPeer=e=>{const n=a.get(e);n&&n.close()},t.disconnectFromAllPeers=()=>{for(const e of a.values())e.close()},t.disconnectFromAll=()=>{r&&(r.destroy(),r=null)},t.disconnectFromBroker=()=>{r&&(r.disconnect(),r=null)},t.onEvent=(e,n)=>{const o=t.getEvent(e);return o.dataloss=n,o.isTriggered()},t.sendDataTo=(e,n,o)=>{const i=a.get(e);i&&i.send({eventName:n,data:o})},t.sendDataToAll=(e,n)=>{for(const o of a.values())o.send({eventName:e,data:n})},t.sendVariableTo=(e,n,o)=>{t.sendDataTo(e,n,JSON.stringify(o.toJSObject()))},t.sendVariableToAll=(e,n)=>{t.sendDataToAll(e,JSON.stringify(n.toJSObject()))},t.getEventData=e=>t.getEvent(e).getData(),t.getEventSender=e=>t.getEvent(e).getSender(),t.getEventVariable=(e,n)=>{n.fromJSON(t.getEventData(e))},t.getEvents=()=>g,t.useCustomBrokerServer=(e,n,o,i,p)=>{Object.assign(s,{host:e,port:n,path:o,secure:p,key:i.length===0?"peerjs":i}),x()},t.useDefaultBrokerServer=x,t.useCustomICECandidate=(e,n,o)=>{s.config=s.config||{},s.config.iceServers=s.config.iceServers||[],s.config.iceServers.push({urls:e,username:n,credential:o})},t.forceUseRelayServer=e=>{s.config=s.config||{},s.config.iceTransportPolicy=e?"relay":"all"},t.overrideId=e=>{f=e},t.getCurrentId=()=>r==null?"":r.id||"",t.isReady=()=>b,t.onError=()=>{const e=v;return v=!1,e},t.getLastError=()=>m,t.onDisconnect=()=>c.length>0,t.getDisconnectedPeer=()=>c[0]||"",t.onConnection=()=>l.length>0,t.getConnectedPeer=()=>l[0]||"",t.getAllPeers=()=>Array.from(a.keys()),t.getConnectionInstance=e=>a.get(e),u.callbacksRuntimeScenePostEvents.push(()=>{for(const e of g.values())e.popData();c.length>0&&c.shift(),l.length>0&&l.shift()})})(y=E.p2p||(E.p2p={}))})(S=u.evtTools||(u.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=B_p2ptools.js.map