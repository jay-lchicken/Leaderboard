const _0x597f41=_0x49b9;(function(_0x1659d8,_0x379e3f){const _0x178304=_0x49b9,_0x28f472=_0x1659d8();while(!![]){try{const _0x1b0eb0=parseInt(_0x178304(0xcc))/0x1*(-parseInt(_0x178304(0xd9))/0x2)+-parseInt(_0x178304(0xc9))/0x3+-parseInt(_0x178304(0xd6))/0x4*(parseInt(_0x178304(0xc6))/0x5)+parseInt(_0x178304(0xcd))/0x6*(parseInt(_0x178304(0xdb))/0x7)+-parseInt(_0x178304(0xc2))/0x8*(parseInt(_0x178304(0xcb))/0x9)+-parseInt(_0x178304(0xc5))/0xa+-parseInt(_0x178304(0xda))/0xb*(-parseInt(_0x178304(0xc7))/0xc);if(_0x1b0eb0===_0x379e3f)break;else _0x28f472['push'](_0x28f472['shift']());}catch(_0x217094){_0x28f472['push'](_0x28f472['shift']());}}}(_0x5386,0x34cbc));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{GoogleAuthProvider,getAuth,signInWithEmailAndPassword,fetchSignInMethodsForEmail,onAuthStateChanged,signOut,sendPasswordResetEmail,signInWithPopup,OAuthProvider}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';import{getFirestore,doc,setDoc,getDoc,collection,getDocs}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';function _0x5386(){const _0x50e880=['\x0a\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Username</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Score</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>','4dpjDre','638jUbmLm','72604aNaNGF','leaderboard','users','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>','603944mYfyIf','630588276904','getElementById','199700YijEoZ','45415rTWczg','65328LXLgNs','math-quiz-9f398.firebasestorage.app','10602qdAHFp','innerHTML','27AZArgs','96541bHWutc','204aUySMx','AIzaSyD6su1cHYsxq2GXzwtJTFeTaR98gZtluK4','math-quiz-9f398','1:630588276904:web:f59d3ace021a85122d829d','data','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','Leaderboard\x20is\x20loading,\x20please\x20wait\x20a\x20moment','G-DT1EDQRP12','math-quiz-9f398.firebaseapp.com','4WtSjTP','log'];_0x5386=function(){return _0x50e880;};return _0x5386();}function _0x49b9(_0x216c54,_0x187004){const _0x538682=_0x5386();return _0x49b9=function(_0x49b933,_0x5c3409){_0x49b933=_0x49b933-0xc2;let _0x17a9de=_0x538682[_0x49b933];return _0x17a9de;},_0x49b9(_0x216c54,_0x187004);}const firebaseConfig={'apiKey':_0x597f41(0xce),'authDomain':_0x597f41(0xd5),'projectId':_0x597f41(0xcf),'storageBucket':_0x597f41(0xc8),'messagingSenderId':_0x597f41(0xc3),'appId':_0x597f41(0xd0),'measurementId':_0x597f41(0xd4)},app=initializeApp(firebaseConfig);alert(_0x597f41(0xd3));const db=getFirestore(app);async function loadLeaderboard(){const _0x1c8dad=_0x597f41,_0x1aa16f=collection(db,_0x1c8dad(0xdd)),_0x34818a=await getDocs(_0x1aa16f);document['getElementById'](_0x1c8dad(0xdc))[_0x1c8dad(0xca)]='',document[_0x1c8dad(0xc4)]('leaderboard')[_0x1c8dad(0xca)]+=_0x1c8dad(0xd8),_0x34818a['forEach'](_0x508c89=>{const _0x5c71dd=_0x1c8dad;document[_0x5c71dd(0xc4)]('leaderboard')[_0x5c71dd(0xca)]+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x508c89['id']+_0x5c71dd(0xd2)+_0x508c89[_0x5c71dd(0xd1)]()['score']+'/'+_0x508c89[_0x5c71dd(0xd1)]()['tries']+_0x5c71dd(0xde),console[_0x5c71dd(0xd7)](_0x508c89['id'],'=>',_0x508c89['data']());});}loadLeaderboard();