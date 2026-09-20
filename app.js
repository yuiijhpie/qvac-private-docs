import { Qvac } from '@qvac/sdk';
const qvac = new Qvac();
async function main(){
 await qvac.loadModel({name:"embed"});
 await qvac.loadModel({name:"llm"});
 await qvac.ragIngest({text:"QVAC is private offline AI docs"});
 const r = await qvac.ragSearch({query:"What is QVAC?"});
 console.log(r);
}
main();
