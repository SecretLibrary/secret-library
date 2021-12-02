import AWS from 'aws-sdk'
import dynamoose from 'dynamoose'

const region = 'ap-northeast-2'
const profile = 'default'

const credentials = new AWS.SharedIniFileCredentials({ profile })

AWS.config.update({ region })
AWS.config.credentials = credentials

dynamoose.aws.sdk.config.update({
  region,
  ...credentials
})
