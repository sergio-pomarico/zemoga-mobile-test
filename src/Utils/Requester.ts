import axios, { AxiosInstance, AxiosPromise } from 'axios';

export default class Requester {
  private static instance: Requester;
  private api!: AxiosInstance;

  static getInstance() {
    if (!Requester.instance) {
      Requester.instance = new Requester();
      Requester.instance.api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
      });
    }
    return Requester.instance;
  }

  Get(url: string): AxiosPromise<any> {
    return Requester.instance.api.get(url);
  }
}
