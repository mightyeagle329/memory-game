import BG from '../assets/imgs/BG.png';

export function getBackgroundColor(route) {
    const green = ['/', '/instruction', '/win', '/thank-you', '/stack-up'];
    const white = ['/game', '/collect-data'];

    if (green.includes(route)) return '#107C10';
    else if (white.includes(route)) return '#F5F5F5';
}

export function getTextColor(route) {
    const white = ['/', '/instruction'];
    const green = ['/game', '/collect-data'];

    if (green.includes(route)) return '#107C10';
    else if (white.includes(route)) return '#F5F5F5';
}

export function getBackground(route) {
    const routes = ['/win', '/thank-you', '/stack-up'];

    if (routes.includes(route)) return BG;
}

export function visibleHeader(route) {
    const routes = ['/win', '/thank-you', '/stack-up'];

    if (routes.includes(route)) return 'none';
    else return 'flex';
}