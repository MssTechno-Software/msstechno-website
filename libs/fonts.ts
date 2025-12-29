import { Instrument_Sans, Inter_Tight } from 'next/font/google';

export const instrumentSans = Instrument_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-body--family'
});

export const interTight = Inter_Tight({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-heading--family'
});

export const interTightButton = Inter_Tight({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-button--family'
});

export const fonts = [instrumentSans, interTight, interTightButton].map(font => font.variable).join(" ");