self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[SW] Ativado');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Deixa o navegador lidar com as requisições normalmente
});
