# middy-boilerplate
This is a minimal middy (framework) boilerplate for developing and deploying serverless nodejs application on aws lambda
## Guide for local development
1. Install AWS SAM CLI
2. `cd` to the project directory
3. Create a file: `touch template.yml`. Find the content of the file below.
4. Open **Docker Desktop** application
5. Enter the command `sam build`
6. Then enter `sam local start-api  --warm-containers EAGER --template ./template.yml --host 0.0.0.0 --port 4001`
7. You're all set. Note that some `sam` command can take a bit longer time to process

## template.yml
```
AWSTemplateFormatVersion: '2010-09-09'
Transform: 'AWS::Serverless-2016-10-31'
Description: My Lambda Function
 
Resources:
  MyLambdaFunction:
    Type: 'AWS::Serverless::Function'
    Properties:
      Handler: src/index.handler
      Runtime: nodejs18.x
      Timeout: 60
      CodeUri: .
      FunctionName: myLambdaFunction
      Events:
        GetApi:
          Type: Api
          Properties:
            Path: /{proxy+}
            Method: get
 
        PostApi:
          Type: Api
          Properties:
            Path: /{proxy+}
            Method: post
 
        PutApi:
          Type: Api
          Properties:
            Path: /{proxy+}
            Method: put
```