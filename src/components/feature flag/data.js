const dummyApi = {
    showPopUp : true,
    showGithub : false,
    showQrGenerator : true,
}

function flagsServiceCall(){
    return new Promise((resolve, reject) => {
        if(dummyApi) setTimeout(resolve(dummyApi), 500 )
        else reject("error message")
    })
}

export default flagsServiceCall