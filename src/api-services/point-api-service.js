import PointAdapter from '../adapters/point-adapter.js';
import { Method, ServerPaths } from '../const.js';
import ApiService from '../framework/api-service.js';

export default class PointApiService extends ApiService {
  get points() {
    return this._load({url: ServerPaths.POINTS})
      .then(ApiService.parseResponse);
  }

  get destinations() {
    return this._load({url: ServerPaths.DESTINATIONS})
      .then(ApiService.parseResponse);
  }

  get offers() {
    return this._load({url: ServerPaths.OFFERS})
      .then(ApiService.parseResponse);
  }

  async updatePoint(point) {
    const response = await this._load({
      url: `${ServerPaths.POINTS}/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(PointAdapter.adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async addPoint(point) {
    const response = await this._load({
      url: ServerPaths.POINTS,
      method: Method.POST,
      body: JSON.stringify(PointAdapter.adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async deletePoint(point) {
    const response = await this._load({
      url: `${ServerPaths.POINTS}/${point.id}`,
      method: Method.DELETE,
    });

    return response;
  }
}
