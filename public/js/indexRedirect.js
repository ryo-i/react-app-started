const path = sessionStorage.getItem('path');
console.log(path);

if (path && path === '/react-from-meta-lang/other') {
  sessionStorage.removeItem('path');
  window.history.replaceState(null, null, './other');
}