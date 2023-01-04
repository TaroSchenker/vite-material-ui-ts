export async function fetchBusinessNames(prompt: any){
    console.log('trigger')

    try{ 
        const promptReq = {prompt}
        console.log("fetchin",prompt)
        const response = await fetch("http://localhost:5000/OpenAi", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(promptReq),
          })
          const data = await response.json()
          console.log(data)
          return data
    }catch(e){
        console.log(e)
    }
}
