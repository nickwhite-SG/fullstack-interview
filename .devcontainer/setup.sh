#!/bin/bash

echo "Setting up Permit Interview Environment..."

# Install Angular CLI globally
npm install -g @angular/cli

# Install backend dependencies
echo "Installing .NET dependencies..."
cd InterviewApi
dotnet restore

#!/bin/bash

echo "Setting up Permit Interview Environment..."

# Install Angular CLI globally
npm install -g @angular/cli

# Install backend dependencies
echo "Installing .NET dependencies..."
cd InterviewApi
dotnet restore

# Install frontend dependencies
echo "Installing Angular dependencies..."
cd ../interview-frontend
npm install

echo "Setup complete!"
echo ""
echo "To start the development servers:"
echo "1. Backend: cd InterviewApi && dotnet run"
echo "2. Frontend: cd interview-frontend && ng serve --proxy-config proxy.conf.json --host 0.0.0.0"