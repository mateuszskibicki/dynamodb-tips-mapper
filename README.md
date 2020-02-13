How to run dynamodb locally:
export DYNAMO_ENDPOINT=http://localhost:8001
dynamodb-admin --port 8002
It runs on http://localhost:8002 so you can go there in your browser

npm install --save serverless-dynamodb-local
sls dynamodb install
sls offline start