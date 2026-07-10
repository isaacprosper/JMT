document.addEventListener('DOMContentLoaded', function(){
  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // process line draw (services page)
  const procLine = document.getElementById('proc-line');
  const procSection = document.getElementById('process');
  if(procLine && procSection){
    const lineIo = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          procLine.style.transition = 'stroke-dashoffset 1.4s ease';
          procLine.style.strokeDashoffset = '0';
          lineIo.unobserve(e.target);
        }
      });
    },{threshold:0.3});
    lineIo.observe(procSection);
  }

  // contact form -> mailto (static site, no backend)
  const form = document.getElementById('leadForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      const subject = encodeURIComponent('Site survey request — ' + service);
      const body = encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\nService: ' + service + '\nMessage: ' + message);
      window.location.href = 'mailto:YOUREMAIL@example.com?subject=' + subject + '&body=' + body;
    });
  }
});
