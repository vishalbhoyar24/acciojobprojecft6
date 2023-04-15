let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(x){
        if(x.profession === "developer"){
            console.log(x);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((y)=>{
        if(y.profession === "developer"){
            console.log(y);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj1 = {
        id : 4,
        name : "chetana",
        age : 23,
        profession : "intern"
    }
    arr.push(obj1);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let solution = arr.filter((x)=>{
        if(x.profession !== "admin"){
            return x;
        }
    });
    console.log(solution);
  }

  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 5, name: "jay", age: "16", profession: "developer" },
        { id: 6, name: "nikil", age: "12", profession: "engineer" },
        { id: 7, name: "bablu", age: "55", profession: "writer" },
      ];
      let ans = arr.concat(newArr);
      console.log(ans);
  }