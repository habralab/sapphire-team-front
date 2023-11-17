import { io } from 'socket.io-client';

export class WSBase {
  private domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  protected socket(path: string) {
    const url: string = import.meta.env.DEV
      ? `/${this.domain}`
      : `${import.meta.env.VITE_WS_BASE_URL}/${this.domain}`;

    const socket = io(url, {
      path: `${import.meta.env.DEV ? '/socket' : ''}/${this.domain}${path}`,
      addTrailingSlash: false,
      transports: ['websocket'],
      autoConnect: false,
      timeout: 2000,
    });

    if (import.meta.env.DEV) {
      socket.on('connect', () => {
        console.log(`[${this.domain}] Connect`);
      });

      socket.on('connect_error', (error) => {
        console.error(`[${this.domain}] Connection error:`, error);
      });

      socket.on('connect_timeout', (timeout) => {
        console.error(`[${this.domain}] Connection timeout:`, timeout);
      });

      socket.on('disconnect', (reason) => {
        console.log(`[${this.domain}] Disconnected from server. Reason:`, reason);
      });
    }

    return socket;
  }
}
