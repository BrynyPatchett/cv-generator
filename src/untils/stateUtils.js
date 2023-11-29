
/* Takes an array of Credential and and id eleent and creates a new Credential with the newest ID */
export function addNewCredential(elementCount,setElementCount,credentials,setCredentials){

    setCredentials([...credentials,{id:elementCount}]);
    setElementCount(elementCount+1);

}

