
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#msg1')
const msg2=document.querySelector('#msg2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const searchTerm=search.value
    msg1.textContent='Loading....'
    msg2.textContent=''
    fetch('http://localhost:3000/weather?address='+ searchTerm).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msg1.textContent=data.error
        }
        else{
            msg1.textContent=data.temperature
            msg2.textContent=data.location
            
        }
        
    })
})
  
})