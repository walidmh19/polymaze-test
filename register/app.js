// add member logic:


const soloInp = document.querySelector('#tsolo')
const teamInp = document.querySelector('#tteam')
const teamContainer = document.querySelector('.teamMembers')
const teamMembersN = document.querySelector('#teamMembersN')


soloInp.addEventListener('input', () => {
   teamContainer.innerHTML = ''
   updateMembers()
   updateNumOfMembers(0)
})

// teamInp.addEventListener('input', ()=>{

// })

function createNewMemberInp(n) {
   let memberContainer = document.createElement('div')
   memberContainer.classList.add('member')

   memberContainer.innerHTML = `
   <div class="memberHeader">
      <h2>Member <span class="memberIndex">${n + 2}</span></h2>
      <button type="button" onclick="deleteMember(this.parentElement.parentElement)"><i class="fa-solid fa-user-minus"></i></button>
   </div>
   <h2>Personal Information</h2>
               <div class="chunk">
                  <div>
                     <label for="m${n + 2}name" class="imp">Full Name</label>
                     <input type="text" name="member${n + 2} full name" id="m${n + 2}name" placeholder="Full Name" required>
                     <label for="m${n + 2}email" class="imp">Email address</label>
                     <input type="email" name="member${n + 2} email" id="m${n + 2}email" placeholder="Email" required>
               
   
                  </div>
                  <div>
                     <label for="m${n + 2}phone" class="imp" >Phone Number</label>
                     <input type="tel" name="member${n + 2} phone" id="m${n + 2}phone" placeholder="Phone Number" required>
                     <div class="smallInps">
                        <div>
                           <label for="m${n + 2}wilaya">Wilaya</label>
                           <input type="text" name="member${n + 2} wilaya" id="m${n + 2}wilaya" placeholder="Wilaya">
                        </div>
            
                        <div>
                           <label for="m${n + 2}bd">Date of birth</label>
                           <input type="text" name="member${n + 2} birthday" id="m${n + 2}bd" placeholder="Date of Birth">
                        </div>
            
                     </div>
                  </div>
               </div>
   

               <h2>Educational Background</h2>
   
               <div class="chunk sndchunk">
                  <div>
                     <label for="m${n + 2}uni" class="imp">University/ School Name</label>
                     <input type="text" name="member${n + 2} uni" id="m${n + 2}uni" placeholder="University / school" required>
   
                  </div>
                  <div>
                     <label for="m${n + 2}yos" class="imp">Year of study</label>
                     <input type="text" name="member${n + 2} year of study" id="m${n + 2}yos" placeholder="Year of Study" required>
   
                  </div>
               </div>
   
   `
   teamContainer.append(memberContainer)
}

function addMember() {

   let teamMembersContainer = document.querySelectorAll('.teamMembers .member')

   let NumOfMembers = teamMembersContainer.length
   console.log(NumOfMembers);
   if (NumOfMembers < 3) {

      createNewMemberInp(NumOfMembers)
      updateNumOfMembers(NumOfMembers + 1)
   }
   updateMembers()
   teamInp.checked = true

}

// addMember()

function deleteMember(p) {
   let teamMembersContainer = document.querySelectorAll('.teamMembers .member')
   let NumOfMembers = teamMembersContainer.length

   p.remove()
   updateNumOfMembers(NumOfMembers - 1)
   console.log(NumOfMembers);
   updateMembers()

   if (NumOfMembers == 1) {
      soloInp.checked = true
   }
}

function updateNumOfMembers(n) {
   teamMembersN.innerHTML = n + 1
}

function updateMembers() {
   let teamMembersContainer = document.querySelectorAll('.teamMembers .member')
   teamMembersContainer.forEach(member => {
      let i = [...teamMembersContainer].indexOf(member) + 2;
      let domI = member.querySelector('.memberIndex').innerHTML
      console.log(member, i, domI);
      if (i != domI) {
         let labels = member.querySelectorAll('label')
         labels.forEach(label => {
            let foratt = label.getAttribute('for')
            label.setAttribute('for', replaceChar(foratt, domI, i))
         })

         let inputs = member.querySelectorAll('input')
         inputs.forEach(input => {
            let id = input.id
            input.id = replaceChar(id, domI, i)

            let name = input.getAttribute('name');
            input.setAttribute('name', replaceChar(name, domI, i))
         })
         member.querySelector('.memberIndex').innerHTML = `${i}`
      }

   })
}

function replaceChar(string, i1, i2) {
   let index = string.indexOf(i1)
   return string.substring(0, index) + i2 + string.substring(index + 1)
}

// console.log(replaceChar('walid1d', 1, 2));




let form = document.querySelector('form');
form.addEventListener("submit", e => {
   
   e.preventDefault();
   fetch(form.action, {
      method: "POST",
      body: new FormData(form),
   }).then(
      response => response.json()
   ).then((html) => {
      const m1nameInp = document.querySelector('input#m1name')
      const m1emailInp = document.querySelector('input#m1email')
      const teamNameInp = document.querySelector('input#teamName')
      let teamMembersContainer = document.querySelectorAll('.teamMembers .member')
      let members = []
      for (let i = 0; i < [...teamMembersContainer].length; i++) {
         members.push(teamMembersContainer[i].querySelector('input[placeholder="Full Name"]').value)
         
      }
      let msgObj = {
      name:m1nameInp.value,
      email:m1emailInp.value,
      teamName:teamNameInp.value,
      teamMembersCount:teamMembersContainer.length,
      teamMembers:members

      }

      let msg = `Hi <strong>${msgObj.email}</strong> aka <strong>${msgObj.name}</strong>, You are receiving this email because you registered in polymaze as <strong>${msgObj.teamName}</strong>

      with <strong>${msgObj.teamMembersCount}</strong> other members : <strong></strong>`
      sendEmail(msg,msgObj.email)
      window.open('../page.html', '_blank');

   }).catch(err => {
      window.open('../error.html', '_blank')
   })
});



// yes/no inputs pop out

const yesnos = document.querySelectorAll('.experiences .chunk > div')
// console.log(yesnos);
yesnos.forEach(c => {
   console.log(c);
   let yes = c.querySelector('input[value="yes"]')
   let no = c.querySelector('input[value="no"]')
   let more = c.querySelector('.moreInfo')
   console.log(more);
   no.addEventListener('input', () => {
      more.style.display = 'none'
      console.log('..');
      more.querySelector('input').required = false
   })

   yes.addEventListener('input', () => {
      more.style.display = 'flex'
      more.querySelector('input').setAttribute('required', '')
   })
})






// Require:
// var postmark = require("postmark");

// Send an email:
// var client = new postmark.ServerClient("954883b8-7421-4afc-bba4-c022df0797bc");

function sendEmail(obj ,email){
   Email.send({
      SecureToken : "f34bb377-0cbf-426f-be81-a3b134b910c1 ",
      
      To : email,
      From : "walid.mahmoudi1248@gmail.com",
      FromName: "POLYMAZE REGESTRATION",

      Subject : "Successfully registrated",
      TemplateName: "C",
      Body : obj
  }).then(
    message => alert(message)
  );

}


