document.getElementById('problemForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = {
      title: formData.get('title'),
      urgency: formData.get('urgency'),
      scope: formData.get('scope'),
      description: formData.get('description')
    };
  
    console.log("Problem Submitted:", data);
    alert("Your problem has been submitted! 🚀");
  
    this.reset(); 
  });