
const getAuthorizationHeader = (req) => req.get('Authorization');

const getBearerToken = (req) => {
  const authorization = this.getAuthorizationHeader(req);
  if (authorization !== undefined) {
    const token = authorization.split(' ');
    if (token[0] === 'Bearer') {
      return token[1];
    }
    return null;
  }
  return null;
};

exports.getAuthorizationHeader = getAuthorizationHeader;
exports.getBearerToken = getBearerToken;
