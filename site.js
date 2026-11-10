(function(){
  const details = window.portfolioContact || {};
  const slots = document.querySelectorAll('[data-contact-links]');
  for (const slot of slots) {
    const links=[];
    if(details.email){const a=document.createElement('a');a.href='mailto:'+details.email;a.textContent='Email';links.push(a);}
    if(details.linkedin && /^https:\/\//.test(details.linkedin)){const a=document.createElement('a');a.href=details.linkedin;a.target='_blank';a.rel='noopener noreferrer';a.textContent='LinkedIn';links.push(a);}
    if(details.resume){const a=document.createElement('a');a.href=(document.body.dataset.depth==='1'?'../':'')+details.resume;a.textContent='Résumé (PDF)';links.push(a);}
    if(links.length){slot.hidden=false;links.forEach(a=>slot.appendChild(a));}
  }
})();
