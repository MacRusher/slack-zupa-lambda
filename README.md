# AWS Lambda function for Slack `/zupa` command

This command will show today's menu from "Gar Zupy" restaurant. Probably useless for you :)

Check source code and package.json scripts for build and lambda deployment process.

Lambda handler in AWS must be `dist/lambda.default` and API Gateway mapping must parse form data to json as `body`.