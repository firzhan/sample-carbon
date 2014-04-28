Introduction
============
This sample demonstrates;

- Using sso to secure a jag file
- Obtaining the roles of the currently logged in user

We will be performing user related operations using the classes found in the carbon module [here](https://github.com/wso2/jaggery-extensions/tree/master/carbon/module/scripts).

For this sample we will be using the UserManager and User classes found under the [scripts/user](https://github.com/wso2/jaggery-extensions/tree/master/carbon/module/scripts/user) directory.

This sample comes with a wrapper class which simplifies working with these classes.Please refer to the carbon-sample/modules/user-mgt.js.

**Note**:In order to simplify the sample we do not consider multitenancy.

Installation
============
Drop the carbon-sample folder into the PRODUCT_HOME/repository/deployment/server/jaggeryapps/ directory.

Navigate to [https://localhost:9443/carbon-sample](https://localhost:9443/carbon-sample)

User 
=====

**Available Methods**

- getClaims
- setClaims
- getRoles
- hasRoles
- addRoles
- removeRoles
- updateRoles
- isAuthorize

The methods most relevant for our goals is the getRoles method.



