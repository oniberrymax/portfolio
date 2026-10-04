const projectData={
  web20:{tag:'PRODUCT DESIGN · WEB',title:'WellAtSea Web 2.0',body:'A complete UI direction for a multi-role digital platform. The work focused on clearer information architecture, dashboard hierarchy, navigation, responsive behavior and practical workflows for seafarers and operational users.',role:'UI/UX + Product Design',focus:'Navigation · Dashboards · Workflows',context:'Enterprise web platform'},
  mobile20:{tag:'UI/UX · MOBILE',title:'WellAtSea Mobile 2.0',body:'A mobile experience designed around everyday wellness actions. The interface prioritizes quick comprehension, clear journeys and a visual system that can scale across multiple product modules.',role:'UI/UX Design',focus:'Mobile UI · User journeys',context:'Wellness mobile app'},
  connect:{tag:'APP DESIGN · UX',title:'WellAtSea Connect',body:'WellAtSea Connect was designed as a standalone Android application to complement the WellAtSea mobile app by enabling automated health and activity data synchronization from supported wearable devices and pedometers. The app integrates with Google Fit, Fitbit, and Samsung Health through Health Connect, allowing users to sync key activity metrics, including daily step counts, average heart rate, and distance traveled, with minimal manual input.',role:'Product UI/UX',focus:'Mobile navigation · Engagement',context:'Internal + seafarer-facing app'},
  helpdesk:{tag:'PLATFORM · AUTOMATION',title:'WellAtSea Helpdesk',body:'An internal support experience built with Microsoft SharePoint and extended with automated status notifications and reporting. The project connected service workflows, self-service information and operational visibility.',role:'Developer / UI UX Designer',focus:'Workflows · Automation · Reporting',context:'Internal operations platform'}
};
const modal=document.getElementById('projectModal');
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.project').forEach(card=>card.addEventListener('click',()=>{const d=projectData[card.dataset.project];if(!d)return;document.getElementById('modalTag').textContent=d.tag;document.getElementById('modalTitle').textContent=d.title;document.getElementById('modalBody').textContent=d.body;document.getElementById('modalRole').textContent=d.role;document.getElementById('modalFocus').textContent=d.focus;document.getElementById('modalContext').textContent=d.context;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
document.querySelector('.modal-close').addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toggle=document.getElementById('themeToggle');toggle.addEventListener('click',()=>{document.body.classList.toggle('light');toggle.textContent=document.body.classList.contains('light')?'●':'◐'});
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const navLinks=document.getElementById('navLinks');
if(navLinks){navLinks.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{if(window.jQuery)jQuery(navLinks).collapse('hide')}));}

$('#videoModal').on('show.bs.modal', function (event) {
    const card = $(event.relatedTarget);
    const videoUrl = card.data('video');

    $('#videoFrame').attr('src', videoUrl + '?autoplay=1');
});

$('#videoModal').on('hidden.bs.modal', function () {
    $('#videoFrame').attr('src', '');
});