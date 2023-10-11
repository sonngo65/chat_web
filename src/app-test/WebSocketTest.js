// import { useEffect, useState } from 'react';
// import Stomp from "webstomp-client";
// import SockJS from 'sockjs-client';

// export default function WebSocketTest(){
//     const relativeWsConnectUrl = '/ws/connect';
//   const WsConnectUrl = `http://localhost:9090${relativeWsConnectUrl}`;
//   const destinationUrl = '/ws/simple-cat-box'

//   const [stompClient, setStompClient] = useState(null);
//   const [messageHistory, setMessageHistory] = useState([]);
//   const [subscriptionRef, setSubscriptionRef] = useState(null);
//   const [userText, setUserText] = useState('');


//   useEffect(() => {
//     const stompClient = Stomp.over(SockJS(WsConnectUrl));
//     stompClient.connect({},
//       () => {
//         setStompClient(stompClient);
//       }
//     )
//   }, [])


//   const onMessageReceived = (newState) => {
//     console.log(newState);
//     setMessageHistory(previousState => [...previousState, newState.body])
//     setUserText('')
//   };

//   const onClickJoinChat = () => {
//     const subRef = stompClient.subscribe(destinationUrl, onMessageReceived)
//     setSubscriptionRef(subRef)
//   };
//   const onChangeUserText = ({ target: { value } }) => (setUserText(value))
//   const onKeyDownUserText = ({ keyCode }) => {
//     if ( keyCode === 13) { // Enter
//       sendMessage()
//     }
//   }
//   const sendMessage = () => {
//     let message = {text:userText,user:true};
//     message = JSON.stringify(message);
//     stompClient.send(destinationUrl,message)
//   }
//   console.log(messageHistory);
//   return (
//     <div>
//       <h1>Simple chat box</h1>

//       <div>
//         Websocket Connection: <b>{stompClient == null ? 'No Ready' : 'Ready'}</b><br />
//         Client Connected: <b>{stompClient?.connected == null ? 'No' : 'Yes'}</b><br />
//       </div>

//       <div>
//         {subscriptionRef == null
//           ? <button disabled={stompClient === null}
//             onClick={onClickJoinChat}>
//             Join Chat
//           </button>
//           : ''
//         }
//       </div>
//       <div>
//         <pre>{JSON.stringify(messageHistory, null, '  ')}</pre>
//         <div>
//           <input placeholder="Enter your message"
//             type="text"
//             value={userText}
//             onChange={onChangeUserText}
//             onKeyDown={onKeyDownUserText} />
//         </div>
//       </div>
//     </div>
//   )
// }