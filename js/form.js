document.addEventListener('DOMContentLoaded', function(){
  populateProductSelect('product');

  const form = document.getElementById('reviewForm');

  form.addEventListener('submit', function(e){
    const requiredFields = form.querySelectorAll('[required]');
    let invalid = false;
    requiredFields.forEach(f => {
      if(!f.value){
        invalid = true;
        f.style.outline = '2px solid rgba(192,57,43,0.18)';
        setTimeout(()=> f.style.outline = '', 1800);
      }
    });

  });
});
