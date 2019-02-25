import { cloudflare } from '../endpoints/cloudflare';
import { ICdnEndpoints } from '../endpoints/ICdnEndpoints';

export class CdnProviderRegistry {
  get endpoints(): ICdnEndpoints {
    return this._endpoints;
  }

  set endpoints(endpoints: ICdnEndpoints) {
    this._endpoints = endpoints;
  }

  private _endpoints: ICdnEndpoints = cloudflare;
}
