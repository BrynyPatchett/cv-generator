/* Takes an array of Credential and and id eleent and creates a new Credential with the newest ID */
export function addNewCredential(
  elementCount,
  setElementCount,
  credentials,
  setCredentials
) {
  setCredentials([...credentials, { id: elementCount }]);
  setElementCount(elementCount + 1);
}

export function removeCredential(cred, credentials, setCredentials) {
  setCredentials(credentials.filter((elem) => elem.id !== cred.id));
}

export function updateCredential(cred,credentials, setCredentials,value,field){
    setCredentials(credentials.map( (elem) => {
        if(elem.id === cred.id){
            return {...elem,[field]:value};
        }else{
            return elem;
        }
    }))
}