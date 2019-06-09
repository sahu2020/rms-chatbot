import * as io from 'socket.io-client';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

export class ChatService {
  private url = 'http://localhost:3000';
  private socket;
  isWatsonResponded = false;

  constructor() {
      this.socket = io(this.url);
  }
  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  public sendMessage(message) {
      this.socket.emit('new-message', message);
  }

  changeMessage(message: string) {
    this.messageSource.next(this.isWatsonResponded);
  }

  public getMessages = () => {
      return Observable.create((observer) => {
          this.socket.on('new-message', (message) => {
            this.isWatsonResponded = true;
            console.log(message,'new message event');
              observer.next(message);
          });
      });
  }
}