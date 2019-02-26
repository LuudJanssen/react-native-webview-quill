export enum EventType {
  CONTENT_CHANGE,
}

export interface IMessage {
  type: EventType;
  data: any;
}
