import { IResourceProvider } from '../IResourceProvider';
import { cdnProviderRegistry } from './CdnProviderRegistry/index';

export class OnlineResourceProvider implements IResourceProvider {
  public getQuillStyle(): Promise<string> {
    return this._fetchResourceAsText(cdnProviderRegistry.endpoints.stylesheet);
  }

  public async getQuillScript(): Promise<string> {
    return this._fetchResourceAsText(cdnProviderRegistry.endpoints.script);
  }

  private async _fetchResourceAsText(endpoint: string): Promise<string> {
    const response = await fetch(endpoint);
    return response.text();
  }
}
