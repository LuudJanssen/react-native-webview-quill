export default interface IResourceProvider {
  getQuillScript: () => Promise<string>;
  getQuillStyle: () => Promise<string>;
}
