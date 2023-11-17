import { WSBase } from './base';

class WSNotifications extends WSBase {
  constructor() {
    super('notifications');
  }

  get notifications() {
    const socket = this.socket('/api/ws/notifications');
    return socket;
  }
}

export const wsNotifications = new WSNotifications();
