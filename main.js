const tabs = document.querySelectorAll('.tab-header');
const content = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    const tabId = e.target.getAttribute('data-tab');

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');

    content.forEach(content => {
      content.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
  });
});

