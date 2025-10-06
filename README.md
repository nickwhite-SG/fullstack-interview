# Permit Registration System - Interview Project

This is a technical interview project featuring a permit registration system with an ASP.NET Core API backend and Angular frontend.

## Quick Start

The development environment is pre-configured. To start the applications:

### Backend API

```bash
cd InterviewApi
dotnet run
```

The API will be available at `http://localhost:5098`
Swagger documentation: `http://localhost:5098/swagger`

### Frontend Application

```bash
cd interview-frontend
ng serve --proxy-config proxy.conf.json --host 0.0.0.0
```

The Angular app will be available at `http://localhost:4200`

## Project Structure

```
permit-interview/
├── InterviewApi/           # ASP.NET Core Web API
│   ├── Controllers/        # API Controllers
│   ├── Models/            # Data models
│   ├── DTOs/              # Data transfer objects
│   └── Data/              # Entity Framework context
└── interview-frontend/     # Angular application
    ├── src/app/
    │   ├── components/     # Angular components
    │   ├── models/         # TypeScript interfaces
    │   └── services/       # HTTP services
```

## What's Already Implemented

- Basic project structure and configuration
- In-memory database with seed data
- Permit registration model and DTOs
- Basic API controller with GET all permits
- Angular service for API communication
- Permit list component displaying data
- Navigation between pages

## Interview Tasks

You'll be asked to implement various features. The specific tasks will be provided during the interview.

## Available Data

The system includes sample permit registrations with different types (Building, Electrical, etc.) and statuses (Pending, Under Review, Approved, etc.).

Good luck!
