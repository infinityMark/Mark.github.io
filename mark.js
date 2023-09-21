let Arry_mark=[1,2,3,4,5,6,7]
let read = 200
let writing = 250
let listening = 300
let SBA = 75
let speaking = 75
for(let i = 0;i<=Arry_mark.length;i++){
    for(let x = 0;x<=Arry_mark.length;x++){
        for(let z = 0;z<=Arry_mark.length;z++){
            for(let y = 0;y<=Arry_mark.length;y++){
                for(let u = 0;u<=Arry_mark.length;u++){
                    if(read*Arry_mark[i]+writing*Arry_mark[x]+listening*Arry_mark[z]+SBA*Arry_mark[y]+speaking*Arry_mark[u]>3000 && read*Arry_mark[i]+writing*Arry_mark[x]+listening*Arry_mark[z]+SBA*Arry_mark[y]+speaking*Arry_mark[u]<5000 && 
                        listening*Arry_mark[z]<1200 && read*Arry_mark[i]<1200 && writing*Arry_mark[x]<1500 && speaking*Arry_mark[y]<450 && SBA*Arry_mark[u]<375){
                        let work_Arry = []
                        work_Arry.push(Arry_mark[i],Arry_mark[x],Arry_mark[z],Arry_mark[y],Arry_mark[u])
                        document.write(work_Arry)
                        document.write("<br>")
                    }
                }
            }
        }
    }
}
