export interface IResourceProvider {
  getQuillScript: () => Promise<string>;
  getQuillStyleSheet: () => Promise<string>;
}
