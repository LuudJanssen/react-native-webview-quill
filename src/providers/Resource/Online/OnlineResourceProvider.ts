import { QuillTheme } from '../../../components/Quill/interfaces/QuillTheme';
import { IResourceProvider } from '../IResourceProvider';
import { cdnProviderRegistry } from './CdnProviderRegistry/index';

export class OnlineResourceProvider implements IResourceProvider {
  public async getQuillScript(): Promise<string> {
    return this.fetchResourceAsText(cdnProviderRegistry.endpoints.script);
  }

  public async getQuillStyleSheet(theme: QuillTheme): Promise<string> {
    switch (theme) {
      case QuillTheme.BUBBLE:
        return this.fetchResourceAsText(cdnProviderRegistry.endpoints.bubbleThemeStyleSheet);
      case QuillTheme.SNOW:
        return this.fetchResourceAsText(cdnProviderRegistry.endpoints.snowThemeStyleSheet);
      default:
        return this.fetchResourceAsText(cdnProviderRegistry.endpoints.coreThemeStyleSheet);
    }
  }

  private async fetchResourceAsText(endpoint: string): Promise<string> {
    const response = await fetch(endpoint);
    return response.text();
  }
}
