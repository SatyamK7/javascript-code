const coding = ["java","python","javascript","php","C++"];

coding.forEach(function (item) {
    // console.log(item);   
});

coding.forEach((item) => {
    // console.log(item);
});

coding.forEach( (item,index) => {
    // console.log(item,index);
} )

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe);
//------------------------------------------------------------------
// MUCH IMPORTANT****************************************
const myCoding = [
    {
        langName: "java",
        langFile: "jdk"
    },

    {
        langName: "python",
        langFile: "cobra"
    },

    {
        langName: "javascript",
        langFile: "basics"
    },
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )