
var keys = Object.keys(newUsers());
var dupe = false;

for(var i=0;i<keys.length;i++){
 for(var j=i+1;j<keys.length;j++){
   if(newUsers()[keys[i]] === newUsers()[keys[j]]){
     dupe = true;
     break;
   }
 }
 if(dupe){ console.log("dupe value is there.."); break; }
}