interface State {
  objectId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __type: string;
  className: string;
}

export interface Capital {
  objectId: string;
  state: State;
  capital: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResponseApiCapitals {
  results: Capital[];
}
