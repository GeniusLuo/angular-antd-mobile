import {trigger, state, style, animate, transition} from '@angular/animations';

// news-bulletins tabs animations
export const animations = [
    trigger('inOut', [
        state('in', style({
            left: 0,
        })),
        state('out', style({
            left: '-100%',
        })),
        transition('in <=> out', [
            animate('.2s')
        ])
    ]),
    trigger('outIn', [
        state('in', style({
            left: 0,
        })),
        state('out', style({
            left: '100%',
        })),
        transition('in <=> out', [
            animate('.2s')
        ])
    ])
];


