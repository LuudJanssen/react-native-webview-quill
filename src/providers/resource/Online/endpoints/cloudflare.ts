import { ICdnEndpoints } from './ICdnEndpoints';

export const cloudflare: ICdnEndpoints = {
  bubbleThemeStyleSheet: __DEV__
    ? 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.bubble.css'
    : 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.bubble.min.css',
  coreThemeStyleSheet: __DEV__
    ? 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.core.css'
    : 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.core.min.css',
  script: __DEV__
    ? 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.js'
    : 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.min.js',
  snowThemeStyleSheet: __DEV__
    ? 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.snow.css'
    : 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.snow.min.css',
};
