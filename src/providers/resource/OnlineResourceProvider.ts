import IResourceProvider from './IResourceProvider';

export default class OnlineResourceProvider implements IResourceProvider {
  public getQuillScript: () => Promise<string>;
  public getQuillStyle: () => Promise<string>;
}
