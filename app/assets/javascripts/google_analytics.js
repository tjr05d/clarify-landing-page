document.addEventListener('turbolinks:load', function(event) {
  console.log("google analytivs load"); 
  if (typeof ga === 'function') {
    ga('set', 'location', event.data.url);
    ga('send', 'pageview');
  }
});
