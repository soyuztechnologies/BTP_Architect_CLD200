# Getting Started

Welcome to your new project.

Steps :
Follow documentation 
https://api.sap.com/api/OP_API_SALES_ORDER_SRV_0001/cloud-sdk/JavaScript

TRANSPILE is VERY IMPORANT
npx generate-odata-client --transpile --input resources/service-specs --outputDir src/generated

Copy src folder inside srv so packaging can be done

cf create-service xsuaa application myxsuaa
cf create-service-key myxsuaa myxsuaa-key 
cds bind --to myxsuaa:myxsuaa-key
cds run --profile hybrid

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
