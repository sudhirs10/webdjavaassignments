const target = document.getElementById('target');

const userAgent = navigator.userAgent;

let browserName = 'Unknown';
let browserVersion = 'Unknown';

if (userAgent.includes('Edg/')) {
  browserName = 'Microsoft Edge';
  browserVersion = userAgent.split('Edg/')[1].split('.')[0];
} else if (userAgent.includes('Chrome/')) {
  browserName = 'Google Chrome';
  browserVersion = userAgent.split('Chrome/')[1].split('.')[0];
} else if (userAgent.includes('Firefox/')) {
  browserName = 'Mozilla Firefox';
  browserVersion = userAgent.split('Firefox/')[1].split('.')[0];
}

let operatingSystem = 'Unknown';

if (userAgent.includes('Windows')) {
  operatingSystem = 'Windows';
} else if (userAgent.includes('Mac')) {
  operatingSystem = 'macOS';
} else if (userAgent.includes('Linux')) {
  operatingSystem = 'Linux';
}

const now = new Date();

const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browserName}, ${browserVersion}</p>
  <p>Operating system: ${operatingSystem}</p>
  <p>Screen size: ${screen.width}px x ${screen.height}px</p>
  <p>Available screen space: ${screen.availWidth}px x ${screen.availHeight}px</p>
  <p>Browser window: ${window.innerWidth}px x ${window.innerHeight}px</p>
  <p>Date: ${date}</p>
  <p>Time: ${time}</p>
`;
