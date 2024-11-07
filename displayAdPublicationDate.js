// ==UserScript==
// @name        Display ad publication date on Oikotie
// @namespace   Violentmonkey Scripts
// @match       https://asunnot.oikotie.fi/*
// @grant       none
// @version     1.0
// @author      Ville Kaivola
// @description 10/16/2024, 6:43:12 PM
// ==/UserScript==
const createPublishedNode = (dateString) => {
    const dl = document.createElement('dl');
    const dt = document.createElement('dt');
    dt.classList.add('details-grid__item-title');
    dt.innerText = 'Julkaisupäivä';
    dl.appendChild(dt);
    const dd = document.createElement('dd');
    dd.classList.add('details-grid__item-value');
    dd.innerText = dateString;
    dl.appendChild(dd);
    return dl;
}

if (otAsunnot && otAsunnot.hasOwnProperty('analytics')) {
    const published = new Date(otAsunnot.analytics.published);
    const dateString = published.toLocaleDateString("fi-FI", {  year: 'numeric', month: 'numeric', day: 'numeric' })
    document.querySelectorAll('div.details-grid__item-text').forEach((node) => {
        if (node.childNodes.length === 3) {
            node.appendChild(createPublishedNode(dateString));
        }
    })
}