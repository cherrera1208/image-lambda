# image-lambda

AWS Lambda allows writing code that is triggered in the cloud, without thinking about maintaining servers. We’ll use it today to automatically run some processing on image files after they’re uploaded to an S3 Bucket

## Feature Tasks

* Create an S3 Bucket with “open” read permissions, so that anyone can see the images/files in their browser
* A user should be able to upload an image at any size, and update a dictionary of all images that have been uploaded so far
* When an **image** is uploaded to your S3 bucket, it should trigger a Lambda function which must:
  * Download a file called “images.json” from the S3 Bucket if it exists
  * The images.json should be an array of objects, each representing an image. Create an empty array if this file is not present
  * Create a metadata object describing the image
    * Name, Size, Type, etc.
  * Append the data for this image to the array
    * Note: If the image is a duplicate name, update the object in the array, don’t just add it
  * Upload the images.json file back to the S3 bucket

> **NOTE** - If you setup your S3 Bucket to trigger your Lambda function on every file uploaded or modified, it will run that Lambda function every time that .json file is re-uploaded, putting you into an infinite loop. Be sure and set the event trigger to only run on files with image extensions as shown below.

## Documentation

### How to Use My Lambda

Upload your file through the AWS s3 bucket GUI and the lambda function will return the information as a JSON

### Issues encountered

for some reason I get an accessed denied error even though it returns my file info I request. I noticed the error occurred when I added `.promise();` to the await method. But without the promise I don't get the data I need. It's odd, but I'll find a solution.

### Image Link

AWS IDE
![AWS IDE](/img/awsLambda.png)
