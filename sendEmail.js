// var AWS = require('aws-sdk');
// var ses = new AWS.SES();

import { SESClient } from "@aws-sdk/client-ses";
// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const ses = new SESClient({ region: REGION });
export { ses };
 
var RECEIVER = 'take1risk@gmail.com';
var SENDER = 'take1risk@gmail.com';

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
};
 
function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}



import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./libs/sesClient.js";

const createSendEmailCommand = (toAddress, fromAddress) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [
        toAddress,
      ],
    },
    Message: {
        Body: {
            Text: {
                Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                Charset: 'UTF-8'
            }
        },
        Subject: {
            Data: 'Website Referral Form: ' + event.name,
            Charset: 'UTF-8'
        }
    },
    Source: fromAddress,
  });
};

const run = async () => {
  const sendEmailCommand = createSendEmailCommand(
    "take1risk@gmail.com",
    "take1risk@gmail.com"
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.");
    return e;
  }
};


// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });

export const handler = async(event) => {
  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: ["take1risk@gmail.com"],
    },
     Message: {
        Body: {
            Text: {
                Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                Charset: 'UTF-8'
            }
        },
        Subject: {
            Data: 'Website Referral Form: ' + event.name,
            Charset: 'UTF-8'
        }
    },
    Source: "take1risk@gmail.com",
  });

  try {
    let response = await ses.send(command);
    // process data.
    return response;
  }
  catch (error) {
    // error handling.
  }
  finally {
    // finally.
  }
};


// exports is not defined in ES module scope
