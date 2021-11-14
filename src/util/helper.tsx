const arrayGenerator = (num:number, src:String) => {
    const numArray:number[] = Array.from(Array(num).keys()).map(v=>v+1);
    const returnArray:String[] = numArray.map((elem)=> numberToString(src, elem));
    return returnArray;

};

function numberToString(src:String, index:number):String {
    return `${src}/${index.toString()}.png`;
}

export default arrayGenerator;