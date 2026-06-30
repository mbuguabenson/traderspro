import brandConfig from '@/../brand.config.json';
import { localize } from '@deriv-com/translations';

export type TSidebarItem = {
    label: string;
    content: { data: string; faq_id?: string }[];
    link: boolean;
};

export const SIDEBAR_INTRO = (): TSidebarItem[] => [
    {
        label: localize('Welcome to {{platform_name}}!', { platform_name: brandConfig.platform.name }),
        content: [
            {
                data: localize(
                    'Ready to automate your trading strategy without writing any code? You’ve come to the right place.'
                ),
            },
            { data: localize('Check out these guides and FAQs to learn more about building your bot:') },
        ],
        link: false,
    },
    {
        label: localize('Guide'),
        content: [{ data: localize('{{platform_name}} - your automated trading partner', { platform_name: brandConfig.platform.name }) }],
        link: true,
    },
    {
        label: localize('FAQs'),
        content: [
            {
                data: localize('What is {{platform_name}}?', { platform_name: brandConfig.platform.name }),
                faq_id: 'faq-0',
            },
            {
                data: localize('Where do I find the blocks I need?'),
                faq_id: 'faq-1',
            },
            {
                data: localize('How do I remove blocks from the workspace?'),
                faq_id: 'faq-2',
            },
        ],
        link: true,
    },
];
