import { addDecorator, addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@StaticMage/css/styles-m.css';
import '@StaticMage/css/styles-l.css';
import './base.css';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'responsive',
    },
    paddings: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px', default: true },
        { name: 'Large', value: '64px' },
    ],
    a11y: {
        element: '#root',
        config: {
            rules: [
                { id: 'color-contrast', enabled: false }
            ]
        }
    },
});

addDecorator(withHTML);
addDecorator(withA11y);
