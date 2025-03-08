const userInfo = {
    UserName: 'Raihan',
    userGpa:{
        ssc: 'A+',
        hsc: 'A',
        passingYear:{
            yearSsc: 2021,
        }
    } 
}

const result = userInfo.userGpa.passingYear?.result?.hsc;
// console.log(result);

