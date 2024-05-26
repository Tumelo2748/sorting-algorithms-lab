// # sorting-algorithms-lab

// ## Check whether two Strings are anagram of each other

// ### Given two strings. The task is to check whether the given strings are anagrams of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.

// #### Note: You should use the .sort() method in this excercise. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ### Examples:

// #### Input: str1 = “listen”  str2 = “silent”
// #### Output: “Anagram”
// #### Explanation: All characters of “listen” and “silent” are the same.

// #### Input: str1 = “gram”  str2 = “arm”
// #### Output: “Not Anagram”

function areAnagrams(string1, string2) {
    // Remove spaces and convert to lowercase
    string1 = string1.replace(/\s/g, '').toLowerCase();
    string2 = string2.replace(/\s/g, '').toLowerCase();
  
    // Convert strings to arrays of characters
    const charArray1 = string1.split('');
    const charArray2 = string2.split('');
  
    // Sort the character arrays
    charArray1.sort();
    charArray2.sort();
  
    // Compare the sorted arrays
    if (charArray1.join('') === charArray2.join('')) {
      return "Anagram";
    } else {
      return "Not Anagram";
    }
  }
  
  console.log(areAnagrams("listen", "silent"));
  console.log(areAnagrams("“gram”", "arm"));
  