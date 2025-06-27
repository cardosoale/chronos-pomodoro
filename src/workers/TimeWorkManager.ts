import { TaskStateModel } from '../models/TaskStateModel';

let instance: TimeWorkManager | null;

export class TimeWorkManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timeWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimeWorkManager();
    }
    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
