import { Signal, computed, signal } from "@angular/core";

export class StorageService<T> {
  readonly state = signal({} as T);

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  public set<K extends keyof T>(key: K, data: T[K]) {
    this.state.update((current) => ({ ...current, [key]: data }));
  }

  public setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }
}