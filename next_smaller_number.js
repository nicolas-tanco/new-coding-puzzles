/* Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits." */

function nextSmaller(n) {
    console.log(n)
    let arr = [...n.toString()]
    let min = arr[arr.length-1]
    
    for(i=arr.length-2;i>=0;i--){
      if(arr[i]<min[0]){
          min=arr[i]
      }else if(arr[i]>min[0]){
        let max =[-1,0]
        for(u=i+1;u<arr.length;u++){
          if(arr[u]>max[0] && arr[u]<arr[i]) max = [arr[u],u]
          if(max[0]==min-1) break
        }
        arr[max[1]]=arr[i]
        arr[i]=max[0]
        let arr1=arr.slice(0,i+1)
        let arr2=arr.slice(i+1).sort((a,b)=>-(a-b))
        if(arr[0]==0) return -1
        return Number(arr1.concat(arr2).join(""))
      }
    }
  
    return -1
  }