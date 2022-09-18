import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-west-2_CZifNfje6",
    ClientId: "7j1t20tehjthpb1c1dmbfjneh2",
};

export default new CognitoUserPool(poolData);