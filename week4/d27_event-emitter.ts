type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: Record<string, Callback[]>;

  constructor() {
    this.events = {};
  }

  subscribe(event: string, cb: Callback): Subscription {
    this.events[event] = this.events[event] ?? [];
    this.events[event].push(cb);

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].filter((f) => f !== cb);
        if (this.events[event].length === 0) {
          delete this.events[event];
        }
      },
    };
  }

  emit(event: string, args: any[] = []): any[] {
    if (!(event in this.events)) {
      return [];
    }
    return this.events[event].map((f) => f(...args));
  }
}
