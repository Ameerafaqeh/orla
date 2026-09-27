document.querySelectorAll('#mobile-menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobile-menu').classList.remove('open')));
try{
  const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}});},{threshold:0.12});
  document.querySelectorAll('.eyebrow-title, .card, .why-card, .founder-inner, .pf-item, .loc-card').forEach(el=>{el.classList.add('reveal');io.observe(el);});
}catch(e){}