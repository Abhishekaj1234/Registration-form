const form = document.getElementById('registration-form');
    const cardContainer = document.getElementById('card-container');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      createCard();
      form.reset();
    });

    function createCard() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const website = document.getElementById('website').value;
      const image = document.getElementById('image').value;
      const gender = document.getElementById('gender').value;


      const skills = getSelectedSkills();

      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
      <div>
        <p class="same2"></p>
        <div class="as">
        <div class="main2">
          <span class="same3"></span>
          <span class="main2-value">${name}</span>
        </div>
        <div class="main2">
          <span class="same3"></span>
          <span class="main2-value">${gender}</span>
    
        <div class="main2">
          <span class="same3"></span>
          <span class="main2-value">${email}</span>
        </div>
   
        <div class="main2">
          <span class="same3"></span>
          <span class="main2-value">${website}</span>
        </div>
        <div class="main2">
        <span class="same3"></span>
        <span class="main2-value">${skills.join(', ')}</span>
      </div>
        </div>
        <div class="main2">
          <span class="same3"></span>
          <img src="${image}" alt="Student Image" class="card-image a1">
        </div>
       
        </div>
      `;

      cardContainer.appendChild(card);
    }

    function getSelectedSkills() {
      const skills = document.getElementsByName('skills');
      const selectedSkills = [];

      skills.forEach(skill => {
        if (skill.checked) {
          selectedSkills.push(skill.value);
        }
      });

      return selectedSkills;
    }