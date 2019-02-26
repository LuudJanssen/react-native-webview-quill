import { IResourceProvider } from '../IResourceProvider';
import { cdnProviderRegistry } from './CdnProviderRegistry/index';

export class OnlineResourceProvider implements IResourceProvider {
  public getQuillStyleSheet(): Promise<string> {
    return this.fetchResourceAsText(cdnProviderRegistry.endpoints.styleSheet);
  }

  public async getQuillScript(): Promise<string> {
    return this.fetchResourceAsText(cdnProviderRegistry.endpoints.script);
  }

  private async fetchResourceAsText(endpoint: string): Promise<string> {
    const response = await fetch(endpoint);
    return response.text();
  }
}
