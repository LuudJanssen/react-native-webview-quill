import { ICdnEndpoints } from './ICdnEndpoints';

export const cloudflare: ICdnEndpoints = {
  script: __DEV__
    ? 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.js'
    : 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.min.js',
  styleSheet: __DEV__
    ? 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.core.css'
    : 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.core.min.css',
};
