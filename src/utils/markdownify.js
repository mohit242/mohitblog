import marked from 'marked';
import htmlToReact from './htmlToReact';
import 'prismjs/themes/prism-coy.css';

export default function(markdown) {
    if (!markdown) {
        return null;
    }
    return htmlToReact(marked(markdown));
};
