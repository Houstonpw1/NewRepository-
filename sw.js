const imageMap = {
  'logo-horizontal-421a29e0.png': '/media/logo-horizontal-421a29e0.png',
  'horizontal': '/media/logo-horizontal-421a29e0.png',
  'hero': '/media/hero.jpg',
  'before-after-driveway': '/media/before-after-driveway.png',
  'service-commercial-cleaning': '/media/service-commercial-cleaning.png',
  'service-exterior-building': '/media/service-exterior-building.png',
  'service-drivethru-cleaning': '/media/service-drivethru-cleaning.png',
  'service-patio-cleaning': '/media/service-patio-cleaning.png',
  'before-after-house-washing': '/media/before-after-house-washing.png'
};

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  for (const [key, fallbackPath] of Object.entries(imageMap)) {
    if (url.includes(key) && !url.includes('/media/')) {
      event.respondWith(fetch(fallbackPath));
      return;
   }
  }
});

