/**
 * Created by SuRu on 06/13/2017.
 */

let data: string = "This Is Sample Data";
let op: string = "";

for (let i: number = 0; i < data.length; i++) {
    if (data[i] === ' ') continue;
    op += data[i];
}

console.log(op);
