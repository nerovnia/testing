/**
 * Strip HTML From Text
 * @param {*} html 
 * @returns 
 */

const stripHTML = html => (new window.DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

console.log(stripHTML('<ul><li>jdsfhgjsdhfs</li></ul>'));