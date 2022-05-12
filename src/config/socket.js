import { io } from 'socket.io-client';
import { baseUrl } from '../api/index';
const socketUrl =  process.env.SOCKET_URL || "https://phantom-be-staging.herokuapp.com/" ;
const socket = io(socketUrl, {
  cors: true
});

export default socket;