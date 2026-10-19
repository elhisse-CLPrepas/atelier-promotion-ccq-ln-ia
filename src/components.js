export const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const section = (id, label, title, body) => `<section id="${id}" class="section"><div class="section-heading"><p class="eyebrow">${label}</p><h2>${title}</h2></div>${body}</section>`;
