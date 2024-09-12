//REGEX
// [abc]           a b or c
// [^ abc]        any characters except a b and c
// [a-z]               a to z  (lowercase)
// [A-Z]               A-Z     (uppercase)
// [a-zA-Z]            both lowercase and uppercase
// [0-9]             any digit from 0-9

//quantifiers
/* []?        occurs 0 to 1 times
[]+          occurs one or more times
[]*          occurs 0 or more times
[]{n}         occurs n times
[]{n,}          occurs n or more times
[]{y,z}        occurs atleast y times but less than z times*/

//metacharacters
/* \d            [0-9]
\D               [^0-9]
\w               [a-z A-Z 0-9]
\W               [^w]*/

//examples
/*mobile number-start with 0 or 7 and total number of digits should be 10*/

//[0,7][0-9]{9}


//email id   caleb123  @  gmail.  com

//[a-z0-9]+['@'][a-z]+[\.][a-z]{3}

 

