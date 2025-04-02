const API_KEY ="AIzaSyB5fe95X2PvG3az9vOTMAESIcaMJe6CXAA";
const API_URL =`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;



const btn = document.getElementById("btn");
const p = document.getElementById("wynik");
let promp = "";

btn.addEventListener('click',()=>{
    const z = document.getElementById("z").value;
    const d = document.getElementById("do").value;
    const ilosc = document.getElementById("ilosc").value;
    promp=`zamien ${ilosc} ${z} na ${d} podaj jedynie wynik w notacji wykładniczej`;
    generateBotResponse(promp);
})



const generateBotResponse = async (promp) =>{
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: promp
                }]
            }]
        })
    }

    try{
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);

        console.log(data.candidates[0].content.parts[0].text.trim());
        p.innerHTML=data.candidates[0].content.parts[0].text.trim()
    }catch(error){
        console.log(error);
    }
}