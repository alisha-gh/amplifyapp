export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "amplifyapp": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "amplifyapp": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "amplifystorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "amplifyapp": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}