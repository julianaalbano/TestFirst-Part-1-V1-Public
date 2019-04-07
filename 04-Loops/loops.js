function repeat(str, num){
	let repeatedStr = "";
	for (let i = 1; i <= num; i++){
		repeatedStr += str;
	}
	return repeatedStr;
}

function sum(arr){
	if (arr.length === 0){
		return 0;
	}
	else{
		let loopsum = 0;
		for (let i = 0; i <= arr.length-1; i++){
			let curr = arr[i];
			loopsum += curr;
		}
		return loopsum;
	}	
}

function join(arr, delimiter){
	if (arr.length === 0){
		return "";
	}
	if (arr.length === 1){
		return arr.toString();
	}
  if (arguments.length === 2){
    let storage = "";
		for (let i = 0; i < arr.length; i++){
			let currDel = arr[i] + delimiter;
			storage += currDel;
		}
		return storage.toString().slice(0, -1);
  }
	if (arguments.length === 1){
    let storage = "";
    for (let i = 0; i < arr.length; i++){
			storage += arr[i];
		}
		return storage.toString();
  }	
}

function gridGenerator(num){
	if (num === 0){
		return "";
	}
	else{
		let grid = "";
		let row1 = "";
    let row2 = "";
		let hash = "#";
		let space = " ";
		for (let i = 1; i <= num; i++){
			if (i % 2 === 1){
				row1 += hash;
			}
			if (i % 2 === 0){
				row1 += space;
			}
		}
    for (let i = 1; i <= num; i++){
			if (i % 2 === 1){
				row2 += space;
			}
			if (i % 2 === 0){
				row2 += hash;
			}
		}
		for (let i = 1; i <= num; i++){
      if (i % 2 === 1){
        grid += row1 + "\n";
      }
      if (i % 2 === 0){
        grid += row2 + "\n";
  		}
    }
  return grid;
  }
}

function paramify(obj) {
  let arr = [];
  for (let keys in obj) {
    if (obj.hasOwnProperty(keys)) {
      arr.push(keys + '=' + obj[keys])
    }
  }
  return arr.sort().join('&');
}

function paramifyObjectKeys(obj){
  let sortedKeys = Object.keys(obj).sort();
  let string = sortedKeys.map(function(x) {
    return x + '=' + obj[x];
    });
  return string.join('&');
}

function renameFiles(arr){
  let counter = 1;
	for (let i = 0; i < arr.length; i++){
	  let element = arr[i];
    for (let j = i+1; j < arr.length; j++){
      if (element === arr[j]){
      	let newElement = arr[j] + "(" + counter.toString() + ")";
      	let slicedArr = arr.slice(0, j+1);
      	if (slicedArr.includes(newElement)){
      		counter++;
      		arr[j] = arr[j] + "(" + counter.toString() + ")";
      		counter++;
      	}
      	else{
      		arr[j] = arr[j] + "(" + counter.toString() + ")";
	        counter++;
      	} 
      }
    }
    counter = 1;
  }
  return arr;
}