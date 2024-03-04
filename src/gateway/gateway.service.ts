import { OnModuleInit } from "@nestjs/common";
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

import { Server, Socket } from 'socket.io';
@WebSocketGateway()
export class MyGateway implements OnModuleInit {
    @WebSocketServer()
    server: Server;

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id);
            console.log('Connected');
        });
    }
    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {
        console.log(body);
        this.server.emit('onMessage',{
            msg: 'New Message',
            content: body,
        });
    }
    }
/* export class MyGateway implements OnGatewayConnection, OnGatewayDisconnect {
    handleConnection(client: Socket, ...args: any[]) {
        console.log('Connecting ',client.id)
    }
    handleDisconnect(client: Socket) {
        console.log('Disconnecting ',client.id)
    }
 */


    


