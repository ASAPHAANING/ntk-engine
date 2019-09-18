import UserDTO from '../interfaces/user.dto';
import NTKSocket from '../ntk-socket';

interface NTKState {
	current: string;
	next?: string;
}

export default class NTKClient {
	username_hash: string;
	socket: NTKSocket;
	session_socket: NTKSocket;
	state: NTKState;

	constructor() {
		this.socket = new NTKSocket();
		this.session_socket = new NTKSocket();
		this.state = { current: 'initial' };
	}
	init() {
		this.socket.init();

		this.socket.on('connected', () => {
			this.state.current = 'connected';
			console.log('Socket connected. State: ' + this.state.current);
		});
	}
}
