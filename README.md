# Bedrock Models Application Deployment Guide

This guide provides instructions for deploying the backend CDK code and the frontend React application for the Bedrock Models project.

## Backend Deployment (CDK)

### Initial Setup

1. Open AWS CloudShell in your target account.
2. Clone the repository:
   ```
   git clone https://github.com/ASUCICREPO/bedrock-models
   ```
3. Navigate to the project directory:
   ```
   cd bedrock-models/bedrock-models-cdk-app
   ```
4. Set up the Python virtual environment:
   ```
   python3 -m venv .venv
   source .venv/bin/activate
   ```
5. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

### Deploy

1. Bootstrap the CDK (if not done before):
   ```
   cdk bootstrap
   ```
2. Deploy the stack:
   ```
   cdk deploy
   ```
3. Confirm the deployment when prompted.
4. Save the output URLs for frontend deployment.

## Frontend Deployment

### Prerequisites

1. Install Node.js and npm from [https://nodejs.org](https://nodejs.org)
2. Verify installation:
   ```
   node -v
   npm -v
   ```

### Setup and Build

1. Clone the repository locally:
   ```
   git clone https://github.com/ASUCICREPO/bedrock-models
   ```
2. Navigate to the frontend folder:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create and update the `.env` file:
   ```
   touch .env
   ```
   Add the following lines to the `.env` file:
   ```
   REACT_APP_MODEL_INFORMATIONS=<List models functional URL>
   REACT_APP_CONVERSE_API=<Converse bedrock functional URL>
   ```
5. Test the app locally:
   ```
   npm start
   ```
6. Build the app:
   ```
   npm run build
   ```
7. Install Amplify CLI:
   ```
   npm install -g @aws-amplify/cli
   ```

### Package for Deployment

1. Navigate to the build folder:
   ```
   cd build
   ```
2. Zip the contents:
   ```
   zip -r Interactive-ai-app-build.zip ./*
   ```

### Deploy with AWS Amplify

1. Open the AWS Amplify Console.
2. Click "Create new app" > "Deploy without Git" > Next.
3. Name your application.
4. Drag and drop the `Interactive-ai-app-build.zip` file.
5. Click "Deploy".
6. Monitor the deployment process.
7. Use the provided URL to access your hosted React app.