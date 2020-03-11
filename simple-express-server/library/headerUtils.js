
const getAuthorizationHeader = (req) => {
    return req.get("Authorization");
}

const getBearerToken = (req) => {
    let authorization = getAuthorizationHeader(req);
    if (authorization != undefined){
        let token = authorization.split(' ');
        if (token[0] == "Bearer") {
            return token[1];
        }else{
            return null;
        }
    }else{
        return null;
    }
}

exports.getAuthorizationHeader = getAuthorizationHeader;
exports.getBearerToken = getBearerToken;