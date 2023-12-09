import { Injectable} from '@angular/core';
import { StorageService } from './store.service';

export interface AppState {
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService extends StorageService<AppState> {
  constructor() {
    super();
    this.setState({ count: 0});
  }  
}
