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

1. Configure the port offset of the WSO2 Identity Server by 5
2. Start a WSO2 Identity Server instance
3. Configure a service provider entry in for the service provider 'carbonSample'.More information on this can be obtained from: https://docs.wso2.org/display/IS460/Adding+a+Service+Provider
4. Download and install the WSO2 product that you would like your jaggery app to run inside.We will be using the WSO2 BAM server which is available here: http://wso2.com/products/business-activity-monitor/
5. Open the PRODUCT_HOME/repository/conf/security/authenticator.xml and enable SSO [](https://github.com/splinter/sample-carbon/blob/master/resources/images/authenticator-xml.png)
6. Copy the contents of the resources/jar folder to PRODUCT_HOME/repository/components/dropins directory
7. Copy the contents of the resources/modules directory to PRODUCT_HOME/modules directory
8. Navigate to the management console: [https://localhost:9443/admin](https://localhost:9443/admin) 
9. Drop the carbon-sample folder into the PRODUCT_HOME/repository/deployment/server/jaggeryapps/ directory.

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



