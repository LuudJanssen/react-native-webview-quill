import { cloudflare } from '../endpoints/cloudflare';
import { ICdnEndpoints } from '../endpoints/ICdnEndpoints';

export class CdnProviderRegistry {
  public endpoints: ICdnEndpoints = cloudflare;
}
