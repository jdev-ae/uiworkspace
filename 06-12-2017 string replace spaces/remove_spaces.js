/**
 * Created by SuRu on 06/13/2017.
 */
var data = "This Is Sample Data";
var op = "";
for (var i = 0; i < data.length; i++) {
    if (data[i] === ' ')
        continue;
    op += data[i];
}
console.log(op);
