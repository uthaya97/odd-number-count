var arr=[10,13,20,25,40,73,60,19,33,80];
document.write("given number"+" "+arr+"<br>"+"<br>");
var count=0;
for(let i=0;i<arr.length;i++)
		{
		if(arr[i]%2!=0)
		{
		count++;
		}
		}
		document.write(count);