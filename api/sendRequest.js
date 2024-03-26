export const sendRequest = async({baseUrl,pathName,method,body,headers})=>{
    const url = `${baseUrl}/${pathName}`;
    let isLoading = false;
    const config = {
        method: method || 'GET',
        headers
    };
    if(method === 'POST' || method === 'PUT' || method === 'PATCH'){
        config.body = JSON.stringify(body);
    }
    if(method === 'DELETE'){
        config.id = pathName.slice(pathName.indexOf('/'))
    }
    try{
        const data = await fetch(url,config);
        const dataJson = await data.json();
        isLoading = true;
        return{
            isLoading: isLoading,
            data: dataJson
        };
    }
    catch (e) {
        return {
            error: e
        }
    }
}